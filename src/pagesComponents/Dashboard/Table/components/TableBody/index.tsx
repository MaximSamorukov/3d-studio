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
import { CircularProgress } from '@mui/material';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import { PrintOrderEntity } from '@/entities/order';
import { ConsultationEntity } from '@/entities/consultation';

export const TableBody = observer(() => {
  const { orderType, consultations, orders, pending } = crmFilterState;

  const handleOpenPreviewModal =
    (
      type: 'print_order' | 'consultation',
      data: PrintOrderEntity | ConsultationEntity,
    ) =>
    () => {
      crmPreviewModalState.modalOpen = true;
      crmPreviewModalState.id = data.id;
      crmPreviewModalState.orderType = type;
    };
  if (orderType === 'print_order') {
    return (
      <div className={s.container}>
        {(orders || []).map((i) => (
          <button
            onClick={handleOpenPreviewModal('print_order', i)}
            key={i.id}
            className={s.containerRow}
          >
            {orderTypeColumns.filter(hideNotvisible).map((value) => (
              <div key={value.key} className={s.cell}>
                {get(i, value.key, '-')}
              </div>
            ))}
          </button>
        ))}
        {pending ? (
          <div className={s.containerLoader}>
            <CircularProgress size={40} color="success" />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
  if (orderType === 'consultation') {
    return (
      <div className={s.container}>
        {(consultations || []).map((i) => (
          <button
            onClick={handleOpenPreviewModal('consultation', i)}
            key={i.id}
            className={s.containerRow}
          >
            {consultationTypeColumns.filter(hideNotvisible).map((value) => (
              <div key={value.key} className={s.cell}>
                {get(i, value.key, '-')}
              </div>
            ))}
          </button>
        ))}
        {pending ? (
          <div className={s.containerLoader}>
            <CircularProgress size={40} color="success" />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
});
