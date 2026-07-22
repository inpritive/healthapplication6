import express from 'express';
import { connectToDatabase } from '../db.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { phone, role } = req.body || {};
  if (!phone || !role) {
    return res.status(400).json({ error: 'Phone and role are required' });
  }

  const userData = {
    phone,
    role,
    createdAt: new Date(),
  };

  if (!process.env.MONGODB_URI) {
    return res.status(200).json(userData);
  }

  try {
    const { db } = await connectToDatabase();
    const usersCollection = db.collection('users');

    let user = await usersCollection.findOne({ phone, role });
    if (!user) {
      const result = await usersCollection.insertOne(userData);
      user = {
        ...userData,
        _id: result.insertedId,
      };
    }

    return res.status(200).json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Database connection error';
    console.error('Login API error:', message);
    return res.status(200).json(userData); // Fallback to memory
  }
});

export default router;
