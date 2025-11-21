'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import { CrossButton } from '@/shared/ui/CrossButton';
import s from './style.module.scss';

type EmailFilterProps = {
  orderData?: string[];
  consData?: string[];
  disabled?: boolean;
};
const EMPTY = '';
export const EmailFilter = observer(
  ({ orderData, consData, disabled = false }: EmailFilterProps) => {
    const data =
      crmFilterState.orderType === 'print_order' ? orderData : consData;
    const keyPrefix =
      crmFilterState.orderType === 'print_order' ? 'po_' : 'co_';
    const handleSelectEmail = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!disabled) {
        crmFilterState.email = e.target.value || null;
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled) {
        crmFilterState.email = null;
      }
    };
    const value = crmFilterState.email ?? EMPTY;
    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled,
          })}
        >
          Email
        </div>
        <div className={cn(s.input, { [s.inputDisabled]: disabled })}>
          <select
            disabled={disabled}
            onChange={handleSelectEmail}
            value={value}
          >
            {[null, ...(data || []).filter(Boolean)].map((i) => {
              const label = i ?? '---';
              const key = i ?? EMPTY;
              return (
                <option key={keyPrefix + key} value={key}>
                  {label}
                </option>
              );
            })}
          </select>
          <CrossButton
            disabled={!crmFilterState.email || disabled}
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
