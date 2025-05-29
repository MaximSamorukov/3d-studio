"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { formFields } from "./constants";
import { FormItemType } from "./types";
import { FormItem } from "./FormItem";
import { SubmitButton } from "./SubmitButton";

import s from "./style.module.scss";

export type CalculationForm = {
  plasticType: string;
  fileUpload: File | null;
  weight: string;
  withModeling: boolean;
  withPostProcessing: boolean;
};
export const PriceCalculationForm = () => {
  const methods = useForm<CalculationForm>({
    defaultValues: {
      weight: "",
      withModeling: false,
      withPostProcessing: false,
      plasticType: "PLA",
      fileUpload: null,
    },
  });
  const onSubmit: SubmitHandler<CalculationForm> = (data) => {
    fetch("/api/calculate", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(console.log)
      .catch(console.warn);
  };
  return (
    <div className={s.formContainer}>
      <div className={s.formHead}>
        <span>Калькулятор расчета стоимости печати</span>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={s.formBody}>
            {(formFields as FormItemType[]).map((field) => (
              <FormItem key={field.name} field={field} />
            ))}
          </div>
          <div className={s.formFooter}>
            <SubmitButton />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
