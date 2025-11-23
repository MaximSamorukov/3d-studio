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
