import Knex from 'knex';
import dotenv from "dotenv";

dotenv.config();

const config: Knex.Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/db/migrations',
  },
};

export default config;
