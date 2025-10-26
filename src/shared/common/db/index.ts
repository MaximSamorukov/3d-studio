export const runtime = 'nodejs';
import 'server-only';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as entities from '@/shared/common/auth/entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.AUTH_TYPEORM_CONNECTION,
  entities,
  ssl: { rejectUnauthorized: false },
});

try {
  await AppDataSource.initialize();
  console.log('Data Source has been initialized!');
} catch (error) {
  console.error('Error during Data Source initialization', error);
}
