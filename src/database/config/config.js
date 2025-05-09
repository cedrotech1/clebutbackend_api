import dotenv from "dotenv";
dotenv.config();
const {
  DEV_DATABASE_NAME,
  DEV_DATABASE_USER,
  DEV_DATABASE_PASSWORD,
  DEV_DATABASE_HOST,
  DEV_DATABASE_PORT,
  PRO_DATABASE_NAME,
  PRO_DATABASE_USER,
  PRO_DATABASE_PASSWORD,
  PRO_DATABASE_HOST,
  PRO_DATABASE_PORT,
} = process.env;

module.exports = {
  development: {
    username: DEV_DATABASE_USER,
    password: DEV_DATABASE_PASSWORD,
    database: DEV_DATABASE_NAME,
    host: DEV_DATABASE_HOST,
    port: DEV_DATABASE_PORT,
    dialect: "postgres",
  },
  production: {
    username: PRO_DATABASE_USER,
    password: PRO_DATABASE_PASSWORD,
    database: PRO_DATABASE_NAME,
    host: PRO_DATABASE_HOST,
    port: PRO_DATABASE_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

