import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = await req.json()
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !orderId) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Verify signature
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex")

    const db = await getDb()
    if (generated_signature === razorpay_signature) {
      // Payment is successful
      await db.collection("orders").updateOne(
        { _id: new ObjectId(orderId) },
        { $set: { status: "Paid", razorpayPaymentId: razorpay_payment_id } }
      )
      return NextResponse.json({ success: true })
    } else {
      // Payment failed
      await db.collection("orders").updateOne(
        { _id: new ObjectId(orderId) },
        { $set: { status: "Payment Failed" } }
      )
      return NextResponse.json({ success: false, error: "Signature verification failed" }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
} 