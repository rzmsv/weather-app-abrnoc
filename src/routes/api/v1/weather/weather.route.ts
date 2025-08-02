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
/**
 * @swagger
 * /weather:
 *   get:
 *     tags:
 *       - WEATHER
 *     summary: Weathers list.
 *     description: List Of Weathers.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", asyncHandler(weatherController.weatherList_controller))

/**
 * @swagger
 * /weather/{id}:
 *   get:
 *     tags:
 *       - WEATHER
 *     summary: Get weather by ID.
 *     description: Get weather by ID.
  *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/:id", asyncHandler(weatherController.weatherById_controller))

/**
 * @swagger
 * /weather/latest/{cityName}:
 *   get:
 *     tags:
 *       - WEATHER
 *     summary: Get Weather by city name.
 *     description: Get Weather by city name.
 *     parameters:
 *       - in: path
 *         name: cityName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/latest/:cityName", asyncHandler(weatherController.weatherByCityName_controller))
/* ---------------------------------- POST ---------------------------------- */
/**
 * @swagger 
 * /weather:
 *   post:
 *     tags:
 *       - WEATHER
 *     summary: Add weather.
 *     description: Get weather and add into DB.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - lastname
 *               - email
 *               - password
 *             properties:
 *               cityName:
 *                 type: string
 *               country:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", asyncHandler(userAuth), asyncHandler(validateDto(AddWeatherTypeRequest)), asyncHandler(weatherController.addCurrentWeatherInDB_controller))
/* ----------------------------------- PUT ---------------------------------- */
/**
 * @swagger 
 * /weather/{id}:
 *   put:
 *     tags:
 *       - WEATHER
 *     summary: Update weather.
 *     description: Update weather.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - temperature
 *               - description
 *             properties:
 *               temperature:
 *                 type: integer
 *               description:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", asyncHandler(userAuth), asyncHandler(validateDto(UpdateWeatherRequest)), asyncHandler(weatherController.weatherUpdateInformation_controller))
/* --------------------------------- DELETE --------------------------------- */
/**
 * @swagger
 * /weather/{id}:
 *   delete:
 *     tags:
 *       - WEATHER
 *     summary: Delete weather.
 *     description: Delete weather.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.delete("/:id", asyncHandler(userAuth), asyncHandler(weatherController.weatherDeleteInformation_controller))

export default router