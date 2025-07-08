import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import Razorpay from "razorpay"
import nodemailer from "nodemailer"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

// Helper to generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Helper to send OTP email
async function sendOtpEmail(to: string, otp: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "1honeypalace@gmail.com",
      pass: process.env.EMAIL_PASS || "gfjy orji qodb hcyq",
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certs (development only)
    },
  });

  const mailOptions = {
    from: 'Honey Palace <1honeypalace@gmail.com>',
    to,
    subject: "Your Honey Palace Order OTP",
    text: `Your OTP for order confirmation is: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { db } = await connectToDatabase()
    let orderData = {
      ...data,
      status: data.paymentMethod === "upi" ? "Pending Payment" : "Processing",
      createdAt: new Date(),
    }

    // Generate OTP and send email
    const otp = generateOTP();
    // Send OTP to both formData.email and data.email if both exist and are different
    const emailsToSend = [];
    if (data.formData?.email) emailsToSend.push(data.formData.email);
    if (data.email && data.email !== data.formData?.email) emailsToSend.push(data.email);
    await Promise.all(emailsToSend.map(email => sendOtpEmail(email, otp)));
    orderData.otp = otp;

    // If UPI, create a Razorpay order
    if (data.paymentMethod === "upi") {
      const payment = await razorpay.orders.create({
        amount: data.total * 100, // amount in paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        payment_capture: true,
      });
      // Store razorpayOrderId in the DB
      orderData = {
        ...orderData,
        razorpayOrderId: payment.id,
      };
      const result = await db.collection("orders").insertOne(orderData);
      return NextResponse.json({
        success: true,
        insertedId: result.insertedId,
        razorpayOrder: payment,
        key_id: process.env.RAZORPAY_KEY_ID,
        otp, // For testing, remove in production
      });
    } else {
      const result = await db.collection("orders").insertOne(orderData)
      return NextResponse.json({ success: true, insertedId: result.insertedId, otp }) // For testing, remove in production
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