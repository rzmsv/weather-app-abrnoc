import { Router } from "express"
import weather from "./weather/weather.route"
const router = Router()


/* ---------------------------- Prefix: /api/v1/ ---------------------------- */
router.use("/weather", weather)

export default router