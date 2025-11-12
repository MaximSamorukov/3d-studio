'use client';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { formFields } from './constants';
import { CalculationForm, FormItemType } from './types';
import { FormItem } from './FormItem';
import { SubmitButton } from './SubmitButton';
import { formCalculationState } from './formCalculationStore';
import { CircularProgress } from '@mui/material';

import s from './style.module.scss';

export const PriceCalculationForm = observer(() => {
  const methods = useForm<CalculationForm>({
    defaultValues: {
      inputContacts: '',
      withModeling: false,
      withPostProcessing: false,
      plasticType: 'PLA',
      fileUpload: undefined,
    },
  });
  const onSubmit: SubmitHandler<CalculationForm> = async (data) => {
    await formCalculationState.requestCalculation(data);
  };
  useEffect(() => {
    if (formCalculationState.isError) {
      alert('Ошибка расчета');
      formCalculationState.resetIsError();
    }
  }, [formCalculationState.isError]);
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
      {formCalculationState.pending ? (
        <div className={s.formContainerLoader}>
          <CircularProgress size={40} color="success" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
});
