'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { formFields, formFieldsWithoutRules } from './constants';
import { ContactFormType, FormItemType } from './types';
import { FormItem } from './FormItem';
import { SubmitButton } from './SubmitButton';
import { CircularProgress } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';

import s from './style.module.scss';
import { usePathname } from 'next/navigation';
import { orderConsultationHandler } from './utils';
import { getConsultationsOnEmail } from '../LoginButton/utils';
import { userState } from '@/shared/user/state';

export const OrderConsultationForm = observer(() => {
  const session = useSession();
  const path = usePathname();

  const [savingInProgress, setSavingInProgress] = useState(false);
  const [btnLabel, setBtnLabel] = useState('Авторизоваться');
  const methods = useForm<ContactFormType>();

  useEffect(() => {
    if (session.data) {
      setBtnLabel('Зарегистрировать');
      if (session.data.user?.email) {
        methods.setValue('contact', session.data.user.email);
      }
    } else {
      setBtnLabel('Авторизоваться');
    }
  }, [session.data]);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    if (!session.data) {
      const redirectTo = (path || '/3d_printing') + '?' + 'consultation=true';
      signIn('google', { redirectTo });
    } else {
      setSavingInProgress(true);
      const result = await orderConsultationHandler({
        name: session.data.user?.name || 'нет данных',
        email: session.data.user?.email || 'нет данных',
        ...data,
      });
      if (result) {
        setBtnLabel('Зарегистрированно');
        methods.reset();
        getConsultationsOnEmail(session.data.user!.email!)
          .then(({ consultations }) => {
            userState.setConsultations(consultations);
          })
          .catch(() => {
            userState.setConsultations([]);
          });
      } else {
        setBtnLabel('Ошибка регистрации');
      }
      setSavingInProgress(false);
    }
  };
  const label = session.data
    ? 'Добавьте номер телефона или email'
    : 'Авторизоваться и заказать консультацию';

  const fields = useMemo(() => {
    if (session.data) {
      return formFields;
    } else {
      return formFieldsWithoutRules;
    }
  }, [session.data]);
  return (
    <div className={s.formContainer}>
      {savingInProgress && (
        <div className={s.formContainerLoader}>
          <CircularProgress size={40} color="primary" />
        </div>
      )}
      <div className={s.formHead}>
        <span className={cn({ [s.formHeadNotAuth]: !session.data })}>
          {label}
        </span>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={s.formBody}>
            {(fields as FormItemType[]).map((field) => (
              <FormItem key={field.name} field={field} />
            ))}
            <div className={s.formBodyErrors}>
              {methods.formState.errors && (
                <span>{methods.formState.errors.contact?.message}</span>
              )}
            </div>
          </div>
          <div className={s.formFooter}>
            <SubmitButton label={btnLabel} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
});
