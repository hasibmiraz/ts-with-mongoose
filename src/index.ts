import { app } from './app';
import { dbConnect } from './utils/dbconnect';
import { log } from './utils/logger';
const { PORT } = process.env;

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => log.info(`Starting server on port ${PORT}`));
    dbConnect();
  } catch (error: any) {
    log.error(error.message);
  }
};

startServer();
