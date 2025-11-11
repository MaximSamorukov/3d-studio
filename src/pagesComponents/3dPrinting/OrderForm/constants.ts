import { ALLOWED_MIME_TYPES } from '@/widgets/common/ui/PriceCalculationForm/FormItem/constants';
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
    .instanceof(FileList)
    .refine((list) => list.length <= 1, 'Нужно выбрать ровно один файл')
    .refine((files) => {
      if (files.length) {
        return ALLOWED_MIME_TYPES.includes(files?.[0]?.type);
      } else {
        return true;
      }
    }, 'Необходимы файлы с расширениями *.stl, *.amf, *.3mf')
    .refine((files) => {
      if (files.length) {
        return files[0].size < 10 * 1024 ** 2;
      } else {
        return true;
      }
    }, 'Файл должен быть меньше 10 Мб'),
  plasticType: z.string().optional(),
  color: z.string().optional(),
  withPostprocessing: z.string().optional(),
  comment: z.string().optional(),
});
