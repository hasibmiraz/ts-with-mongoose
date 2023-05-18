import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';

export const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// default routes
app.get('/', (req, res) => {
  res.render('index');
});

// Import routes
import productRoute from './app/modules/Product/product.router';
// Declare routes
app.use('/api/v1/product', productRoute);
