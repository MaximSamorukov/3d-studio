// Интернационализация - Русские метки интерфейса

export const LABELS = {
  // Навигация и меню
  MENU: {
    PRINTING_3D: '3D-печать',
    PLASTIC_TYPES: 'Типы пластика',
    PRICE: 'Стоимость',
    DELIVERY_PAYMENT: 'Доставка и оплата',
    CONTACTS: 'Контакты',
    MENU_SECTIONS: 'Разделы меню',
    SOCIAL_NETWORKS: 'Социальные сети',
    STUDIO_NAME: 'Студия 3D-печати',
  },

  // Общие
  COMMON: {
    STUDIO_NAME: 'Студия 3D-печати',
    DESCRIPTION: 'Печать пластиковых изделий на заказ из пластика',
    FULL_DESCRIPTION:
      '3D Printing Studio — оперативное, профессиональное и надёжное изготовление изделий на заказ методом 3D-печати пластиками.\\nСаморуков М.Л.\\nИНН 402708598897',
    RETURN_HOME: 'Вернуться на главную страницу',
    NO_DATA: 'нет данных',
    YES: 'Да',
    NO: 'Нет',
    EXCELLENT: 'Отлично',
    CLOSE: 'Закрыть',
    DELETE: 'Удалить',
    APPLY: 'Применить',
    RESET: 'Сбросить',
    PAY: 'Оплатить',
  },

  // Ошибки и уведомления
  ERRORS: {
    AUTH_ERROR: '⛔ Ошибка аутентификации',
    UNAUTHORIZED: '⛔ Отсутствует авторизация',
    UNAUTHORIZED_MESSAGE: 'для нахождения на данной странице.',
    FILE_REQUIREMENTS_ERROR: 'Файл не соответствует требованиям',
    FILE_REQUIRED: 'Необходимо прикрепить файл',
    FILE_READ_ERROR: 'Ошибка чтения файла',
    INVOICE_ERROR: 'Ошибка создания счета:',
  },

  // Оплата
  PAYMENT: {
    TITLE: 'Оплата',
    CASH_PVZ: 'Наличными в ПВЗ:',
    CASH_PVZ_DESC: 'Предоплата 50%, оплата остатка при получении.',
    BANK_CARDS: 'Оплата банковскими картами Visa, MasterCard и Maestro',
    BANK_CARDS_DESC: 'Предоплата 50%, оплата остатка при получении.',
    PAYMENT_SYSTEMS: 'Через платежные системы QIWI, WebMoney и Яндекс.Деньги',
    PAYMENT_SYSTEMS_DESC: 'Предоплата 50%, оплата остатка при получении.',
    NON_CASH: 'Безналичный расчёт по счёту',
    NON_CASH_DESC: 'Предоплата 100%, возможна работа по договору.',
    PAYMENT_STATUS: 'Статус оплаты',
    PAID: 'Оплачено',
    NOT_PAID: 'Не оплачено',
  },

  // Доставка
  DELIVERY: {
    TITLE: 'Доставка',
    COURIER: 'Доставка курьером:',
    COURIER_DESC: 'по Москве день в день (в пределах МКАД) – от 650 рублей.',
    YANDEX_PVZ: 'Доставка ПВЗ Яндекс (C2C):',
    YANDEX_PVZ_DESC: 'по Москве и МО за 1-2 рабочих дня – от 99 рублей.',
    TRANSPORT_COMPANY: 'Доставка транспортной компанией:',
    TRANSPORT_COMPANY_DESC:
      'по Москве и МО за 1-2 рабочих дня – от 350 рублей.',
    POST_RUSSIA: 'Доставка в страны СНГ Почтой России (EMS):',
    POST_RUSSIA_DESC:
      'стоимость рассчитывается индивидуально, зависит от пункта назначения.',
    PICKUP: 'Самовывоз в Балашихе из мастерской 3D печати:',
    PICKUP_DESC: 'БЕСПЛАТНО',
  },

  // Прайс-лист
  PRICELIST: {
    TITLE: 'Прайс-лист услуг',
    SERVICES: 'Услуги',
    AVAILABLE_PLASTICS: 'Доступные пластики',
    PRINTING_3D: '3D печать пластиком',
    PRINTING_3D_PRICE: '500₽/деталь + стоимость пластика по весу',
    MODELING: 'Моделирование',
    MODELING_PRICE: '1000₽/изделие',
    POST_PROCESSING: 'Постобработка',
    POST_PROCESSING_PRICE: '1000₽/изделие',
  },

  // CRM
  CRM: {
    INTERFACE_LABEL: 'Интерфейст обработки заказов',
    WEBSITE: 'Сайт',
    SETTINGS: 'Настройки',
    ORDERS: 'Заказы',
    CONSULTATIONS: 'Консультации',
    FILTERS: 'Фильтры',
    ENTER_CRM: 'Вход в CRM',
    MY_ORDERS: 'Мои заказы',
  },

  // Фильтры
  FILTERS: {
    DATE_CREATED: 'Дата создания',
    ORDER_TYPE: 'Тип заказа',
    STATUS: 'Статус',
    PHONE: 'Телефон',
    CONTACT: 'Контакт',
    MATERIAL: 'Материал',
    PAYMENT_STATUS: 'Статус оплаты',
    PRINT_ORDER: 'Печать',
    CONSULTATION: 'Консультация',
  },

  // Формы заказа
  ORDER_FORM: {
    WRITE_US: 'Напишите нам',
    FILE: 'Файл',
    NAME: 'Имя',
    PHONE: 'Телефон',
    EMAIL: 'Email',
    PLASTIC_TYPE: 'Тип пластика',
    PRODUCT_COLOR: 'Цвет изделия',
    POST_PROCESSING: 'Требуется постобработка',
    POST_PROCESSING_LABEL: 'Постобработка',
    COMMENTS: 'Комментарии',
    ORDER_3D_PRINTING: 'Заказать 3D-печать',
    ORDER_CONSULTATION: 'Заказать консультацию',
    AUTHORIZE: 'Авторизоваться',
    CONSULTATION_REQUIRED: 'Требуется консультация',
    DRAG_FILE: 'Ператащите сюда файл (не более 10 Мб) для загрузки.',
    FORMATS_STL_3MF: 'Форматы: *.STL, *.3MF, *AMF',
    FORMATS_STL_OBJ: 'Форматы: *.STL, *.OBJ',
    DELETE_FILE: 'удалить файл',
    VIEW_FILE: 'просмотр файла',
    FILE_LINK: 'ссылка на файл',
    CALCULATE: 'Расчитать',
  },

  // Карточка заказа
  ORDER_CARD: {
    ORDER: 'Заказ',
    CONSULTATION_REQUEST: 'Заявка на консультацию',
    CONTACT: 'Контакт',
    DATE_CREATED: 'Дата создания',
    PLASTIC_TYPE: 'Тип пластика',
    PRODUCT_COLOR: 'Цвет изделия',
    POST_PROCESSING: 'Постобработка',
    FILE: 'Файл',
    COMMENTS: 'Комментарии',
    STATUS: 'Статус',
    ORDER_COST: 'Стоимость заказа',
    PAYMENT_STATUS: 'Статус оплаты',
    NOT_DETERMINED: 'не определена',
    IN_PROGRESS: 'В работе',
    ORDER_TYPE_ID: 'Тип заказа - id',
    ADDITIONAL_WORK: 'Доп. работы',
    ORDER_STATUS: 'Статус заказа',
  },

  // Модальные окна
  MODAL: {
    DELETE_CONFIRM: 'Точно удалить',
    DELETE_CANCEL: 'Хотя, не стоит удалять',
    ORDER_SUCCESS: 'Заказ успешно отправлен.',
    ORDER_SUCCESS_MESSAGE:
      'Представитель мастерской вам перезвонит для уточнения объема заказа.',
  },

  // Авторизация
  AUTH: {
    AUTHORIZATION: 'Авторизация',
    LOGIN: 'Вход',
    LOGOUT: 'Выход',
    LOGIN_GOOGLE: 'Вход через Google',
    REGISTER: 'Зарегистрировать',
    REGISTERED: 'Зарегистрированно',
    REGISTRATION_ERROR: 'Ошибка регистрации',
    ADD_PHONE_OR_EMAIL: 'Добавьте номер телефона или email',
    AUTHORIZE_AND_ORDER: 'Авторизоваться и заказать консультацию',
  },

  // Пластики
  PLASTICS: {
    SHORT_DESCRIPTION: 'Краткое описание:',
    APPLICATION: 'Применение:',
    TECH_FEATURES: 'Базовые технологические особенности:',
  },

  // Email
  EMAIL: {
    SUBJECT_ORDER: 'Заказ',
  },
} as const;

// Типы для TypeScript
export type LabelKey = keyof typeof LABELS;
export type LabelValue<K extends LabelKey> = (typeof LABELS)[K];
