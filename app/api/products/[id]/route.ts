import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const { db } = await connectToDatabase()
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) })
    if (!product) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, product })
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
} 