'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { ORDER_STATUSES, Statuces, STATUSES_DICT } from './constants';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import s from './style.module.scss';
import Image from 'next/image';

export const OrderStatusField = observer((props) => {
  const status = crmPreviewModalState.orderStatus as Statuces;
  const [currentStatus, setCurrentStatus] = useState<Statuces>(status);
  const isSaveEnabled = currentStatus !== status;
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value as Statuces;
    setCurrentStatus(selectedStatus);
  };
  const handleRestore = () => {
    setCurrentStatus(status);
  };
  return (
    <div className={s.container}>
      <select
        className={s.containerSelect}
        onChange={onChange}
        value={currentStatus}
      >
        {ORDER_STATUSES.map((i) => (
          <option value={i} key={i}>
            {STATUSES_DICT[i]}
          </option>
        ))}
      </select>
      <button
        disabled={!isSaveEnabled}
        className={cn(s.btn, s.btnSave, !isSaveEnabled && s.btnSaveDisabled)}
      >
        {isSaveEnabled ? (
          <Image
            src={'/save_green.svg'}
            width={20}
            height={20}
            alt="save_enabled"
          />
        ) : (
          <Image
            src={'/save_white.svg'}
            width={20}
            height={20}
            alt="save_disabled"
          />
        )}
      </button>
      <button
        onClick={handleRestore}
        disabled={!isSaveEnabled}
        className={cn(
          s.btn,
          s.btnRestore,
          !isSaveEnabled && s.btnRestoreDisabled,
        )}
      >
        {isSaveEnabled ? (
          <Image
            src="/restore_green.svg"
            width={20}
            height={20}
            alt="restore"
          />
        ) : (
          <Image
            src="/restore_white.svg"
            width={20}
            height={20}
            alt="restore"
          />
        )}
      </button>
    </div>
  );
});
