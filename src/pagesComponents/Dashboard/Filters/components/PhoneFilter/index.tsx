'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';

type PhoneFilterProps = {
  data?: string[];
};
export const PhoneFilter = observer(({ data }: PhoneFilterProps) => {
  const handleSelectPhone = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.phone = e.target.value;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Телефон</div>
      <div className={s.input}>
        <select onChange={handleSelectPhone}>
          {data?.map((i) => {
            return <option key={i}>{i}</option>;
          })}
        </select>
      </div>
    </div>
  );
});
