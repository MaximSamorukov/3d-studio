'use client';
import React from 'react';
import s from './style.module.scss';
import { get } from 'lodash';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import {
  consultationTypeColumns,
  orderTypeColumns,
} from '../TableHeader/constants';
import { hideNotvisible } from '../TableHeader/utils';

export const TableBody = observer(() => {
  const { orderType, consultations, orders } = crmFilterState;

  if (orderType === 'print_order') {
    return (
      <div className={s.container}>
        {(orders || []).map((i) => (
          <div className={s.containerRow}>
            {orderTypeColumns.filter(hideNotvisible).map((value) => (
              <div className={s.cell}>{get(i, value.key, '-')}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (orderType === 'consultation') {
    return (
      <div className={s.container}>
        {(consultations || []).map((i) => (
          <div className={s.containerRow}>
            {consultationTypeColumns.filter(hideNotvisible).map((value) => (
              <div className={s.cell}>{get(i, value.key, '-')}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
});
