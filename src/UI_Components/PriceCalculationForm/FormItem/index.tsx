import React from "react";
import cn from "classnames";
import { FormInputTypeEnum, FormItemType } from "../types";
import { InnerFormItem } from "./InnerFormItem";
import s from "./style.module.scss";

export const FormItem: React.FC<{
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
