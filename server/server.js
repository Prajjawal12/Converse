import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from '../server/routes/auth_routes.js';
import messageRoutes from '../server/routes/message_routes.js';
import userRoutes from '../server/routes/user_routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
//creating a middleware
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
