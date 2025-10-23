import { FormInputTypeEnum, FormItemType } from "./types";

export const formFields: FormItemType[] = [
  {
    label: "Логин",
    placeholder: "somename@domain.ru",
    name: "login",
    formInputType: FormInputTypeEnum.inputText,
    defaultValue: "",
    values: undefined,
    rules: {
      required: true,
      minLength: 5,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  {
    label: "Пароль",
    placeholder: "Пароль",
    name: "password",
    formInputType: FormInputTypeEnum.password,
    defaultValue: undefined,
    values: undefined,
    rules: {
      required: true,
      minLength: 6,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
    },
  },
];

export const technicalData = [
  {
    label: "Вес",
    units: "г",
    key: "weight",
  },
  {
    label: "Объём",
    units: "мм\u00B3",
    key: "volume",
  },
  {
    label: "Время печати",
    units: "мин",
    key: "time",
  },
  {
    label: "Стоимость",
    units: "руб",
    key: "price",
  },
];
