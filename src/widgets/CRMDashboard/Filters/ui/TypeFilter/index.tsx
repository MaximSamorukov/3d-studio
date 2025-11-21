'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import { CrossButton } from '@/shared/ui/CrossButton';
import s from './style.module.scss';

type TypeFilterProps = {
  disabled?: boolean;
};
const lib: Record<'print_order' | 'consultation', string> = {
  print_order: 'Печать',
  consultation: 'Консультация',
};

const data = ['print_order', 'consultation'] as const;
export const TypeFilter: React.FC<TypeFilterProps> = observer(
  ({ disabled = false }) => {
    const handleSelectOrderType = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!disabled) {
        crmFilterState.orderType = e.target.value as
          | 'print_order'
          | 'consultation';
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled) {
        crmFilterState.orderType = 'print_order';
      }
    };
    const value = crmFilterState.orderType;
    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled,
          })}
        >
          Тип заказа
        </div>
        <div className={cn(s.input, { [s.inputDisabled]: disabled })}>
          <select
            disabled={disabled}
            onChange={handleSelectOrderType}
            value={value}
          >
            {data.map((i) => {
              const label = i;
              const key = i;
              return (
                <option key={key} value={key}>
                  {key ? lib[key] : label}
                </option>
              );
            })}
          </select>
          <CrossButton
            disabled={crmFilterState.orderType === 'print_order' || disabled}
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
