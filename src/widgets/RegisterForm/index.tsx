'use client';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { formFields } from './constants';
import { FormItemType } from '@/shared/ui/FormItem/types';
import { FormItem } from '@/shared/ui/FormItem';
import { SubmitButton } from '@/shared/ui/SubmitButton';
import { Errors } from './Errors';
import { RegisterFormType } from './types';
import { useSession } from 'next-auth/react';
import { adminRegister } from '@/shared/api';
import { useRouter } from 'next/navigation';

import s from './style.module.scss';

export const RegisterForm = () => {
  const session = useSession();
  const router = useRouter();
  const userEmail = session.data?.user.email;
  const methods = useForm<RegisterFormType>();

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    methods.clearErrors();
    try {
      await adminRegister({
        login: data.login,
        password: data.password,
      });
      methods.reset();
      router.replace('/');
    } catch (_) {
      methods.setError('login', {
        message: 'Ошибка регистрации. Попробуйте еще раз',
      });
    }
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
