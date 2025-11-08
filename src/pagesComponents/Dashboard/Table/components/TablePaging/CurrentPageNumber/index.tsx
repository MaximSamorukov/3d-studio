'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import s from './style.module.scss';

export const CurrentPageNumber = observer(() => {
  const pageValue = crmFilterState.page;

  return (
    <div className={s.container}>
      <div className={s.containerInner}>{pageValue}</div>
    </div>
  );
});
