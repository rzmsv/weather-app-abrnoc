import express from "express"
import dotenv from 'dotenv';
import morgan from "morgan"
import cors from "cors"

/* -------------------------------- LOAD ENVS ------------------------------- */
dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(morgan('dev'));

export default app