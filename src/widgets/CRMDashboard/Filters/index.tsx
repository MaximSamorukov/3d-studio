import React from 'react';
import s from './style.module.scss';
import { DateFilter } from './ui/DateFilter';
import { EmailFilter } from './ui/EmailFilter';
import { PhoneFilter } from './ui/PhoneFilter';
import { MaterialFilter } from './ui/MaterialFilter';
import { StatusFilter } from './ui/StatusFilter';
import { PaymentStatusFilter } from './ui/PaymentStatusFilter';
import { TypeFilter } from './ui/TypeFilter';
import { getOrderDataSource } from '@/shared/db/orders';
import { getConsultationDataSource } from '@/shared/db/consultations';
import { PrintOrderEntity } from '@/entities/order';
import { ConsultationEntity } from '@/entities/consultation';
import { ResetFiltersButton } from './ui/ResetFiltersButton';
import { FilterLayout } from './ui/FilterLayout';

type OrderFilterTypes = {
  createdAt: Date[];
  email: string[];
  phone: string[];
  plasticType: string[];
};
type ConsultationFilterTypes = {
  createdAt: Date[];
  email: string[];
  contact: string[];
};
export async function Filters() {
  const db = await getOrderDataSource();
  const repository = db.getRepository(PrintOrderEntity);
  const result = await repository
    .createQueryBuilder('o')
    .select([
      'array_agg(DISTINCT o.created_at::date) AS "createdAt"',
      'array_agg(DISTINCT o.email) AS "email"',
      'array_agg(DISTINCT o.phone) AS "phone"',
      'array_agg(DISTINCT o.plastic_type) AS "plasticType"',
    ])
    .getRawOne<OrderFilterTypes>();
  const dbCons = await getConsultationDataSource();
  const consRepository = dbCons.getRepository(ConsultationEntity);
  const consData = await consRepository
    .createQueryBuilder('cons')
    .select([
      'array_agg(DISTINCT cons.created_at::date) AS "createdAt"',
      'array_agg(DISTINCT cons.email) AS "email"',
      'array_agg(DISTINCT cons.contact) AS "contact"',
    ])
    .getRawOne<ConsultationFilterTypes>();

  return (
    <div className={s.container}>
      <div className={s.border}>
        <div className={s.borderLabel}>Фильтры</div>
        <FilterLayout>
          <>
            <DateFilter
              orderData={result?.createdAt}
              consData={consData?.createdAt}
            />
            <EmailFilter orderData={result?.email} consData={consData?.email} />
            <PhoneFilter
              orderData={result?.phone}
              consData={consData?.contact}
            />
            <MaterialFilter data={result?.plasticType} />
            <TypeFilter />
            <StatusFilter />
            <PaymentStatusFilter />
            <ResetFiltersButton />
          </>
        </FilterLayout>
      </div>
    </div>
  );
}
