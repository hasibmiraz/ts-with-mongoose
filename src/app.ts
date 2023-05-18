import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';

export const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
