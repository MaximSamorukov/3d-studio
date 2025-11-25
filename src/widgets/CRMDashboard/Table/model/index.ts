export const orderTypeColumns = [
  {
    key: 'id',
    label: 'id',
    visible: false,
  },
  {
    key: 'file_path',
    label: 'файл',
    visible: true,
  },
  {
    key: 'name',
    label: 'имя',
    visible: false,
  },
  {
    key: 'phone',
    label: 'телефон',
    visible: true,
  },
  {
    key: 'email',
    label: 'эл. почта',
    visible: true,
  },
  {
    key: 'plastic_type',
    label: 'тип пластика',
    visible: false,
  },
  {
    key: 'color',
    label: 'цвет',
    visible: false,
  },
  {
    key: 'with_postprocessing',
    label: 'постобработка',
    visible: false,
  },
  {
    key: 'comment',
    label: 'комментарий',
    visible: false,
  },
  {
    key: 'order_status',
    label: 'статус',
    visible: true,
  },
  {
    key: 'payment_status',
    label: 'оплата',
    visible: true,
  },
  {
    key: 'created_at',
    label: 'дата',
    visible: true,
  },
];

export const consultationTypeColumns = [
  {
    key: 'id',
    label: 'id',
    visible: false,
  },
  {
    key: 'name',
    label: 'имя',
    visible: true,
  },
  {
    key: 'contact',
    label: 'контакт',
    visible: true,
  },
  {
    key: 'email',
    label: 'эл. почта',
    visible: true,
  },
  {
    key: 'order_status',
    label: 'статус',
    visible: true,
  },
  {
    key: 'created_at',
    label: 'дата',
    visible: true,
  },
];
export const hideNotvisible = (i: { visible: boolean }) => i.visible;

export const EMOJI_LABELS = {
  file_path: '📄',
  phone: '☎️',
  email: '✉️',
  order_status: '📦',
  payment_status: '💳',
  created_at: '📅',
  contact: '💬',
  name: '👤',
};
