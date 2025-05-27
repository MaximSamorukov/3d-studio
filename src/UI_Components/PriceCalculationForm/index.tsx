import React from "react";
import s from "./style.module.scss";
import { formFields } from "./constants";
import { FormItemType } from "./types";
import { FormItem } from "./FormItem";
import { SubmitButton } from "./SubmitButton";

export const PriceCalculationForm = () => {
  return (
    <div className={s.formContainer}>
      <div className={s.formHead}>
        <span>Калькулятор расчета стоимости печати</span>
      </div>
      <div className={s.formBody}>
        {(formFields as FormItemType[]).map((field) => (
          <FormItem key={field.name} field={field} />
        ))}
      </div>
      <div className={s.formFooter}>
        <SubmitButton />
      </div>
    </div>
  );
};
