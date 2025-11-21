'use client';
import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import {
  consultationTypeColumns,
  orderTypeColumns,
  hideNotvisible,
} from '../../model';
import cn from 'classnames';

export const TableHeader = observer(() => {
  const { orderType } = crmFilterState;

  if (orderType === 'print_order') {
    return (
      <div className={s.container}>
        {orderTypeColumns.filter(hideNotvisible).map((i, index, a) => (
          <div
            key={i.key}
            className={cn(s.column, {
              [s.columnWithBorder]: index < a.length - 1,
            })}
          >
            {i.label}
          </div>
        ))}
      </div>
    );
  }
  if (orderType === 'consultation') {
    return (
      <div className={s.container}>
        {consultationTypeColumns.filter(hideNotvisible).map((i, index, a) => (
          <div
            key={i.key}
            className={cn(s.column, {
              [s.columnWithBorder]: index < a.length - 1,
            })}
          >
            {i.label}
          </div>
        ))}
      </div>
    );
  }
});
