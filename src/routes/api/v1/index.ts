import { Router } from "express"
import weather from "./weather/weather.route"
import auth from "./auth/auth.route"
const router = Router()


/* ---------------------------- Prefix: /api/v1/ ---------------------------- */
router.use("/weather", weather)
router.use("/auth", auth)

export default router