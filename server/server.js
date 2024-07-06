import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from '../server/routes/auth_routes.js';
import messageRoutes from '../server/routes/message_routes.js';
import userRoutes from '../server/routes/user_routes.js';
import { app, server } from './socket/socket.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
//creating a middleware
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
