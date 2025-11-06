import React from 'react';
import s from './style.module.scss';
import { DateFilter } from './components/DateFilter';
import { EmailFilter } from './components/EmailFilter';
import { PhoneFilter } from './components/PhoneFilter';
import { MaterialFilter } from './components/MaterialFilter';

export function Filters() {
  return (
    <div className={s.container}>
      <div className={s.border}>
        <div className={s.borderLabel}>Фильтры</div>
        <DateFilter />
        <EmailFilter />
        <PhoneFilter />
        <MaterialFilter />
      </div>
    </div>
  );
}
