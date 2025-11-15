export const menuItemsLib = {
  ['/3d_printing']: '3D-печать',
  ['/plastic']: 'Типы пластика',
  ['/price']: 'Стоимость',
  ['/logistic']: 'Доставка и оплата',
  ['/contacts']: 'Контакты',
};
export const menuItems = Object.entries(menuItemsLib).map(([href, label]) => ({
  href,
  label,
}));

export const logoText =
  '3D Printing Studio — оперативное, профессиональное и надёжное изготовление изделий на заказ методом 3D-печати пластиками.\nСаморуков М.Л.\nИНН 402708598897';

export const footerMenu = [
  {
    label: 'Разделы меню',
    value: 'baseMenuItems',
  },
  {
    label: 'Контакты',
    value: 'contacts',
  },
  {
    label: 'Социальные сети',
    value: 'socials',
  },
];

export const socials = [
  {
    id: 'tg',
    description: 'https://t.me/M_Camopykoff',
  },
  {
    id: 'vk',
    description: 'https://vk.com/club230694678',
  },
];
