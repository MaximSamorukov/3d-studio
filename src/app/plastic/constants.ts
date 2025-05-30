export const filaments = [
  {
    name: "PLA",
    extendedName: "Polylactic Acid",
    application: "Прототипирование, декоративные изделия, игрушки.",
    descriptions:
      "Легко печатается, не требует подогрева стола, подходит для начинающих.",
    properties: {
      temperature: "190–220 °C",
      bed: "необязательно / 50–60 °C",
      strength: "средняя",
      flexibility: "низкая",
      shrinkage: "низкая",
      notes: "Биоразлагаем, неустойчив к нагреву выше 60 °C.",
    },
  },
  {
    name: "PETG",
    extendedName: "Polyethylene Terephthalate Glycol",
    application: "Функциональные детали, контейнеры, корпуса.",
    descriptions:
      "Компромисс между PLA и ABS, устойчив к влаге и химии, прочный.",
    properties: {
      temperature: "220–250 °C",
      bed: "70–90 °C",
      strength: "высокая",
      flexibility: "средняя",
      shrinkage: "низкая",
      notes: "При перегреве возможна струйная утечка.",
    },
  },
  {
    name: "ABS",
    extendedName: "Acrylonitrile Butadiene Styrene",
    application: "Корпуса, прочные технические детали.",
    descriptions:
      "Прочный и термостойкий, но склонен к усадке, требует камеры.",
    properties: {
      temperature: "230–260 °C",
      bed: "90–110 °C",
      strength: "высокая",
      flexibility: "средняя",
      shrinkage: "высокая",
      notes: "Выделяет пары — нужна вентиляция.",
    },
  },
  {
    name: "TPU",
    extendedName: "Thermoplastic Polyurethane",
    application: "Гибкие детали, прокладки, защитные оболочки.",
    descriptions: "Гибкий, прочный материал, требует медленной печати.",
    properties: {
      temperature: "210–240 °C",
      bed: "40–60 °C",
      strength: "высокая",
      flexibility: "очень высокая",
      shrinkage: "низкая",
      notes: "Сложности подачи, особенно в боудене.",
    },
  },
  {
    name: "Nylon",
    extendedName: "Polyamide",
    application: "Износостойкие, прочные детали, шестерни, крепёж.",
    descriptions: "Прочный, гибкий и устойчивый, но сильно впитывает влагу.",
    properties: {
      temperature: "240–270 °C",
      bed: "80–110 °C",
      strength: "очень высокая",
      flexibility: "высокая",
      shrinkage: "средняя",
      notes: "Хранить в сухом месте, иначе печать проблемная.",
    },
  },
  {
    name: "ASA",
    extendedName: "Acrylic Styrene Acrylonitrile",
    application: "Уличные конструкции, автокомпоненты.",
    descriptions: "Похож на ABS, но устойчив к ультрафиолету и погоде.",
    properties: {
      temperature: "240–260 °C",
      bed: "90–110 °C",
      strength: "высокая",
      flexibility: "средняя",
      shrinkage: "высокая",
      notes: "Требует закрытой камеры.",
    },
  },
  {
    name: "PC",
    extendedName: "Polycarbonate",
    application: "Механические и термостойкие изделия.",
    descriptions: "Очень прочный и жаростойкий, но сложный в печати.",
    properties: {
      temperature: "260–310 °C",
      bed: "110–120 °C",
      strength: "очень высокая",
      flexibility: "средняя",
      shrinkage: "высокая",
      notes: "Требует камеры и термостойкого экструдера.",
    },
  },
];

export const labels = {
  temperature: "Температура печати",
  bed: "Температура нагрева стола",
  strength: "Относительная прочность",
  flexibility: "Относительная пластичность",
  shrinkage: "Объемная усадка",
  notes: "Особенности",
};
