'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';

export const SubmitButton = observer(() => {
  return (
    <div className={s.container}>
      <button className={s.btn}>Применить</button>
    </div>
  );
});
