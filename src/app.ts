import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import productRoute from './app/modules/Product/product.router';

export const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
app.use('/api/v1/product', productRoute);
