'use client';
import React, { FormEventHandler, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { formFields } from './constants';
import { LoginFormType, FormItemType } from './types';
import { FormItem } from './FormItem';
import { SubmitButton } from './SubmitButton';
import { signIn } from 'next-auth/react';

import s from './style.module.scss';
import { Errors } from './Errors';

export const LoginForm = () => {
  const methods = useForm<LoginFormType>();
  const onSubmit: SubmitHandler<LoginFormType> = async (data, e) => {
    e?.preventDefault();
    await signIn('credentials', { redirectTo: '/crm', ...data });
  };
  const onGoogleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await signIn('google', { redirectTo: '/' });
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
          <div className={s.formPasswordRules}>
            <Errors />
          </div>
          <div className={s.formFooter}>
            <SubmitButton label="Войти" />
          </div>
        </form>
      </FormProvider>
      <div className={s.formOtherProviders}>
        <form onSubmit={onGoogleSubmit}>
          <SubmitButton label="Вход через Google" />
        </form>
      </div>
    </div>
  );
};
