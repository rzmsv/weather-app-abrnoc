import { AddWeatherTypeRequest, WeatherType } from "../../types/weather.type"
import weatherApiClient from "../../utils/weatherApiClient.util"
import WeatherRepository from "../../repositories/weather/weather.repository"

class WeatherService {
  private weatherRepo: WeatherRepository
  constructor(weatherRepo: WeatherRepository) {
    this.weatherRepo = weatherRepo
  }

  weatherList_service = async () => {

  }

  weatherById_service = async () => {


  }

  weatherByCityName_service = async () => {

  }

  addCurrentWeatherInDB_service = async (body: AddWeatherTypeRequest) => {

    try {
      const coordinate = await weatherApiClient.CoordinatesByLocationName(body)
      const currentForcast = await weatherApiClient.CurrentForcast(coordinate[0].lat, coordinate[0].lon)

      const weather: WeatherType = {
        cityName: currentForcast.name,
        country: currentForcast.sys.country,
        temperature: currentForcast.main.temp,
        description: currentForcast.weather[0].description,
        humidity: currentForcast.main.humidity,
        windSpeed: currentForcast.wind.speed
      }
      console.log("***********************", weather)
      const response = await this.weatherRepo.addCurrentWeatherInDB_repository(weather)
      return response
    } catch (error) {
      console.error(error)
    }


  }

  weatherUpdateInformation_service = async () => {

  }

  weatherDeleteInformation_service = async () => {

  }


}

export default WeatherService