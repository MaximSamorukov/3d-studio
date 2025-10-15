"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { formFields } from "./constants";
import { LoginFormType, FormItemType } from "./types";
import { FormItem } from "./FormItem";
import { SubmitButton } from "./SubmitButton";

import s from "./style.module.scss";
import { formLoginState } from "./loginStore";

export const OrderConsultationForm = observer(() => {
  const methods = useForm<LoginFormType>();
  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    formLoginState.loginHandler(data);
  };
  return (
    <div className={s.formContainer}>
      <div className={s.formHead}>
        <span>Добавьте номер телефона или email</span>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={s.formBody}>
            {(formFields as FormItemType[]).map((field) => (
              <FormItem key={field.name} field={field} />
            ))}
          </div>
          <div className={s.formFooter}>
            <SubmitButton label="Зарегистрировать" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
});
