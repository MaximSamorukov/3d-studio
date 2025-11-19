import { ALLOWED_MIME_TYPES } from '@/widgets/common/ui/PriceCalculationForm/FileFormItem/constants';
import { z } from 'zod';

export const fields = [
  {
    label: 'Загрузите модель',
    description: 'Загрузка файла',
    required: false,
    inputType: 'file upload',
  },
  { label: 'Имя', description: 'Имя', required: true, inputType: 'text input' },
  {
    label: 'Телефон',
    description: 'Телефон',
    required: true,
    inputType: 'text input',
  },
  {
    label: 'Email / Telegram / Whatsapp',
    description: 'email, whatsapp, Telegram',
    required: false,
    inputType: 'text input',
  },
  {
    label: 'Комментарии',
    description: 'Комментарии',
    required: false,
    inputType: 'textarea input',
  },
  {
    label: 'Тип пластика',
    description: 'Тип пластика',
    required: false,
    inputType: 'selector',
  },
  {
    label: 'Цвет изделия',
    description: 'Цвет изделия',
    required: false,
    inputType: 'color selector',
  },
  {
    label: 'Постобработка',
    description: 'Требуется ли постобработка',
    required: false,
    inputType: 'checkbox',
  },
];

export const schema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .trim()
    .length(11, 'Неверный формат. Длина не менее 11 символов'),
  email: z.email({
    pattern: z.regexes.email,
    message: 'Неверный формат email',
  }),
  file: z
    .file()
    .mime(
      ALLOWED_MIME_TYPES,
      'Необходимы файлы с расширениями *.stl, *.amf, *.3mf',
    )
    .max(10 * 1024 ** 2, 'Файл должен быть меньше 10 Мб')
    .optional(),
  plasticType: z.string().optional(),
  color: z.string().optional(),
  withPostprocessing: z.string().optional(),
  comment: z.string().optional(),
});
