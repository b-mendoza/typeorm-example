import 'reflect-metadata';

import { AppDataSource } from '@/data-source';
import type { DataSource } from 'typeorm';

const main = async (_appDataSource: DataSource) => {};

AppDataSource.initialize().then(main).catch(console.error);
