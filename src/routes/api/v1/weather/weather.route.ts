import { Router } from "express"
import { asyncHandler } from "../../../../core/asyncHandler.core"
import WeatherRepository from "../../../../repositories/weather/weather.repository"
import WeatherService from "../../../../services/weather/waether.service"
import WeatherController from "../../../../controllers/weather/weather.controller"
const router = Router()

/* ---------------------------- SETUP REPOSITORY ---------------------------- */
const weatherRepository = new WeatherRepository()
/* ----------------------------- SETUP SERVICES ----------------------------- */
const weatherService = new WeatherService(weatherRepository)
/* ---------------------------- SETUP CONTROLLER ---------------------------- */
const weatherController = new WeatherController(weatherService)


/* -------------------------------------------------------------------------- */
/*                          Prefix: /api/v1/weather/                          */
/* -------------------------------------------------------------------------- */
/* ----------------------------------- GET ---------------------------------- */
router.get("/", asyncHandler(weatherController.weatherList_controller))
router.get("/:id", asyncHandler(weatherController.weatherById_controller))
router.get("/latest/:cityName", asyncHandler(weatherController.weatherByCityName_controller))
/* ---------------------------------- POST ---------------------------------- */
router.post("/", asyncHandler(weatherController.addCurrentWeatherInDB_controller))
/* ----------------------------------- PUT ---------------------------------- */
router.put("/:id", asyncHandler(weatherController.weatherUpdateInformation_controller))
/* --------------------------------- DELETE --------------------------------- */
router.delete("/:id", asyncHandler(weatherController.weatherDeleteInformation_controller))

export default router