'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';

type PaymentFilterProps = {};
const lib: Record<'paid' | 'not_paid', string> = {
  paid: 'Оплачено',
  not_paid: 'Не оплачено',
};
const data = ['paid', 'not_paid'] as const;
export const PaymentStatusFilter = observer(({}: PaymentFilterProps) => {
  const handleSelectPaymentStatus = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    crmFilterState.paymentStatus = e.target.value as 'paid' | 'not_paid' | null;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Статус оплаты</div>
      <div className={s.input}>
        <select onChange={handleSelectPaymentStatus}>
          {data.map((i) => {
            return (
              <option key={i} value={i}>
                {lib[i]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
});
