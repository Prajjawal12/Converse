import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../server/routes/auth_routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//   res.send('Hello World!!!!');
// });
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
//creating a middleware
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
