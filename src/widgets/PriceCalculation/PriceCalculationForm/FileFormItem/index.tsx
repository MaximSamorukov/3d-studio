import React from 'react';
import cn from 'classnames';
import { InnerFormItem } from './ui';
import s from './style.module.scss';
import {
  FormInputTypeEnum,
  FormItemType,
} from '@/shared/common/FormItem/types';

export const FileFormItem: React.FC<{
  field: FormItemType;
}> = ({ field }) => {
  return (
    <div className={s.fieldContainer}>
      <div
        className={cn(s.fieldLabel, {
          [s.fieldLabelFileField]:
            field.formInputType === FormInputTypeEnum.file,
        })}
      >
        <span>{field.label}</span>
      </div>
      <InnerFormItem field={field} />
    </div>
  );
};
