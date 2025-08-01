import { WeatherType } from "../../types/weather.type"
import { AppDataSource } from '../../db/data-source.db';
import { Weather } from "../../entities/weather.entity";


const weatherRepo = AppDataSource.getRepository(Weather);

class WeatherRepository {

  constructor() { }

  weatherList_repository = async () => {

  }

  weatherById_repository = async () => {


  }

  weatherByCityName_repository = async () => {

  }

  addCurrentWeatherInDB_repository = async (data: WeatherType) => {
    try {
      const newWeather = weatherRepo.create(data);
      return await weatherRepo.save(newWeather);
    } catch (error) {
      console.error(error)
    }


  }

  weatherUpdateInformation_repository = async () => {

  }

  weatherDeleteInformation_repository = async () => {

  }


}

export default WeatherRepository