'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';
import s from './style.module.scss';

type StatusFilterProps = {
  disabled?: boolean;
};
const lib: Record<'in_work' | 'submited' | 'rejected', string> = {
  in_work: 'В работе',
  submited: 'Размещен',
  rejected: 'Отменен',
};
const data = ['in_work', 'submited', 'rejected'] as const;
const EMPTY = '';
export const StatusFilter: React.FC<StatusFilterProps> = observer(
  ({ disabled = false }) => {
    const handleSelectOrderStatus = (
      e: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      if (!disabled) {
        crmFilterState.orderStatus = (e.target.value || null) as
          | 'in_work'
          | 'submited'
          | 'rejected'
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
            {[null, ...(data || [])].map((i) => {
              const label = i ?? '---';
              const key = i ?? EMPTY;
              return (
                <option key={key} value={key}>
                  {key ? lib[key] : label}
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
