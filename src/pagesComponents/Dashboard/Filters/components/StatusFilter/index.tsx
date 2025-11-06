'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

const lib: Record<'in_work' | 'submited' | 'rejected', string> = {
  in_work: 'В работе',
  submited: 'Размещен',
  rejected: 'Отменен',
};
const data = ['in_work', 'submited', 'rejected'] as const;
export const StatusFilter = observer(() => {
  const handleSelectOrderStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.orderStatus = e.target.value as
      | 'in_work'
      | 'submited'
      | 'rejected'
      | null;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Статус</div>
      <div className={s.input}>
        <select onChange={handleSelectOrderStatus}>
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
