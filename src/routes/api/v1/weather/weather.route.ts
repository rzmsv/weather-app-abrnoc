import { Router } from "express"
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
router.get("/", weatherController.weatherList_controller)
router.get("/:id", weatherController.weatherById_controller)
router.get("/latest/:cityName", weatherController.weatherByCityName_controller)
/* ---------------------------------- POST ---------------------------------- */
router.post("/", weatherController.addCurrentWeatherInDB_controller)
/* ----------------------------------- PUT ---------------------------------- */
router.put("/:id", weatherController.weatherUpdateInformation_controller)
/* --------------------------------- DELETE --------------------------------- */
router.delete("/:id", weatherController.weatherDeleteInformation_controller)

export default router