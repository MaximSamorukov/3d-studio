'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import s from './style.module.scss';

export const BackwardButton = observer(() => {
  const pageValue = crmFilterState.page || 0;
  const isDisabled = pageValue <= 1;
  const handleForward = () => {
    if (pageValue > 1) {
      crmFilterState.page = pageValue - 1;
    }
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
        {'<'}
      </button>
    </div>
  );
});
