import { Router } from "express"
import WeatherController from "../../../../controllers/weather/weather.controller"
const router = Router()


/* -------------------------------------------------------------------------- */
/*                          Prefix: /api/v1/weather/                          */
/* -------------------------------------------------------------------------- */
/* ----------------------------------- GET ---------------------------------- */
router.get("/", WeatherController.weatherList_controller)
router.get("/:id", WeatherController.weatherById_controller)
router.get("/latest/:cityName", WeatherController.weatherByCityName_controller)
/* ---------------------------------- POST ---------------------------------- */
router.post("/", WeatherController.addCurrentWeatherInDB_controller)
/* ----------------------------------- PUT ---------------------------------- */
router.put("/:id", WeatherController.weatherUpdateInformation_controller)
/* --------------------------------- DELETE --------------------------------- */
router.delete("/:id", WeatherController.weatherDeleteInformation_controller)

export default router