import React from 'react';
import s from './style.module.scss';
import { useController, useFormContext } from 'react-hook-form';
import { FormItemType } from './types';

export const InputContacts = ({
  field: { name, rules },
}: {
  field: FormItemType;
}) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    rules,
  });
  return (
    <div className={s.inputNumberContainer}>
      <div className={s.inputNumberItem}>
        <input {...field} type="text" />
      </div>
    </div>
  );
};
