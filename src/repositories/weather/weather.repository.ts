import { WeatherType, UpdateWeatherRequest } from "../../types/weather.type"
import { AppDataSource } from '../../db/data-source.db';
import { Weather } from "../../entities/weather.entity";
import { ErrorResult } from "../../core/error.core"
import { MessageCode } from "../../core/messages/message-code.message"


const weatherRepo = AppDataSource.getRepository(Weather);

class WeatherRepository {

  constructor() { }

  weatherList_repository = async () => {
    const weatherList = weatherRepo.find();
    return weatherList
  }

  weatherById_repository = async (id: string) => {
    try {
      const weather = await weatherRepo.findOneBy({ id: parseInt(id) })
      if (!weather) {
        throw ErrorResult.notFound("", MessageCode.notFound)
      }
      return weather
    } catch (error) {
      throw error;
    }
  }



  weatherByCityName_repository = async () => {

  }

  addCurrentWeatherInDB_repository = async (data: WeatherType) => {
    try {
      const newWeather = weatherRepo.create(data);
      return await weatherRepo.save(newWeather);
    } catch (error) {
      throw error
    }
  }

  weatherUpdateInformation_repository = async (id: string, body: UpdateWeatherRequest) => {
    try {
      await weatherRepo.update(id, body);
      const weather = await weatherRepo.findOneBy({ id: parseInt(id) })
      if (!weather) {
        throw ErrorResult.notFound("", MessageCode.notFound)
      }
      return weather
    } catch (error) {
      throw error;
    }
  }

  weatherDeleteInformation_repository = async (id: string) => {
    try {
      const weather = await weatherRepo.delete({ id: parseInt(id) });
      if (weather.affected === 0) {
        throw ErrorResult.notFound("", MessageCode.notFound);
      }
      return weather
    } catch (error) {
      throw error
    }
  }
}

export default WeatherRepository