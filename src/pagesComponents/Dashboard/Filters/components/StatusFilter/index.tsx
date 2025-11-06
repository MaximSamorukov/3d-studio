import React from 'react';
import s from './style.module.scss';

export function StatusFilter() {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Статус</div>
      <div className={s.input} />
    </div>
  );
}
