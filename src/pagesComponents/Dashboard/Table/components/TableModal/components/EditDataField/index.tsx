'use client';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import { observer } from 'mobx-react-lite';
import React from 'react';
import s from './style.module.scss';
import { Skeleton } from '@mui/material';
import { OrderStatusField } from './Fields/OrderStatusField';
import { OrderPriceField } from './Fields/OrderPriceField';

type EditDataFieldProps = {
  label: string;
  type: 'print_order' | 'consultation';
  fieldType: string;
};

export const EditDataField: React.FC<EditDataFieldProps> = observer(
  ({ label, fieldType }) => {
    const pending = crmPreviewModalState.pending;
    if (pending) {
      return (
        <div className={s.container}>
          <div className={s.containerLabel}>{label}</div>
          <div className={s.containerField}>
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rounded"
              width={80}
              height={20}
              animation="pulse"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={s.container}>
          <div className={s.containerLabel}>{label}</div>
          <div className={s.containerField}>
            {(() => {
              switch (fieldType) {
                case 'orderStatus':
                  return <OrderStatusField />;
                case 'orderPrice':
                  return <OrderPriceField />;
                default:
                  return 'нет данных';
              }
            })()}
          </div>
        </div>
      );
    }
  },
);
