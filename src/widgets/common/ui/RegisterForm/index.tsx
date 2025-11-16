'use client';
import React, { FormEventHandler, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { formFields } from './constants';
import { LoginFormType, FormItemType } from '@/shared/common/FormItem/types';
import { FormItem } from '@/shared/common/FormItem';
import { SubmitButton } from '@/shared/common/SubmitButton';

import s from './style.module.scss';
import { Errors } from './Errors';

export const RegisterForm = () => {
  const methods = useForm<LoginFormType>();
  const onSubmit: SubmitHandler<LoginFormType> = async (data, e) => {
    e?.preventDefault();
    console.log(data);
  };

  return (
    <div className={s.formContainer}>
      <div className={s.formHead}>
        <span>Регистрация пользователя с ролью admin</span>
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
            <SubmitButton label="Зарегистрироваться" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
