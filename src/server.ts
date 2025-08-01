import app from './app';
import { AppDataSource } from './db/data-source.db';
import { appConfigs } from './configs';
import redisClient from './utils/redisClient.util';

const PORT = appConfigs.APP_PORT || 3000;

const startServer = async () => {
  try {
    /* -------------------------------- DATABASE -------------------------------- */
    await AppDataSource.initialize()
    /* ---------------------------------- REDIS --------------------------------- */
    await redisClient.connect();
    /* ------------------------------- RUN SERVER ------------------------------- */
    app.listen(PORT, () => {
      console.table({ APP: `http://localhost:${PORT}`, DATABASE: appConfigs.DB_PORT, REDIS: appConfigs.REDIS_URL })
    })
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();