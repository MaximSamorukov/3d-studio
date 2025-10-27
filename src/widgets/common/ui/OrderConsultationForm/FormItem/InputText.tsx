import React from 'react';
import { FormItemType } from '../types';
import s from './style.module.scss';
import { useFormContext } from 'react-hook-form';

type FieldType = FormItemType & {
  defaultValue?: string | number;
};

export const InputText = ({ field }: { field: FormItemType }) => {
  const methods = useFormContext();

  return (
    <div className={s.inputTextContainer}>
      <div className={s.inputTextItem}>
        <input
          type="text"
          placeholder={field.placeholder}
          {...methods.register(field.name, field.rules)}
        />
      </div>
    </div>
  );
};
