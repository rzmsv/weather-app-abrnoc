import { Router } from "express"
import { asyncHandler } from "../../../../core/asyncHandler.core"
import { validateDto } from "../../../../middlewares/validateDTO.middleware"
import WeatherRedis from "../../../../repositories/weather/weather-redis.repository"
import WeatherRepository from "../../../../repositories/weather/weather.repository"
import WeatherService from "../../../../services/weather/waether.service"
import WeatherController from "../../../../controllers/weather/weather.controller"
import { AddWeatherTypeRequest, UpdateWeatherRequest } from "../../../../types/weather.type"
import { userAuth } from "../../../../middlewares/auth.middleware"
const router = Router()

/* ------------------------------- SETUP REDIS ------------------------------ */
const weatherRedis = new WeatherRedis()
/* ---------------------------- SETUP REPOSITORY ---------------------------- */
const weatherRepository = new WeatherRepository()
/* ----------------------------- SETUP SERVICES ----------------------------- */
const weatherService = new WeatherService(weatherRepository, weatherRedis)
/* ---------------------------- SETUP CONTROLLER ---------------------------- */
const weatherController = new WeatherController(weatherService)

/* -------------------------------------------------------------------------- */
/*                          Prefix: /api/v1/weather/                          */
/* -------------------------------------------------------------------------- */
/* ----------------------------------- GET ---------------------------------- */
router.get("/", asyncHandler(userAuth), asyncHandler(validateDto(AddWeatherTypeRequest)), asyncHandler(weatherController.weatherList_controller))
router.get("/:id", asyncHandler(weatherController.weatherById_controller))
router.get("/latest/:cityName", asyncHandler(weatherController.weatherByCityName_controller))
/* ---------------------------------- POST ---------------------------------- */
router.post("/", asyncHandler(weatherController.addCurrentWeatherInDB_controller))
/* ----------------------------------- PUT ---------------------------------- */
router.put("/:id", asyncHandler(validateDto(UpdateWeatherRequest)), asyncHandler(weatherController.weatherUpdateInformation_controller))
/* --------------------------------- DELETE --------------------------------- */
router.delete("/:id", asyncHandler(weatherController.weatherDeleteInformation_controller))

export default router