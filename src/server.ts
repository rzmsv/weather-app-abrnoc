import app from './app';
import { AppDataSource } from './db/data-source.db';
import { appConfigs } from './configs';

const PORT = appConfigs.APP_PORT || 3000;

const startServer = async () => {
  try {
    /* -------------------------------- DATABASE -------------------------------- */
    await AppDataSource.initialize()
    /* ------------------------------- RUN SERVER ------------------------------- */
    app.listen(PORT, () => {
      console.table({ APP: `http://localhost:${PORT}`, DATABASE: appConfigs.DB_PORT })
    })
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();