'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

const lib: Record<'both' | 'print_order' | 'consultation', string> = {
  both: 'Все типы',
  print_order: 'Печать',
  consultation: 'Консультация',
};
const data = ['both', 'print_order', 'consultation'] as const;
export const TypeFilter = observer(() => {
  const handleSelectOrderType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.orderType = e.target.value as
      | 'both'
      | 'print_order'
      | 'consultation';
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Тип заказа</div>
      <div className={s.input}>
        <select onChange={handleSelectOrderType}>
          {data.map((i) => {
            return (
              <option key={i} value={i}>
                {lib[i]}
              </option>
            );
          })}
        </select>
        <CrossButton />
      </div>
    </div>
  );
});
