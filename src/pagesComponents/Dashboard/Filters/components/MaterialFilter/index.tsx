'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

type MaterialFilterProps = {
  data?: string[];
};
export const MaterialFilter = observer(({ data }: MaterialFilterProps) => {
  const handleSelectMaterial = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.plasticType = e.target.value;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Материал</div>
      <div className={s.input}>
        <select onChange={handleSelectMaterial}>
          {data?.map((i) => {
            return <option key={i}>{i}</option>;
          })}
        </select>
        <CrossButton />
      </div>
    </div>
  );
});
