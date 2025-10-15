import React from "react";
import { FormItemType } from "../types";
import s from "./style.module.scss";

type FieldType = FormItemType & {
  defaultValue?: string | number;
};
function transformProps(props: FormItemType): FieldType {
  const defaultValue =
    typeof props?.defaultValue === "boolean"
      ? "default text"
      : props?.defaultValue;
  const returnObject = Object.assign(props, { defaultValue });
  return returnObject;
}
export const InputText = ({ field }: { field: FormItemType }) => {
  const props = transformProps(field);
  return (
    <div className={s.inputTextContainer}>
      <div className={s.inputTextItem}>
        <input type="text" name={field.name} placeholder={field.placeholder} />
      </div>
    </div>
  );
};
