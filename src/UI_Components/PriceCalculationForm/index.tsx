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
  fileUpload: Blob;
  inputContacts: string;
  withModeling: boolean;
  withPostProcessing: boolean;
};
export const PriceCalculationForm = () => {
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
    console.log(data);
    const formData = new FormData();
    const {
      inputContacts,
      withModeling,
      withPostProcessing,
      plasticType,
      fileUpload,
    } = data;
    formData.append("inputContacts", inputContacts);
    formData.append("withModeling", withModeling.toString());
    formData.append("withPostProcessing", withPostProcessing.toString());
    formData.append("plasticType", plasticType);
    formData.append("fileUpload", fileUpload);

    const res = await fetch("/api/calculate", {
      method: "POST",
      body: formData,
    });

    console.log(await res.json());
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
