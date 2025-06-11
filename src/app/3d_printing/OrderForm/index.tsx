"use client";

import cn from "classnames";
import s from "./style.module.scss";
import { useForm, type SubmitHandler } from "react-hook-form";
import { plastics } from "@/UI_Components/Plastics/constants";
import { makeOrder } from "@/services";
import { ModalComponent } from "@/UI_Components/Modal";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";

export type OrderFormFields = {
  file: string;
  name: string;
  phone: string;
  email: string;
  plasticType: string;
  color: string;
  withPostprocessing: string;
  comment: string;
};
export const OrderForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, formState, reset } =
    useForm<OrderFormFields>();

  console.log(formState.errors);

  const onSubmit: SubmitHandler<OrderFormFields> = (data, e) => {
    e?.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    makeOrder(formData).then((result) => {
      console.log(result);
      reset();
      setOpenModal(true);
    });
  };
  return (
    <StyledEngineProvider injectFirst>
      <div className={s.orderFormContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.orderForm}>
          <div className={s.orderFormHeaderLabel}>Напишите нам</div>
          <div className={s.formGroup}>
            <div className={s.gridItem1}>
              <label className={s.label}>Файл</label>
              <input
                min={0}
                max={20}
                multiple
                type="file"
                {...register("file")}
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.file,
                })}
              />
            </div>
            <div className={s.gridItem3}>
              <label className={s.label}>
                Имя
                <span className={s.required}>*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Имя"
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.name,
                })}
              />
            </div>

            <div className={s.gridItem5}>
              <label className={s.label}>
                Телефон
                <span className={s.required}>*</span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="tel"
                placeholder="Телефон"
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.phone,
                })}
              />
            </div>

            <div className={s.gridItem7}>
              <label className={s.label}>
                Email
                <span className={s.required}>*</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className={cn(s.inputField, {
                  [s.inputFieldWithError]: formState.errors.email,
                })}
              />
            </div>

            <div className={s.gridItem2}>
              <label className={s.label}>Тип пластика</label>
              <select
                {...register("plasticType")}
                className={cn(s.inputField, s.inputSelectField, {
                  [s.inputFieldWithError]: formState.errors.plasticType,
                })}
              >
                {plastics.map((i) => (
                  <option key={i}>{i}</option>
                ))}
                <option defaultChecked>Требуется консультация</option>
              </select>
            </div>

            <div className={s.gridItem4}>
              <label className={s.label}>Цвет изделия</label>
              <input
                {...register("color")}
                type="color"
                className={cn(s.colorPicker, {
                  [s.inputFieldWithError]: formState.errors.color,
                })}
              />
            </div>

            <div className={s.gridItem6}>
              <label className={s.label}>Требуется постобработка</label>
              <select
                {...register("withPostprocessing")}
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
                {...register("comment")}
                placeholder="Комментарии"
                className={s.textareaField}
              />
            </div>

            <button type="submit" className={s.submitBtn}>
              <div className={s.makeOrderBtnLabel}>Заказать 3D-печать</div>
            </button>
          </div>
        </form>
        <ModalComponent open={openModal} />
      </div>
    </StyledEngineProvider>
  );
};
