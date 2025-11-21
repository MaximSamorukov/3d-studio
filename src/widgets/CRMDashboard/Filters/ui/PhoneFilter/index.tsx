'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import { CrossButton } from '@/shared/ui/CrossButton';
import s from './style.module.scss';

type PhoneFilterProps = {
  orderData?: string[];
  consData?: string[];
  disabled?: boolean;
};
const EMPTY = '';
export const PhoneFilter = observer(
  ({ orderData, consData, disabled = false }: PhoneFilterProps) => {
    const data =
      crmFilterState.orderType === 'print_order' ? orderData : consData;
    const keyPrefix =
      crmFilterState.orderType === 'print_order' ? 'po_' : 'co_';
    const handleSelectPhone = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!disabled) {
        crmFilterState.phone = e.target.value || null;
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled) {
        crmFilterState.phone = null;
      }
    };
    const value = crmFilterState.phone ?? EMPTY;
    const label =
      crmFilterState.orderType === 'consultation' ? 'Контакт' : 'Телефон';
    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled,
          })}
        >
          {label}
        </div>
        <div className={cn(s.input, { [s.inputDisabled]: disabled })}>
          <select
            disabled={disabled}
            onChange={handleSelectPhone}
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
            disabled={!crmFilterState.phone || disabled}
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
