import { Request, Response, NextFunction } from "express";
import WeatherService from "../../services/weather/waether.service";
import { AddWeatherTypeRequest } from "../../types/weather.type"

class WeatherController {
  private weatherService: WeatherService
  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService
  }

  weatherList_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("List of weather from DB.")
  }

  weatherById_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("Weather by ID .")

  }

  weatherByCityName_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.json("Weather by city name .")
  }

  addCurrentWeatherInDB_controller = async (req: Request, res: Response, next: NextFunction) => {
    const body: AddWeatherTypeRequest = req.body
    const result = await this.weatherService.addCurrentWeatherInDB_service(body)
    res.json(result)
  }

  weatherUpdateInformation_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("update weather information .")
  }

  weatherDeleteInformation_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("delete weather information .")
  }


}

export default WeatherController