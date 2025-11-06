'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

type DateFilterProps = {
  data?: Date[];
};
const EMPTY = '';

export const DateFilter = observer(({ data }: DateFilterProps) => {
  const handleSelectDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.createdAt = e.target.value || null;
  };
  const handleClickResetBtn = () => {
    crmFilterState.createdAt = null;
  };
  const dateValue = crmFilterState.createdAt ?? EMPTY;

  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Дата создания</div>
      <div className={s.input}>
        <select onChange={handleSelectDate} value={dateValue}>
          {[null, ...(data || [])].map((i) => {
            const label = i ? new Date(i).toLocaleDateString('ru-RU') : '---';
            const key = i ? new Date(i).toISOString() : EMPTY;
            return (
              <option key={key} value={key}>
                {label}
              </option>
            );
          })}
        </select>
        <CrossButton
          disabled={!crmFilterState.createdAt}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
