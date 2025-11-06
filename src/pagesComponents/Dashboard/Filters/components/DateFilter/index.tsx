'use client';
import React from 'react';
import s from './style.module.scss';

type DateFilterProps = {
  data?: Date[];
};
export function DateFilter({ data }: DateFilterProps) {
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>Дата создания</div>
      <div className={s.input}>
        <select>
          {data?.map((i) => {
            const str = new Date(i).toLocaleDateString('ru-RU');
            return <option key={str}>{str}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
