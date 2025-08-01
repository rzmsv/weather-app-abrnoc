import axios, { AxiosInstance } from "axios";
import { appConfigs } from "../configs"
import { AddWeatherTypeRequest } from "../types/weather.type"

class weatherApiClient {
  constructor(private axiosInstance: AxiosInstance) {
    this.axiosInstance = axios.create({
      baseURL: appConfigs.OPEN_WEATHER_MAP_BASE_URL,
      timeout: 5000,
      params: {
        appid: process.env.OPEN_WEATHER_MAP_APP_ID,
        unite: "metric",
        exclude: "current"
      }
    })
  }

  CoordinatesByLocationName = async (data: AddWeatherTypeRequest) => {
    const response = await this.axiosInstance.get("/geo/1.0/direct", {
      params: {
        q: `${data.cityName},${data.country}`
      }
    })
    return response.data
  }

  CurrentForcast = async (lat: string, lon: string) => {
    const response = await this.axiosInstance.get("/data/2.5/weather", {
      params: {
        lat: `${lat}`,
        lon: `${lon}`
      }
    })
    return response.data
  }

}

export default new weatherApiClient(axios)