'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';

type SubmitButtonProps = {};
export const SubmitButton = observer(({}: SubmitButtonProps) => {
  return (
    <div className={s.container}>
      <button className={s.btn}>Применить</button>
    </div>
  );
});
