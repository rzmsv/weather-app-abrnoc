import { Router } from "express"
import v1 from "./v1"
const router = Router()


/* ------------------------------ Prefix: /api/ ----------------------------- */
router.use("/v1", v1)

export default router