export const fields = [
  {
    label: "Загрузите модель",
    description: "Загрузка файла",
    required: false,
    inputType: "file upload",
  },
  { label: "Имя", description: "Имя", required: true, inputType: "text input" },
  {
    label: "Телефон",
    description: "Телефон",
    required: true,
    inputType: "text input",
  },
  {
    label: "Email / Telegram / Whatsapp",
    description: "email, whatsapp, Telegram",
    required: false,
    inputType: "text input",
  },
  {
    label: "Комментарии",
    description: "Комментарии",
    required: false,
    inputType: "textarea input",
  },
  {
    label: "Тип пластика",
    description: "Тип пластика",
    required: false,
    inputType: "selector",
  },
  {
    label: "Цвет изделия",
    description: "Цвет изделия",
    required: false,
    inputType: "color selector",
  },
  {
    label: "Постобработка",
    description: "Требуется ли постобработка",
    required: false,
    inputType: "checkbox",
  },
];
