"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { formFields } from "./constants";
import { CalculationForm, FormItemType } from "./types";
import { FormItem } from "./FormItem";
import { SubmitButton } from "./SubmitButton";

import s from "./style.module.scss";
import { formCalculationState } from "./formCalculationStore";

export const PriceCalculationForm = observer(() => {
  const methods = useForm<CalculationForm>({
    defaultValues: {
      inputContacts: "",
      withModeling: false,
      withPostProcessing: false,
      plasticType: "PLA",
      fileUpload: undefined,
    },
  });
  const onSubmit: SubmitHandler<CalculationForm> = async (data) => {
    formCalculationState.requestCalculation(data);
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
});
