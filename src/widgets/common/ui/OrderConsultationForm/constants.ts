import { FormInputTypeEnum } from './types';

export const formFields = [
  {
    label: '',
    placeholder: 'Телефон или email',
    name: 'contact',
    formInputType: FormInputTypeEnum.inputText,
    defaultValue: '',
    values: undefined,
    rules: {
      required: {
        value: true,
        message: 'Контактная информация обязательна для заполнения.',
      },
    },
  },
];
