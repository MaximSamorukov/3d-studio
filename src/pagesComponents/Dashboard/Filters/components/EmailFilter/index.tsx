'use client';
import React from 'react';
import s from './style.module.scss';

type EmailFilterProps = {
  data?: string[];
};
export function EmailFilter({ data }: EmailFilterProps) {
  console.log('email filter', data);
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Email</div>
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
