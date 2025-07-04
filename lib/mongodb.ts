import { MongoClient, Db } from "mongodb"

const uri = process.env.MONGODB_URI
if (!uri) throw new Error("MONGODB_URI env variable not set")
let client: MongoClient | null = null
let db: Db | null = null

export async function getDb(): Promise<Db> {
  if (db) return db
  if (!client) {
    client = new MongoClient(uri)
    await client.connect()
  }
  db = client.db()
  return db
} 