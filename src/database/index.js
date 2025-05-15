const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db("cse341");
    console.log("✅ Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

function getDatabase() {
  if (!db) throw new Error("❌ Database not initialized");
  return db;
}

module.exports = { connectToMongo, getDatabase };
