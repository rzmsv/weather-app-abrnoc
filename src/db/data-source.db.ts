import { appConfigs } from "../configs/"
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Weather } from "../entities/weather.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: appConfigs.DB_HOST,
  port: +appConfigs.DB_PORT,
  username: appConfigs.DB_USER_NAME,
  password: appConfigs.DB_PASSWORD,
  database: appConfigs.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Weather],
  migrations: [],
  subscribers: [],
});