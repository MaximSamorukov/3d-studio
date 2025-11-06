import React from 'react';
import s from './style.module.scss';

export function EmailFilter() {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Email</div>
      <div className={s.input} />
    </div>
  );
}
