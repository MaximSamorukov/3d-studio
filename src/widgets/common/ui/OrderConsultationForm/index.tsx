'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { formFields } from './constants';
import { ContactFormType, FormItemType } from './types';
import { FormItem } from './FormItem';
import { SubmitButton } from './SubmitButton';

import s from './style.module.scss';
import { formOrderConsultationState } from './loginStore';
import { CircularProgress } from '@mui/material';

export const OrderConsultationForm = observer(() => {
  const [savingInProgress, setSavingInProgress] = useState(false);
  const [btnLabel, setBtnLabel] = useState('Зарегистрировать');
  const methods = useForm<ContactFormType>();
  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    setSavingInProgress(true);
    const result = await formOrderConsultationState.orderConsultationHandler(
      data,
    );
    if (result) {
      setBtnLabel('Зарегистрированно');
      methods.reset();
    } else {
      setBtnLabel('Ошибка регистрации');
    }
    setSavingInProgress(false);
  };
  return (
    <div className={s.formContainer}>
      {savingInProgress && (
        <div className={s.formContainerLoader}>
          <CircularProgress size={40} color="primary" />
        </div>
      )}
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
            <SubmitButton label={btnLabel} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
});
