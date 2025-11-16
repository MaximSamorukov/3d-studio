import React from 'react';
import { FormItemType } from './types';
import s from './style.module.scss';
import { useFormContext } from 'react-hook-form';

export const InputPassword = ({ field }: { field: FormItemType }) => {
  const methods = useFormContext();

  return (
    <div className={s.inputTextContainer}>
      <div className={s.inputTextItem}>
        <input
          type="password"
          placeholder={field.placeholder}
          {...methods.register(field.name, field.rules)}
        />
      </div>
    </div>
  );
};
