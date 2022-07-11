import 'reflect-metadata';

import { AppDataSource } from '@/data-source';
import type { DataSource } from 'typeorm';

const main = async (appDataSource: DataSource) => {
  console.log('🚀 App is Running');

  const thereArePendingMigrations = await appDataSource.showMigrations();

  if (thereArePendingMigrations) {
    await appDataSource.runMigrations();
  }
};

AppDataSource.initialize().then(main).catch(console.error);
