import 'dotenv/config';
import { DataSource } from 'typeorm';

import { Client } from '@entity/Client';

if (process.env.PORT == null) throw new Error('`PORT` is not defined');

const parsedPort = parseInt(process.env.PORT);

const MIGRATIONS_DIR = `${__dirname}/migrations/**/*.ts`;

export const AppDataSource = new DataSource({
  type: 'postgres',
  database: process.env.DATABASE,
  entities: [Client],
  host: process.env.HOST,
  logging: true,
  migrations: [MIGRATIONS_DIR],
  password: process.env.PASSWORD,
  port: parsedPort,
  username: process.env.USERNAME,
});
