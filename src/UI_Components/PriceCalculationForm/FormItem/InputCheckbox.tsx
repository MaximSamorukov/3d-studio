import React from "react";
import s from "./style.module.scss";
import Image from "next/image";
import { useController, useFormContext } from "react-hook-form";
import { FormItemType } from "../types";

export const InputCheckbox = ({ field }: { field: FormItemType }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
  } = useController({
    name: field.name,
    control,
  });
  return (
    <div className={s.checkboxContainer}>
      <div className={s.checkboxItem}>
        <div className={s.checkboxItemLabel}>Да</div>
        <button onClick={() => onChange(true)} className={s.checkboxItemCheck}>
          {value && (
            <Image src="/check.png" alt="checked" width={32} height={32} />
          )}
        </button>
      </div>
      <div className={s.checkboxItem}>
        <div className={s.checkboxItemLabel}>Нет</div>
        <button onClick={() => onChange(false)} className={s.checkboxItemCheck}>
          {!value && (
            <Image src="/check.png" alt="checked" width={32} height={32} />
          )}
        </button>
      </div>
    </div>
  );
};
