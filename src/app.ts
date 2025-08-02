import express from "express"
import { swaggerSpec, swaggerUi } from './utils/swagger.util';
import 'reflect-metadata';
import morgan from "morgan"
import cors from "cors"
import appRoutes from "./routes"


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(morgan('dev'));

/* ------------------------------- Swagger UI ------------------------------- */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/* --------------------------------- ROUTES --------------------------------- */
app.use("/", appRoutes)

export default app