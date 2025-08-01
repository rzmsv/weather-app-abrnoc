import { WeatherType } from "../../types/weather.type"
import redisClient from '../../utils/redisClient.util';


class WeatherRedis {

  constructor() { }

  weatherById_redis = async (id: string) => {
    const cacheKey = `weather:id:${id}`;
    try {
      const cached = await redisClient.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
      return null
    } catch (error) {
      throw error
    }
  }

  weatherByCityName_redis = async (cityName: string) => {
    const cacheKey = `weather:cityName:${cityName.toLowerCase()}`;
    try {
      const cached = await redisClient.get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
      return null
    } catch (error) {
      throw error
    }
  }

  setCurrentWeatherInDB_redis = async (data: WeatherType, id: number) => {
    try {
      const cacheKeyById = `weather:id:${id}`;
      await redisClient.setEx(cacheKeyById, 3600, JSON.stringify(data));
    } catch (error) {
      throw error
    }
  }


  weatherDeleteInformation_redis = async (id: string) => {
    const cacheKeyById = `weather:id:${id}`;
    try {
      await redisClient.del(cacheKeyById);
    } catch (error) {
      throw error
    }
  }
}

export default WeatherRedis