import express from 'express';
import authRoutes from './routes/authRoutes';
import * as path from 'path';
import connectDB from './config/db';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';

const app = express();

connectDB();

app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/product', productRoutes);
app.use('/api/best-sellers', productRoutes);
app.use('/api/cart', cartRoutes);

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

export default app;
