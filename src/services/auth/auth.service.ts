import { AddWeatherTypeRequest, WeatherType, UpdateWeatherRequest } from "../../types/weather.type"
import weatherApiClient from "../../utils/weatherApiClient.util"
import WeatherRepository from "../../repositories/weather/weather.repository"
import WeatherRedis from "../../repositories/weather/weather-redis.repository"
import { ErrorResult } from "../../core/error.core"

class AuthService {
  constructor() { }

  signup_service = async (body: AddWeatherTypeRequest) => {
    try {
      // const coordinate = await weatherApiClient.CoordinatesByLocationName(body)
      // const currentForcast = await weatherApiClient.CurrentForcast(coordinate[0].lat, coordinate[0].lon)

      // const weather: WeatherType = {
      //   cityName: currentForcast.name,
      //   country: currentForcast.sys.country,
      //   temperature: currentForcast.main.temp,
      //   description: currentForcast.weather[0].description,
      //   humidity: currentForcast.main.humidity,
      //   windSpeed: currentForcast.wind.speed
      // }
      // const response = await this.weatherRepo.addCurrentWeatherInDB_repository(weather)
      // /* ------------------------------ SET IN REDIS ------------------------------ */
      // await this.weatherRedis.setCurrentWeatherInDB_redis(response, response.id)

      // return response
    } catch (error) {
      throw ErrorResult.internal(error, null)
    }
  }

  login_service = async (body: UpdateWeatherRequest) => {
    try {
      // const response = await this.weatherRepo.weatherUpdateInformation_repository(id, body)
      // /* ------------------------------ SET IN REDIS ------------------------------ */
      // await this.weatherRedis.setCurrentWeatherInDB_redis(response, response.id)
      // return response
    } catch (error) {
      throw error
    }
  }

}

export default AuthService