'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import { CrossButton } from '@/shared/ui/CrossButton';
import s from './style.module.scss';

type DateFilterProps = {
  orderData?: Date[];
  consData?: Date[];
  disabled?: boolean;
};
const EMPTY = '';

export const DateFilter = observer(
  ({ orderData, consData, disabled = false }: DateFilterProps) => {
    const keyPrefix =
      crmFilterState.orderType === 'print_order' ? 'po_' : 'co_';
    const data =
      crmFilterState.orderType === 'print_order' ? orderData : consData;
    const handleSelectDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!disabled) {
        crmFilterState.createdAt = e.target.value || null;
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled) {
        crmFilterState.createdAt = null;
      }
    };
    const dateValue = crmFilterState.createdAt ?? EMPTY;

    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled,
          })}
        >
          Дата создания
        </div>
        <div className={cn(s.input, { [s.inputDisabled]: disabled })}>
          <select
            disabled={disabled}
            onChange={handleSelectDate}
            value={dateValue}
          >
            {[null, ...(data || []).filter(Boolean)].map((i) => {
              const label = i ? new Date(i).toLocaleDateString('ru-RU') : '---';
              const key = i ? new Date(i).toUTCString() : EMPTY;

              return (
                <option key={keyPrefix + label} value={label}>
                  {label}
                </option>
              );
            })}
          </select>
          <CrossButton
            disabled={!crmFilterState.createdAt || disabled}
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
