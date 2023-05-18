import mongoose from 'mongoose';
import { log } from './logger';
const { URI } = process.env;

export const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      log.error('URI not defined');
      process.exit(1);
    }

    await mongoose.connect(URI);
    log.info('DB connection established');
  } catch (error: any) {
    log.error(error.message);
  }
};
