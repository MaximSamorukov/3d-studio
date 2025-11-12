// export const runtime = 'nodejs';
import 'server-only';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as materialsEntities from '@/entities/materials/index';

export const MaterialsDataSource = new DataSource({
  type: 'postgres',
  url: process.env.AUTH_TYPEORM_CONNECTION,
  entities: materialsEntities,
  ssl: { rejectUnauthorized: false },
});

export const getMaterialsDataSource = async () => {
  if (!MaterialsDataSource.isInitialized) {
    try {
      await MaterialsDataSource.initialize();
      console.log('✅ Materials Data Source has been initialized');
    } catch (error) {
      console.error(
        '❌ Error during Materials Data Source initialization:',
        error,
      );
      throw error;
    }
  }
  return MaterialsDataSource;
};
