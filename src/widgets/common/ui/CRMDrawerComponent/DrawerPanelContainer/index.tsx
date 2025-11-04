'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { OrderDrawerCard } from '../OrdersDrawerCard';
import { ConsultationDrawerCard } from '../ConsultationDrawerCard';
import { userState } from '@/shared/user/state';

import s from './style.module.scss';

export const DrawerPanelContainer = observer(
  ({ tabType }: { tabType: 'orders' | 'consultations' }) => {
    return (
      <div className={s.container}>
        <div role="tabpanel" hidden={tabType !== 'orders'}>
          <div className={s.tabContainer}>
            {(userState.orders || []).map((i) => (
              <OrderDrawerCard key={i.id} order={i} />
            ))}
          </div>
        </div>
        <div role="tabpanel" hidden={tabType !== 'consultations'}>
          <div className={s.tabContainer}>
            {userState.consultations!.map((i) => (
              <ConsultationDrawerCard key={i.id} consultation={i} />
            ))}
          </div>
        </div>
      </div>
    );
  },
);
