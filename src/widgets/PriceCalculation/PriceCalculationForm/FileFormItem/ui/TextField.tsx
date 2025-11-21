'use client';
import React from 'react';
import s from '../style.module.scss';

import { formCalculationState } from '../../model/formCalculationStore';
import { observer } from 'mobx-react-lite';
import { technicalData } from '../../model/constants';

export const TextField = observer(() => {
  const data = {
    weight: formCalculationState.weight,
    volume: formCalculationState.volume,
    time: formCalculationState.printTime,
    price: formCalculationState.price,
  };
  return (
    <div className={s.textFieldContainer}>
      {technicalData.map((i) => (
        <div key={i.key} className={s.textFieldRow}>
          <div className={s.textFieldRowKey}>
            <span>{`${i.label}, ${i.units}`}</span>
          </div>
          <div className={s.textFieldRowValue}>
            <span>{data[i.key as keyof typeof data] || 'нет данных'}</span>
          </div>
        </div>
      ))}
    </div>
  );
});
