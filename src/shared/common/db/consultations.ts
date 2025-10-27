export const runtime = 'nodejs';
import 'server-only';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as consultationEntities from '@/entities/consultation/index';

export const AppConsultationsSource = new DataSource({
  type: 'postgres',
  url: process.env.AUTH_TYPEORM_CONNECTION,
  entities: consultationEntities,
  ssl: { rejectUnauthorized: false },
});

export const getConsultationDataSource = async () => {
  if (!AppConsultationsSource.isInitialized) {
    try {
      await AppConsultationsSource.initialize();
      console.log('✅ Data Consultation Source has been initialized');
    } catch (error) {
      console.error(
        '❌ Error during Data Consultation Source initialization:',
        error,
      );
      throw error;
    }
  }
  return AppConsultationsSource;
};
