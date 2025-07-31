import dotenv from 'dotenv';
dotenv.config()
export const appConfigs = {
  /* ----------------------------------- APP ---------------------------------- */
  APP_PORT: process.env.APP_PORT || "3000",

  /* --------------------------------- PRISMA --------------------------------- */
  DATABASE_URL: process.env.DATABASE_URL || "",

  /* ---------------------------------- HASH ---------------------------------- */
  BCRYPT_SALT: process.env.BCRYPT_SALT || "10",
  /* ----------------------------------- JWT ---------------------------------- */
  JWT_SECRET: process.env.JWT_SECRET || "secret"
}