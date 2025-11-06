import React from 'react';
import s from './style.module.scss';

export function DateFilter() {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Дата создания</div>
      <div className={s.input} />
    </div>
  );
}
