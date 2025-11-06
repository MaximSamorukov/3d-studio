'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';

type ResetFiltersButtonProps = {};
export const ResetFiltersButton = observer(({}: ResetFiltersButtonProps) => {
  const handleResetFilters = () => {
    crmFilterState.resetAllFilters();
  };
  return (
    <div className={s.container}>
      <button onClick={handleResetFilters} className={s.btn}>
        Сбросить
      </button>
    </div>
  );
});
