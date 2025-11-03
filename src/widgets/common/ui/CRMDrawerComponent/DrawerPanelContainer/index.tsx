'use client';
import React from 'react';
import { OrderDrawerCard } from '../OrdersDrawerCard';
import { ConsultationDrawerCard } from '../ConsultationDrawerCard';
import { userState } from '@/shared/user/state';

import s from './style.module.scss';

export function DrawerPanelContainer({
  tabNumber,
}: {
  tabNumber: 'orders' | 'consultations';
}) {
  return (
    <div className={s.container}>
      <div role="tabpanel" hidden={tabNumber !== 'orders'}>
        <div className={s.tabContainer}>
          {(userState.orders || []).map((i) => (
            <OrderDrawerCard key={i.id} order={i} />
          ))}
        </div>
      </div>
      <div role="tabpanel" hidden={tabNumber !== 'consultations'}>
        <div className={s.tabContainer}>
          {(userState.consultations || []).map((i) => (
            <ConsultationDrawerCard key={i.id} consultation={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
