import { Router } from "express";
import apiRoutes from "./api"

const router = Router();


router.use('/api', apiRoutes)

/* ----------------------------------- 404 ---------------------------------- */
router.use((req, res) => {
  res.status(404).send("404");
});

export default router