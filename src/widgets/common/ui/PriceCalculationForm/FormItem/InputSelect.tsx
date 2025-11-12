import React from 'react';
import s from './style.module.scss';
import { useController, useFormContext } from 'react-hook-form';
import { FormItemType } from '../types';
import { materialsState } from '@/shared/state/materials/state';
import { observer } from 'mobx-react-lite';

export const InputSelect = observer(
  ({ field }: { field: FormItemType }): React.JSX.Element => {
    const { control } = useFormContext();
    const {
      field: { onChange, value },
    } = useController({
      name: field.name,
      control,
    });
    const plasticMaterials = materialsState.materialNames;
    return (
      <div className={s.inputSelectorContainer}>
        <div className={s.inputSelectorItem}>
          <select
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={s.inputSelectorItemSelect}
          >
            {[...plasticMaterials].map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  },
);
