'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';

type DateFilterProps = {
  data?: Date[];
};
export const DateFilter = observer(({ data }: DateFilterProps) => {
  const handleSelectDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.createdAt = e.target.value;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Дата создания</div>
      <div className={s.input}>
        <select onChange={handleSelectDate}>
          {data?.map((i) => {
            const str = new Date(i).toLocaleDateString('ru-RU');
            return <option key={str}>{str}</option>;
          })}
        </select>
      </div>
    </div>
  );
});
