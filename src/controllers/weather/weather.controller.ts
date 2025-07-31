import { Request, Response, NextFunction } from "express";
import WeatherService from "../../services/weather/waether.service";

export class WeatherController {
  constructor(private weatherService: WeatherService) { }

  weatherList_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("List of weather from DB.")
  }

  weatherById_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("Weather by ID .")

  }

  weatherByCityName_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("Weather by city name .")
  }

  addCurrentWeatherInDB_controller = async (req: Request, res: Response, next: NextFunction) => {
    const result = await this.weatherService.addCurrentWeatherInDB_service()
    res.send(result)
  }

  weatherUpdateInformation_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("update weather information .")
  }

  weatherDeleteInformation_controller = async (req: Request, res: Response, next: NextFunction) => {
    res.send("delete weather information .")
  }


}

export default new WeatherController(new WeatherService)