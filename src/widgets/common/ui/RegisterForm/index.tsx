'use client';
import React, { FormEventHandler, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { formFields } from './constants';
import { FormItemType } from '@/shared/common/FormItem/types';
import { FormItem } from '@/shared/common/FormItem';
import { SubmitButton } from '@/shared/common/SubmitButton';

import s from './style.module.scss';
import { Errors } from './Errors';
import { RegisterFormType } from './types';
import { useSession } from 'next-auth/react';

export const RegisterForm = () => {
  const session = useSession();
  const userEmail = session.data?.user.email;
  const methods = useForm<RegisterFormType>();

  const onSubmit: SubmitHandler<RegisterFormType> = async (data, e) => {
    console.log(data, methods);
  };
  useEffect(() => {
    if (session.data?.user.email) {
      methods.setValue('login', session.data?.user.email);
    }
  }, [userEmail]);
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
