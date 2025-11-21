import React from 'react';
import { FormItemType } from './types';
import cn from 'classnames';
import { InnerFormItem } from './InnerFormItem';
import s from './style.module.scss';

export const FormItem: React.FC<{
  field: FormItemType;
}> = ({ field }) => {
  const isLabel = !!field.label?.length;

  return (
    <div
      className={cn(s.fieldContainer, !isLabel && s.fieldContainerWithNoLabel)}
    >
      {isLabel ? (
        <div className={s.fieldLabel}>
          <span>{field.label}</span>
        </div>
      ) : (
        <></>
      )}
      <InnerFormItem field={field} />
    </div>
  );
};
