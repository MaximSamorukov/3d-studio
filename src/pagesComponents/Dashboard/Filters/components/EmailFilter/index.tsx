'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

type EmailFilterProps = {
  data?: string[];
};
export const EmailFilter = observer(({ data }: EmailFilterProps) => {
  const handleSelectEmail = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.email = e.target.value;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Email</div>
      <div className={s.input}>
        <select onChange={handleSelectEmail}>
          {data?.map((i) => {
            return <option key={i}>{i}</option>;
          })}
        </select>
        <CrossButton />
      </div>
    </div>
  );
});
