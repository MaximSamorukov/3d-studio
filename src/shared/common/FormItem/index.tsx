import React from 'react';
import { FormItemType } from './types';
import { InnerFormItem } from './InnerFormItem';
import s from './style.module.scss';

export const FormItem: React.FC<{
  field: FormItemType;
}> = ({ field }) => {
  return (
    <div className={s.fieldContainer}>
      <div className={s.fieldLabel}>
        <span>{field.label}</span>
      </div>
      <InnerFormItem field={field} />
    </div>
  );
};
