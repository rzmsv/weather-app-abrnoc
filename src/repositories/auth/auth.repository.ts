import { WeatherType, UpdateWeatherRequest } from "../../types/weather.type"
import { AppDataSource } from '../../db/data-source.db';
import { Weather } from "../../entities/weather.entity";
import { ErrorResult } from "../../core/error.core"
import { MessageCode } from "../../core/messages/message-code.message"


// const weatherRepo = AppDataSource.getRepository(User);

class WeatherRepository {

  constructor() { }

  signup_repository = async (data: WeatherType) => {
    try {
      // const newWeather = weatherRepo.create(data);
      // return await weatherRepo.save(newWeather);
    } catch (error) {
      throw error
    }
  }

  login_repository = async (id: string, body: UpdateWeatherRequest) => {
    try {
      // await weatherRepo.update(id, body);
      // const weather = await weatherRepo.findOneBy({ id: parseInt(id) })
      // if (!weather) {
      //   throw ErrorResult.notFound("", MessageCode.notFound)
      // }
      // return weather
    } catch (error) {
      throw error;
    }
  }
}

export default WeatherRepository