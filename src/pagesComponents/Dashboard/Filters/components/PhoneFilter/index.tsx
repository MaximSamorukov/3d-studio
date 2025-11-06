'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

type PhoneFilterProps = {
  data?: string[];
};
const EMPTY = '';
export const PhoneFilter = observer(({ data }: PhoneFilterProps) => {
  const handleSelectPhone = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.phone = e.target.value || null;
  };
  const handleClickResetBtn = () => {
    crmFilterState.phone = null;
  };
  const value = crmFilterState.phone ?? EMPTY;
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Телефон</div>
      <div className={s.input}>
        <select onChange={handleSelectPhone} value={value}>
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
          disabled={!crmFilterState.phone}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
