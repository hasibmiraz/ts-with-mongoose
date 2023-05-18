import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { URI } = process.env;
const port = process.env.PORT || 5000;

const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      throw new Error('URI not defined');
    }
    await mongoose.connect(URI).then(() => console.log('DB connected'));
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running 😈',
  });
});

dbConnect();
