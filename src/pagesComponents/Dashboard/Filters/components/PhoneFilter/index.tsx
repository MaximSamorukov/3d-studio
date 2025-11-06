'use client';
import React from 'react';
import s from './style.module.scss';

type PhoneFilterProps = {
  data?: string[];
};
export function PhoneFilter({ data }: PhoneFilterProps) {
  console.log('phone filter', data);
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Телефон</div>
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
