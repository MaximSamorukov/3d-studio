'use client';
import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { userState } from '@/shared/state/user/state';
import s from './style.module.scss';

export const DrawerRefreshButton = observer(() => {
  const handleRefresh = async () => {
    await userState.getUserOrders();
  };
  const loading = userState.loading;
  return (
    <button
      disabled={userState.loading}
      onClick={handleRefresh}
      className={s.btnContainer}
    >
      <Image
        src="/refresh.svg"
        height={18}
        width={18}
        alt="refresh"
        className={cn(loading && s.rotate)}
      />
    </button>
  );
});
