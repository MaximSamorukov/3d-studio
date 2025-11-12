// export const runtime = 'nodejs';
import 'server-only';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as servicesEntities from '@/entities/services/index';

export const ServicesDataSource = new DataSource({
  type: 'postgres',
  url: process.env.AUTH_TYPEORM_CONNECTION,
  entities: servicesEntities,
  ssl: { rejectUnauthorized: false },
});

export const getServicesDataSource = async () => {
  if (!ServicesDataSource.isInitialized) {
    try {
      await ServicesDataSource.initialize();
      console.log('✅ Services Data Source has been initialized');
    } catch (error) {
      console.error(
        '❌ Error during Services Data Source initialization:',
        error,
      );
      throw error;
    }
  }
  return ServicesDataSource;
};
