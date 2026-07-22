import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginRoute from './routes/login.js';
import registrationRoute from './routes/registration.js';
import wellnessRoute from './routes/wellness.js';
import birthPreparednessRoute from './routes/birthPreparedness.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/login', loginRoute);
app.use('/api/registration', registrationRoute);
app.use('/api/wellness', wellnessRoute);
app.use('/api/birth-preparedness', birthPreparednessRoute);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Serve frontend in production
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../dist')));

// Anything that doesn't match the API routes should be handled by React Router
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
