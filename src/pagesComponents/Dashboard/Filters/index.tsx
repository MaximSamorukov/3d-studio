import React from 'react';
import s from './style.module.scss';
import { DateFilter } from './components/DateFilter';
import { EmailFilter } from './components/EmailFilter';
import { PhoneFilter } from './components/PhoneFilter';
import { MaterialFilter } from './components/MaterialFilter';
import { StatusFilter } from './components/StatusFilter';
import { PaymentStatusFilter } from './components/PaymentStatusFilter';
import { TypeFilter } from './components/TypeFilter';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { PrintOrderEntity } from '@/entities/order';
import { SubmitButton } from './components/SubmitButton';
import { ResetFiltersButton } from './components/ResetFiltersButton';

type FilterTypes = {
  createdAt: Date[];
  email: string[];
  phone: string[];
  plasticType: string[];
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
    .getRawOne<FilterTypes>();

  return (
    <div className={s.container}>
      <div className={s.border}>
        <div className={s.borderLabel}>Фильтры</div>
        <DateFilter data={result?.createdAt} />
        <EmailFilter data={result?.email} />
        <PhoneFilter data={result?.phone} />
        <MaterialFilter data={result?.plasticType} />
        <TypeFilter />
        <StatusFilter />
        <PaymentStatusFilter />
        <SubmitButton />
        <ResetFiltersButton />
      </div>
    </div>
  );
}
