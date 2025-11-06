'use client';
import React from 'react';
import s from './style.module.scss';

type MaterialFilterProps = {
  data?: string[];
};
export function MaterialFilter({ data }: MaterialFilterProps) {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Материал</div>
      <div className={s.input}>
        <select>
          {data?.map((i) => {
            return <option key={i}>{i}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
