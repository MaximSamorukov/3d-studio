'use client';
import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmFilterState } from '@/shared/state/crmFilter/state';
import { CrossButton } from '@/shared/common/CrossButton';
import s from './style.module.scss';

type MaterialFilterProps = {
  data?: string[];
  disabled?: boolean;
};
const EMPTY = '';

export const MaterialFilter = observer(
  ({ data, disabled = false }: MaterialFilterProps) => {
    const fieldDisabled = crmFilterState.orderType === 'consultation';
    const handleSelectMaterial = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!disabled || !fieldDisabled) {
        crmFilterState.plasticType = e.target.value || null;
      }
    };
    const handleClickResetBtn = () => {
      if (!disabled || !fieldDisabled) {
        crmFilterState.plasticType = null;
      }
    };
    const value = crmFilterState.plasticType ?? EMPTY;
    console.log(data);
    return (
      <div className={s.container}>
        <div
          className={cn(s.containerLabel, {
            [s.containerLabelDisabled]: disabled || fieldDisabled,
          })}
        >
          Материал
        </div>
        <div
          className={cn(s.input, {
            [s.inputDisabled]: disabled || fieldDisabled,
          })}
        >
          <select
            disabled={disabled || fieldDisabled}
            onChange={handleSelectMaterial}
            value={value}
          >
            {[null, ...(data || []).filter(Boolean)].map((i) => {
              const label = i ?? '---';
              const key = i ?? EMPTY;
              return (
                <option key={key} value={key}>
                  {label}
                </option>
              );
            })}
          </select>
          <CrossButton
            disabled={!crmFilterState.plasticType || disabled || fieldDisabled}
            onClick={handleClickResetBtn}
          />
        </div>
      </div>
    );
  },
);
