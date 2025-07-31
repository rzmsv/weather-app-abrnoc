import app from './app';
import { appConfigs } from './configs';

const PORT = appConfigs.APP_PORT || 3000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();