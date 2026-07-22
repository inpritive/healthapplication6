import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI is not defined. Ensure you have a .env file or environment variable set.');
    // We can still return null or throw an error based on whether we want to fail gracefully.
    // Throwing an error ensures the app knows it can't connect.
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  cachedClient = client;
  cachedDb = db;

  console.log('Successfully connected to MongoDB');
  return { client, db };
}
