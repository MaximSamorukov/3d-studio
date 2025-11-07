'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

const lib: Record<'print_order' | 'consultation', string> = {
  print_order: 'Печать',
  consultation: 'Консультация',
};

const data = ['print_order', 'consultation'] as const;
export const TypeFilter = observer(() => {
  const handleSelectOrderType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.orderType = e.target.value as 'print_order' | 'consultation';
  };
  const handleClickResetBtn = () => {
    crmFilterState.orderType = 'print_order';
  };
  const value = crmFilterState.orderType;
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Тип заказа</div>
      <div className={s.input}>
        <select onChange={handleSelectOrderType} value={value}>
          {data.map((i) => {
            const label = i;
            const key = i;
            return (
              <option key={key} value={key}>
                {key ? lib[key] : label}
              </option>
            );
          })}
        </select>
        <CrossButton
          disabled={crmFilterState.orderType === 'print_order'}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
