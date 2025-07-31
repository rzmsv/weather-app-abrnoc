import express from "express"
import morgan from "morgan"
import cors from "cors"
import appRoutes from "./routes"


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(morgan('dev'));

/* --------------------------------- ROUTES --------------------------------- */
app.use("/", appRoutes)

export default app