import React from "react";
import s from "./style.module.scss";
import { useController, useFormContext } from "react-hook-form";
import { FormItemType } from "../types";

export const InputNumber = ({ field: { name } }: { field: FormItemType }) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
  });
  return (
    <div className={s.inputNumberContainer}>
      <div className={s.inputNumberItem}>
        <input {...field} type="text" />
      </div>
    </div>
  );
};
