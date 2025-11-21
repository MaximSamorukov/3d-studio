'use client';
import { crmPreviewModalState } from '@/shared/state/crmPreviewModal/state';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import { handleDownload } from './utils';
import { getFileName } from '@/widgets/CRMDashboard/Table/api/utils';
import PaymentStatusLabel from '../PaymentStatusLabel';
import { PaymentStatuces } from '@/shared/constants';
import s from './style.module.scss';

type ShowDataFieldProps = {
  label: string;
  type: 'print_order' | 'consultation';
  value: string;
  fieldType?: string;
};

export const ShowDataField: React.FC<ShowDataFieldProps> = observer(
  ({ label, value, fieldType }) => {
    const pending = crmPreviewModalState.pending;
    if (fieldType === 'file_with_download') {
      const fileNameToShow = getFileName(value);
      const isValidFile = fileNameToShow.startsWith('***');
      const handleFileDownload = async () => {
        if (isValidFile) {
          await handleDownload(value);
        }
      };
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
              <div className={s.flexContainer}>
                <div
                  className={cn(
                    s.containerFieldValue,
                    isValidFile && s.containerFieldValueWithValidFile,
                  )}
                >
                  {fileNameToShow}
                </div>
                <button
                  onClick={handleFileDownload}
                  className={cn(s.download, !isValidFile && s.downloadDisabled)}
                >
                  {isValidFile && (
                    <Image
                      src={'/download_green.svg'}
                      width={20}
                      height={20}
                      alt="download_enabled"
                    />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }
    if (fieldType === 'paymentStatus') {
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
              <div className={s.containerFieldValue}>
                <PaymentStatusLabel status={value as PaymentStatuces} />
              </div>
            )}
          </div>
        </div>
      );
    }
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
            <div className={s.containerFieldValue}>{value}</div>
          )}
        </div>
      </div>
    );
  },
);
