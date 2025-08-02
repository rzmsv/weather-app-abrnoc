import { Router } from "express"
import { asyncHandler } from "../../../../core/asyncHandler.core"
import WeatherRedis from "../../../../repositories/weather/weather-redis.repository"
import WeatherRepository from "../../../../repositories/weather/weather.repository"
import WeatherService from "../../../../services/weather/waether.service"
import WeatherController from "../../../../controllers/weather/weather.controller"
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
/*                            Prefix: /api/v1/auth/                           */
/* -------------------------------------------------------------------------- */

router.post("/signup", asyncHandler(weatherController.weatherList_controller))
router.post("/login", asyncHandler(weatherController.weatherById_controller))


export default router