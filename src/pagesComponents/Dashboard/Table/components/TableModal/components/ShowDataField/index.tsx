'use client';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import { observer } from 'mobx-react-lite';
import React from 'react';
import s from './style.module.scss';
import { Skeleton } from '@mui/material';

type ShowDataFieldProps = {
  label: string;
  type: 'print_order' | 'consultation';
  value: string;
};

export const ShowDataField: React.FC<ShowDataFieldProps> = observer(
  ({ label, value }) => {
    const pending = crmPreviewModalState.pending;
    return (
      <div className={s.container}>
        <div className={s.containerLabel}>{label}</div>
        <div className={s.containerField}>
          {pending ? (
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rounded"
              width={80}
              height={20}
              animation="pulse"
            />
          ) : (
            <>{value}</>
          )}
        </div>
      </div>
    );
  },
);
