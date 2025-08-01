import { AddWeatherTypeRequest, WeatherType, UpdateWeatherRequest } from "../../types/weather.type"
import weatherApiClient from "../../utils/weatherApiClient.util"
import WeatherRepository from "../../repositories/weather/weather.repository"
import { ErrorResult } from "../../core/error.core"
import { MessageCode } from "../../core/messages/message-code.message"

class WeatherService {
  private weatherRepo: WeatherRepository
  constructor(weatherRepo: WeatherRepository) {
    this.weatherRepo = weatherRepo
  }

  weatherList_service = async () => {
    const response = await this.weatherRepo.weatherList_repository()
    return response
  }

  weatherById_service = async (id: string) => {
    const response = await this.weatherRepo.weatherById_repository(id)
    return response
  }

  weatherByCityName_service = async (cityName: string) => {
    const coordinate = await weatherApiClient.CoordinatesByCityName(cityName)
    const currentForcast = await weatherApiClient.CurrentForcast(coordinate[0].lat, coordinate[0].lon)
    return currentForcast
  }

  addCurrentWeatherInDB_service = async (body: AddWeatherTypeRequest) => {

    try {
      const coordinate = await weatherApiClient.CoordinatesByLocationName(body)
      const currentForcast = await weatherApiClient.CurrentForcast(coordinate[0].lat, coordinate[0].lon)

      const weather: WeatherType = {
        cityName: currentForcast[0].name,
        country: currentForcast.sys.country,
        temperature: currentForcast.main.temp,
        description: currentForcast.weather[0].description,
        humidity: currentForcast.main.humidity,
        windSpeed: currentForcast.wind.speed
      }
      const response = await this.weatherRepo.addCurrentWeatherInDB_repository(weather)
      return response
    } catch (error) {
      throw ErrorResult.internal(error, null)
    }
  }

  weatherUpdateInformation_service = async (id: string, body: UpdateWeatherRequest) => {
    try {
      const response = await this.weatherRepo.weatherUpdateInformation_repository(id, body)
      return response
    } catch (error) {
      throw error
    }
  }

  weatherDeleteInformation_service = async (id: string) => {
    const response = await this.weatherRepo.weatherDeleteInformation_repository(id)
    return response
  }


}

export default WeatherService