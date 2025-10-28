export const runtime = 'nodejs';
import 'server-only';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as orderEntities from '@/entities/order/index';

export const AppOrderSource = new DataSource({
  type: 'postgres',
  url: process.env.AUTH_TYPEORM_CONNECTION,
  entities: orderEntities,
  ssl: { rejectUnauthorized: false },
});

export const getOrderDataSource = async () => {
  if (!AppOrderSource.isInitialized) {
    try {
      await AppOrderSource.initialize();
      console.log('✅ Data Order Source has been initialized');
    } catch (error) {
      console.error('❌ Error during Data Order Source initialization:', error);
      throw error;
    }
  }
  return AppOrderSource;
};
