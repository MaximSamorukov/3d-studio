import React from 'react';
import s from './style.module.scss';

export function PhoneFilter() {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Телефон</div>
      <div className={s.input} />
    </div>
  );
}
