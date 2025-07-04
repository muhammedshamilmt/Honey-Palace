import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { db } = await connectToDatabase()
    let orderData = {
      ...data,
      status: data.paymentMethod === "upi" ? "Pending Payment" : "Processing",
      createdAt: new Date(),
    }

    // If UPI, create a Razorpay order
    if (data.paymentMethod === "upi") {
      const payment = await razorpay.orders.create({
        amount: data.total * 100, // amount in paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        payment_capture: 1,
      })
      // Store razorpayOrderId in the DB
      orderData = {
        ...orderData,
        razorpayOrderId: payment.id,
      }
      const result = await db.collection("orders").insertOne(orderData)
      return NextResponse.json({
        success: true,
        insertedId: result.insertedId,
        razorpayOrder: payment,
        key_id: process.env.RAZORPAY_KEY_ID,
      })
    } else {
      const result = await db.collection("orders").insertOne(orderData)
      return NextResponse.json({ success: true, insertedId: result.insertedId })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { orderId, status } = await req.json()
    if (!orderId || !status) {
      return NextResponse.json({ success: false, error: "Missing orderId or status" }, { status: 400 })
    }
    const { db } = await connectToDatabase()
    const result = await db.collection("orders").updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status } }
    )
    if (result.modifiedCount === 1) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: "Order not found or not updated" }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const { db } = await connectToDatabase()
    const url = new URL(req.url)
    const id = url.searchParams.get("id")
    if (id) {
      // Try to find by _id (ObjectId) or by custom id
      let order = null
      if (/^[0-9a-fA-F]{24}$/.test(id)) {
        order = await db.collection("orders").findOne({ _id: new ObjectId(id) })
      }
      if (!order) {
        order = await db.collection("orders").findOne({ id })
      }
      if (order) {
        return NextResponse.json({ success: true, order })
      } else {
        return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
      }
    }
    // If no id param, return all orders
    const orders = await db.collection("orders").find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json({ success: true, orders })
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
} 