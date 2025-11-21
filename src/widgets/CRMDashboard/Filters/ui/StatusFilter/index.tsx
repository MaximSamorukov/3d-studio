'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import { CrossButton } from '@/shared/ui/CrossButton';
import s from './style.module.scss';
import {
  ORDER_STATUSES,
  Statuces,
  STATUSES_DICT,
} from '@/shared/constants/constants';

type StatusFilterProps = {
  disabled?: boolean;
};

const EMPTY = '';
export const StatusFilter: React.FC<StatusFilterProps> = observer(
  ({ disabled = false }) => {
    const handleSelectOrderStatus = (
      e: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      if (!disabled) {
        crmFilterState.orderStatus = (e.target.value || null) as
          | Statuces.in_work
          | Statuces.submited
          | Statuces.rejected
          | Statuces.accomplished
          | null;
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled) {
        crmFilterState.orderStatus = null;
      }
    };
    const value = crmFilterState.orderStatus ?? EMPTY;
    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled,
          })}
        >
          Статус
        </div>
        <div className={cn(s.input, { [s.inputDisabled]: disabled })}>
          <select
            disabled={disabled}
            onChange={handleSelectOrderStatus}
            value={value}
          >
            {[null, ...(ORDER_STATUSES || [])].map((i) => {
              const label = i ?? '---';
              const key = i ?? EMPTY;
              return (
                <option key={key} value={key}>
                  {key ? STATUSES_DICT[key] : label}
                </option>
              );
            })}
          </select>
          <CrossButton
            disabled={!crmFilterState.orderStatus || disabled}
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
