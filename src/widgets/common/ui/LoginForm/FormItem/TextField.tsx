'use client';
import React from 'react';
import s from './style.module.scss';
import { technicalData } from '../constants';

export const TextField = () => {
  return (
    <div className={s.textFieldContainer}>
      {technicalData.map((i) => (
        <div key={i.key} className={s.textFieldRow}>
          <div className={s.textFieldRowKey}>
            <span>{`${i.label}, ${i.units}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
