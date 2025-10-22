"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { formFields } from "./constants";
import { LoginFormType, FormItemType } from "./types";
import { FormItem } from "./FormItem";
import { SubmitButton } from "./SubmitButton";
import { signIn } from "next-auth/react";

import s from "./style.module.scss";
import { formLoginState } from "./loginStore";

export const LoginForm = () => {
  const methods = useForm<LoginFormType>();
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginFormType> = async (data, e) => {
    e?.preventDefault();
    //formLoginState.loginHandler(data).then(console.log);
    // router.push("/crm/dashboard");
    signIn("credentials", { redirectTo: "/crm" });
  };
  return (
    <div className={s.formContainer}>
      <div className={s.formHead}>
        <span>Авторизация</span>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={s.formBody}>
            {(formFields as FormItemType[]).map((field) => (
              <FormItem key={field.name} field={field} />
            ))}
          </div>
          <div className={s.formFooter}>
            <SubmitButton label="Войти" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
