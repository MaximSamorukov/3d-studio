'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

type EmailFilterProps = {
  data?: string[];
};
const EMPTY = '';
export const EmailFilter = observer(({ data }: EmailFilterProps) => {
  const handleSelectEmail = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.email = e.target.value || null;
  };
  const handleClickResetBtn = () => {
    crmFilterState.email = null;
  };
  const value = crmFilterState.email ?? EMPTY;
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Email</div>
      <div className={s.input}>
        <select onChange={handleSelectEmail} value={value}>
          {[null, ...(data || [])].map((i) => {
            const label = i ?? '---';
            const key = i ?? EMPTY;
            return (
              <option key={key} value={key}>
                {label}
              </option>
            );
          })}
        </select>
        <CrossButton
          disabled={!crmFilterState.email}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
