'use client';

import cn from 'classnames';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { makeOrder } from '@/services';
import { OrderSuccesModal } from '@/widgets/common/ui/OrderSuccesModal';
import { StyledEngineProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { getOrdersOnEmail } from '@/widgets/common/ui/LoginButton/utils';
import { userState } from '@/shared/state/user/state';
import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react-lite';
import { schema } from './constants';
import { materialsState } from '@/shared/state/materials/state';
import s from './style.module.scss';

export type OrderFormFields = {
  file?: File;
  name?: string;
  phone: string;
  email: string;
  plasticType?: string;
  color?: string;
  withPostprocessing?: string;
  comment?: string;
  id?: number;
  created_at?: string;
};

export const OrderForm = observer(() => {
  const session = useSession();
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [savingOrderInprogress, setSavingOrderInProgress] = useState(false);
  const { register, handleSubmit, formState, reset, setValue } = useForm<
    Omit<OrderFormFields, 'id' | 'created_at'>
  >({
    resolver: zodResolver(schema),
  });
  const isAuthenticated = !!session.data?.user;
  const userHasEmail = !!session.data?.user?.email;
  const plastics = materialsState.materialNames;

  const onSubmit: SubmitHandler<Omit<OrderFormFields, 'id' | 'created_at'>> = (
    data,
    e,
  ) => {
    e?.preventDefault();
    if (isAuthenticated) {
      setSavingOrderInProgress(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      makeOrder(formData)
        .then((result) => {
          setSavingOrderInProgress(false);
          reset();
          if (userHasEmail) {
            getOrdersOnEmail(session.data!.user!.email!)
              .then(({ orders }) => {
                userState.setOrders(orders);
              })
              .catch(() => {
                userState.setOrders([]);
              });
          }
          setOpenModal(true);
        })
        .catch(() => {
          setSavingOrderInProgress(false);
        });
    } else {
      signIn('google', { redirectTo: pathname + '?' + 'print_order=true' });
    }
  };
  useEffect(() => {
    if (session.data?.user) {
      const { email, name } = session.data.user;
      if (email) {
        setValue('email', email);
      }
      if (name) {
        setValue('name', name);
      }
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [session.data?.user]);

  const submitBtnLabel = isAuthenticated
    ? 'Заказать 3D-печать'
    : 'Авторизоваться';
  return (
    <StyledEngineProvider injectFirst>
      <div id="order_form" className={s.orderFormContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.orderForm}>
          {savingOrderInprogress && (
            <div className={s.orderFormLoader}>
              <CircularProgress size={40} color="primary" />
            </div>
          )}
          <div className={s.orderFormHeaderLabel}>Напишите нам</div>
          <div className={s.formGroup}>
            <div className={s.gridItem1}>
              <label className={s.label}>Файл</label>
              <input
                min={0}
                max={20}
                type="file"
                multiple={false}
                onChange={(e) => {
                  const file = e.target.files?.[0] as File;
                  if (file) {
                    setValue('file', file);
                  }
                }}
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.file,
                })}
              />
              {formState.errors.file ? (
                <span className={s.errorMessage}>
                  {formState.errors.file.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className={s.gridItem3}>
              <label className={s.label}>Имя</label>
              <input
                {...register('name', { required: isAuthenticated })}
                type="text"
                placeholder="Имя"
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.name,
                })}
              />
              {formState.errors.name ? (
                <span className={s.errorMessage}>
                  {formState.errors.name.message}
                </span>
              ) : (
                <></>
              )}
            </div>

            <div className={s.gridItem5}>
              <label className={s.label}>
                Телефон
                <span className={s.required}>*</span>
              </label>
              <input
                {...register('phone', { required: isAuthenticated })}
                type="tel"
                placeholder="Телефон"
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.phone,
                })}
              />
              {formState.errors.phone ? (
                <span className={s.errorMessage}>
                  {formState.errors.phone.message}
                </span>
              ) : (
                <></>
              )}
            </div>

            <div className={s.gridItem7}>
              <label className={s.label}>
                Email
                <span className={s.required}>*</span>
              </label>
              <input
                {...register('email', { required: isAuthenticated })}
                type="email"
                placeholder="Email"
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.email,
                })}
              />
              {formState.errors.email ? (
                <span className={s.errorMessage}>
                  {formState.errors.email.message}
                </span>
              ) : (
                <></>
              )}
            </div>

            <div className={s.gridItem2}>
              <label className={s.label}>Тип пластика</label>
              <select
                {...register('plasticType')}
                className={cn(s.inputField, s.inputSelectField, {
                  [s.inputFieldWithError]: formState.errors.plasticType,
                })}
              >
                {plastics.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>

            <div className={s.gridItem4}>
              <label className={s.label}>Цвет изделия</label>
              <input
                {...register('color')}
                type="color"
                className={cn(s.colorPicker, {
                  [s.inputFieldWithError]: formState.errors.color,
                })}
              />
            </div>

            <div className={s.gridItem6}>
              <label className={s.label}>Требуется постобработка</label>
              <select
                {...register('withPostprocessing')}
                className={cn(s.inputField, s.inputSelectField, {
                  [s.inputFieldWithError]: formState.errors.withPostprocessing,
                })}
              >
                <option>Да</option>
                <option>Нет</option>
                <option>Требуется консультация</option>
              </select>
            </div>
            <div className={s.gridItem8}>
              <label className={s.label}>Комментарии</label>
              <textarea
                {...register('comment')}
                placeholder="Комментарии"
                className={s.textareaField}
              />
            </div>

            <button type="submit" className={s.submitBtn}>
              <div className={s.makeOrderBtnLabel}>{submitBtnLabel}</div>
            </button>
          </div>
        </form>
        <OrderSuccesModal open={openModal} setOpen={setOpenModal} />
      </div>
    </StyledEngineProvider>
  );
});
