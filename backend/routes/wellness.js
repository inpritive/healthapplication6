import express from 'express';
import { connectToDatabase } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const phone = req.query.phone || req.body?.phone;
  if (!phone) {
    return res.status(400).json({ error: 'Phone parameter is required' });
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('wellnessLogs');
    const doc = await collection.findOne({ phone });
    return res.status(200).json(doc || {});
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Database connection error' });
  }
});

router.post('/', async (req, res) => {
  const phone = req.query.phone || req.body?.phone;
  if (!phone) {
    return res.status(400).json({ error: 'Phone parameter is required' });
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('wellnessLogs');

    const data = { ...req.body };
    delete data._id; // Ensure we don't try to update immutable _id

    await collection.updateOne(
      { phone },
      { $set: { ...data, updatedAt: new Date() } },
      { upsert: true }
    );
    const updated = await collection.findOne({ phone });
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Database connection error' });
  }
});

export default router;
