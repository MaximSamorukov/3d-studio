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
const EMPTY = '';
export const StatusFilter = observer(() => {
  const handleSelectOrderStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.orderStatus = (e.target.value || null) as
      | 'in_work'
      | 'submited'
      | 'rejected'
      | null;
  };
  const handleClickResetBtn = () => {
    crmFilterState.orderStatus = null;
  };
  const value = crmFilterState.orderStatus ?? EMPTY;
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Статус</div>
      <div className={s.input}>
        <select onChange={handleSelectOrderStatus} value={value}>
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
          disabled={!crmFilterState.orderStatus}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
