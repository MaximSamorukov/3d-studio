import React from 'react';
import s from './style.module.scss';

export function TypeFilter() {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Тип заказа</div>
      <div className={s.input} />
    </div>
  );
}
