import dotenv from 'dotenv';
dotenv.config()
export const appConfigs = {
  /* ----------------------------------- APP ---------------------------------- */
  APP_PORT: process.env.APP_PORT || "3000",
  APP_HOST: process.env.APP_HOST || "localhost",
  APP_PROTOCOL: process.env.APP_PROTOCOL || "http",

  /* --------------------------------- PRISMA --------------------------------- */
  DB_TYPE: process.env.DB_TYPE || "postgres",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 5462,
  DB_USER_NAME: process.env.DB_USER_NAME || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME || "",

  /* ---------------------------- OPEN WEATHER MAP ---------------------------- */
  OPEN_WEATHER_MAP_BASE_URL: process.env.OPEN_WEATHER_MAP_BASE_URL || "",
  OPEN_WEATHER_MAP_APP_ID: process.env.OPEN_WEATHER_MAP_APP_ID || "",

  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',

  /* ---------------------------------- HASH ---------------------------------- */
  BCRYPT_SALT: process.env.BCRYPT_SALT || "10",
  /* ----------------------------------- JWT ---------------------------------- */
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  JWT_EXPIRE_IN: process.env.JWT_EXPIRE_IN || "1h"
}