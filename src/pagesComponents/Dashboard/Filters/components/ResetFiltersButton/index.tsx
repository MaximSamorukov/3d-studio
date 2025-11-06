'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';

type ResetFiltersButtonProps = {};
export const ResetFiltersButton = observer(({}: ResetFiltersButtonProps) => {
  return (
    <div className={s.container}>
      <button className={s.btn}>Сбросить</button>
    </div>
  );
});
