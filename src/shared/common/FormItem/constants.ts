import { FormInputTypeEnum, FormItemType } from './types';

export const formFields: FormItemType[] = [
  {
    label: 'Логин',
    placeholder: 'somename@domain.ru',
    name: 'login',
    formInputType: FormInputTypeEnum.inputText,
    defaultValue: '',
    values: undefined,
    rules: {
      required: {
        value: true,
        message: 'Логин обязателен для заполнения.',
      },
      minLength: {
        value: 6,
        message: 'Длина логина не менее 6 символов.',
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Логин не соответствует паттерну электронной почты.',
      },
    },
  },
  {
    label: 'Пароль',
    placeholder: 'Пароль',
    name: 'password',
    formInputType: FormInputTypeEnum.password,
    defaultValue: undefined,
    values: undefined,
    rules: {
      required: {
        value: true,
        message: 'Пароль обязателен для заполнения.',
      },
      minLength: {
        value: 6,
        message: 'Длина пароля не менее 6 символов.',
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        message:
          'Пароль должен содержать цифры, строчные и прописные символы латинского алфавита.',
      },
    },
  },
];

export const technicalData = [
  {
    label: 'Вес',
    units: 'г',
    key: 'weight',
  },
  {
    label: 'Объём',
    units: 'мм\u00B3',
    key: 'volume',
  },
  {
    label: 'Время печати',
    units: 'мин',
    key: 'time',
  },
  {
    label: 'Стоимость',
    units: 'руб',
    key: 'price',
  },
];
