'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { PER_PAGE_VALUES } from './constants';

export const PerPageSelector = observer(() => {
  const perPageValue = crmFilterState.perPage;
  const handleChangePerPageValue = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const v = e.target.value;
    crmFilterState.perPage = Number(v);
  };
  return (
    <div className={s.container}>
      <select
        className={s.containerSelect}
        onChange={handleChangePerPageValue}
        value={perPageValue}
      >
        {PER_PAGE_VALUES.map((i) => (
          <option className={s.option} key={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
});
