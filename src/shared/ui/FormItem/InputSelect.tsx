import React from 'react';
import s from './style.module.scss';
import { plastics } from '@/features/Plastics/constants';
import { useController, useFormContext } from 'react-hook-form';
import { FormItemType } from './types';

export const InputSelect = ({
  field,
}: {
  field: FormItemType;
}): React.JSX.Element => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
  } = useController({
    name: field.name,
    control,
    rules: field.rules,
  });
  return (
    <div className={s.inputSelectorContainer}>
      <div className={s.inputSelectorItem}>
        <select
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className={s.inputSelectorItemSelect}
        >
          {[...plastics, 'Требуется консультация'].map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
