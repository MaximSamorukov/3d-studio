import React from 'react';
import s from './style.module.scss';

export function MaterialFilter() {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Материал</div>
      <div className={s.input} />
    </div>
  );
}
