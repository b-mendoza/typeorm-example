import 'dotenv/config';
import { DataSource } from 'typeorm';

import { Banker } from '@entities/Banker';
import { Client } from '@entities/Client';

if (process.env.PORT == null) throw new Error('`PORT` is not defined');

const MIGRATIONS_DIR = `${__dirname}/migrations/**/*.ts`;
const PORT = parseInt(process.env.PORT);

export const AppDataSource = new DataSource({
  type: 'postgres',
  database: process.env.DATABASE,
  entities: [Banker, Client],
  host: process.env.HOST,
  logging: true,
  migrations: [MIGRATIONS_DIR],
  password: process.env.PASSWORD,
  port: PORT,
  username: process.env.USERNAME,
});
