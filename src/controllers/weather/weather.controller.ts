import { Request, Response, NextFunction } from "express";
import WeatherService from "../../services/weather/waether.service";
import { AddWeatherTypeRequest, UpdateWeatherRequest } from "../../types/weather.type"
import { BaseController } from "../../core/base.message"


class WeatherController {
  private weatherService: WeatherService
  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService
  }

  weatherList_controller = async (req: Request, res: Response, next: NextFunction) => {
    const result = await this.weatherService.weatherList_service()
    return BaseController.ok(res, result)
  }

  weatherById_controller = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await this.weatherService.weatherById_service(id)
    return BaseController.ok(res, result)
  }

  weatherByCityName_controller = async (req: Request, res: Response, next: NextFunction) => {
    const { cityName } = req.params
    const result = await this.weatherService.weatherByCityName_service(cityName)
    return BaseController.ok(res, result)
  }

  addCurrentWeatherInDB_controller = async (req: Request, res: Response, next: NextFunction) => {
    const body: AddWeatherTypeRequest = req.body
    const result = await this.weatherService.addCurrentWeatherInDB_service(body)
    return BaseController.ok(res, result)
  }

  weatherUpdateInformation_controller = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const body: UpdateWeatherRequest = req.body
    const result = await this.weatherService.weatherUpdateInformation_service(id, body)
    return BaseController.ok(res, result)
  }

  weatherDeleteInformation_controller = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await this.weatherService.weatherDeleteInformation_service(id)
    return BaseController.ok(res, result)
  }


}

export default WeatherController