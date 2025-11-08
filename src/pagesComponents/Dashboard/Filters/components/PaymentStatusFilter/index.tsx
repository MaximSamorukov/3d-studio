'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

const lib: Record<'paid' | 'not_paid', string> = {
  paid: 'Оплачено',
  not_paid: 'Не оплачено',
};
const data = ['paid', 'not_paid'] as const;
const EMPTY = '';
export const PaymentStatusFilter = observer(() => {
  const handleSelectPaymentStatus = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    crmFilterState.paymentStatus = e.target.value as 'paid' | 'not_paid' | null;
  };
  const handleClickResetBtn = () => {
    crmFilterState.paymentStatus = null;
  };
  const value = crmFilterState.email ?? EMPTY;
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Статус оплаты</div>
      <div className={s.input}>
        <select onChange={handleSelectPaymentStatus} value={value}>
          {[null, ...(data || [])].map((i) => {
            const label = i ?? '---';
            const key = i ?? EMPTY;
            return (
              <option key={key} value={key}>
                {key ? lib[key] : label}
              </option>
            );
          })}
        </select>
        <CrossButton
          disabled={!crmFilterState.paymentStatus}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
