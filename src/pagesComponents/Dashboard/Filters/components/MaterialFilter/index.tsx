'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';

type MaterialFilterProps = {
  data?: string[];
};
const EMPTY = '';

export const MaterialFilter = observer(({ data }: MaterialFilterProps) => {
  const handleSelectMaterial = (e: React.ChangeEvent<HTMLSelectElement>) => {
    crmFilterState.plasticType = e.target.value || null;
  };
  const handleClickResetBtn = () => {
    crmFilterState.plasticType = null;
  };
  const value = crmFilterState.plasticType ?? EMPTY;
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Материал</div>
      <div className={s.input}>
        <select onChange={handleSelectMaterial} value={value}>
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
          disabled={!crmFilterState.plasticType}
          onClick={handleClickResetBtn}
        />
      </div>
    </div>
  );
});
