'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import s from './style.module.scss';

export const ForwardButton = observer(() => {
  const pageValue = crmFilterState.page || 0;
  const perPage = crmFilterState.perPage || 0;
  const isOrderType = crmFilterState.orderType === 'print_order';
  const count = isOrderType
    ? crmFilterState.orders?.length
    : crmFilterState.consultations?.length;

  const isDisabled = perPage > count;
  const handleForward = () => {
    crmFilterState.page = pageValue + 1;
  };
  return (
    <div className={cn(s.container, { [s.containerDisabled]: isDisabled })}>
      <button
        disabled={isDisabled}
        onClick={handleForward}
        className={cn(s.containerInner, {
          [s.containerInnerDisabled]: isDisabled,
        })}
      >
        {'>'}
      </button>
    </div>
  );
});
