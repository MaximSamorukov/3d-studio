'use client';
import React from 'react';
import s from './style.module.scss';

type PaymentFilterProps = {
  data?: string[];
};
export function PaymentStatusFilter({ data }: PaymentFilterProps) {
  console.log('payment', data);
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Статус оплаты</div>
      <div className={s.input} />
    </div>
  );
}
