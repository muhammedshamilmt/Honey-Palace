import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const db = await getDb()
    const productData: any = {
      ...data,
      createdAt: new Date(),
    }
    // Ensure images is always an array if provided
    if (Array.isArray(data.images) && data.images.length > 0) {
      productData.images = data.images
      delete productData.image
    } else if (data.image) {
      productData.image = data.image
    }
    if (data.originalPrice !== undefined) {
      productData.originalPrice = Number(data.originalPrice)
    }
    // Store features, specifications, and benefits if provided
    if (Array.isArray(data.features)) {
      productData.features = data.features
    }
    if (data.specifications && typeof data.specifications === 'object') {
      productData.specifications = data.specifications
    }
    if (Array.isArray(data.benefits)) {
      productData.benefits = data.benefits
    }
    const result = await db.collection("products").insertOne(productData)
    return NextResponse.json({ success: true, insertedId: result.insertedId })
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const db = await getDb()
    const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json({ success: true, products })
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
} 