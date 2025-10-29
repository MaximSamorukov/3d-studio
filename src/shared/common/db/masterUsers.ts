export const runtime = 'nodejs';
import 'server-only';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as entities from '@/entities/masterUsers/index';

export const AppMasterUsersSource = new DataSource({
  type: 'postgres',
  url: process.env.AUTH_TYPEORM_CONNECTION,
  entities,
  ssl: { rejectUnauthorized: false },
});

export const getMasterUsersDataSource = async () => {
  if (!AppMasterUsersSource.isInitialized) {
    try {
      await AppMasterUsersSource.initialize();
      console.log('✅ Data Master Users Source has been initialized');
    } catch (error) {
      console.error(
        '❌ Error during Data Master Users Source initialization:',
        error,
      );
      throw error;
    }
  }
  return AppMasterUsersSource;
};
