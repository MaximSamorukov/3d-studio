import { FormInputTypeEnum } from './types';
import { omit } from 'lodash';

export const formFields = [
  {
    label: '',
    placeholder: '+7XXXXXXXXXX или email',
    name: 'contact',
    formInputType: FormInputTypeEnum.inputText,
    defaultValue: '',
    values: undefined,
    rules: {
      required: {
        value: true,
        message: 'Контактная информация обязательна для заполнения.',
      },
      pattern: {
        value: /^(\+7\d{10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        message: 'Формат строки: электронная почта или телефон',
      },
    },
  },
];

export const formFieldsWithoutRules = formFields.map((i) => omit(i, ['rules']));
