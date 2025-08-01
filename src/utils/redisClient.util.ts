import { createClient } from 'redis';
import { appConfigs } from '../configs';

const redisClient = createClient({
  url: appConfigs.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};

export default redisClient;