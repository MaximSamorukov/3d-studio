export const formFields = [
  {
    label: "Загрузка файла модели (*.STL, *.OBJ):",
    placeholder: "Загрузите или перетащите файл",
    name: "fileUpload",
    formInputType: "file",
    defaultValue: false,
    values: undefined,
  },
  {
    label: "Тип пластика:",
    placeholder: "Выберите тип пластика",
    name: "plasticType",
    formInputType: "selector",
    defaultValue: "PLA",
    values: [
      {
        key: "PLA",
        value: "PLA",
      },
    ],
  },
  {
    label: "Требуется моделирование:",
    placeholder: undefined,
    name: "withModeling",
    formInputType: "checkbox",
    defaultValue: false,
    values: undefined,
  },
  {
    label: "Требуется постобработка:",
    placeholder: undefined,
    name: "withPostProcessing",
    formInputType: "checkbox",
    defaultValue: false,
    values: undefined,
  },
  {
    label: "Телефон или email:",
    placeholder: undefined,
    name: "contacts",
    formInputType: "inputContacts",
    defaultValue: "",
    values: undefined,
  },
  {
    label: "Расчетные данные:",
    placeholder: "Ориентировочная стоимость",
    name: "price",
    formInputType: "textField",
    defaultValue: undefined,
    values: undefined,
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
