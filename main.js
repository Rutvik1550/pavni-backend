// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './config/db.js';
import productRoutes from './routes/product.js';
import contactRoutes from './routes/contact.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: ['http://localhost:3001', 'https://yourfrontend.com', "*"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));

app.use('/api/product', productRoutes);
app.use('/api/contact', contactRoutes);

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`)
);
