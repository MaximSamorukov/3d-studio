'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';
import s from './style.module.scss';

type PaymentStatusFilterProps = {
  disabled?: boolean;
};

const lib: Record<'paid' | 'not_paid', string> = {
  paid: 'Оплачено',
  not_paid: 'Не оплачено',
};
const data = ['paid', 'not_paid'] as const;
const EMPTY = '';
export const PaymentStatusFilter: React.FC<PaymentStatusFilterProps> = observer(
  ({ disabled = false }) => {
    const fieldDisabled = crmFilterState.orderType === 'consultation';

    const handleSelectPaymentStatus = (
      e: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      if (!disabled || !fieldDisabled) {
        crmFilterState.paymentStatus = e.target.value as
          | 'paid'
          | 'not_paid'
          | null;
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled || !fieldDisabled) {
        crmFilterState.paymentStatus = null;
      }
    };
    const value = crmFilterState.email ?? EMPTY;
    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled || fieldDisabled,
          })}
        >
          Статус оплаты
        </div>
        <div
          className={cn(s.input, {
            [s.inputDisabled]: disabled || fieldDisabled,
          })}
        >
          <select
            disabled={disabled || fieldDisabled}
            onChange={handleSelectPaymentStatus}
            value={value}
          >
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
            disabled={
              !crmFilterState.paymentStatus || disabled || fieldDisabled
            }
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
