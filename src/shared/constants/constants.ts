export const EXTENSIONS = ['amf', '3mf', 'stl'];

export enum Statuces {
  submited = 'submited',
  in_work = 'in_work',
  rejected = 'rejected',
  accomplished = 'accomplished',
}

export const ORDER_STATUSES: Statuces[] = [
  Statuces.submited,
  Statuces.in_work,
  Statuces.accomplished,
  Statuces.rejected,
];

export const STATUSES_DICT: Record<Statuces, string> = {
  [Statuces.submited]: 'Размещен',
  [Statuces.in_work]: 'В работе',
  [Statuces.accomplished]: 'Выполнен',
  [Statuces.rejected]: 'Отменен',
};

export const STATUSES_MOBILE_DICT: Record<Statuces, string> = {
  [Statuces.submited]: '📝',
  [Statuces.in_work]: '⚙️',
  [Statuces.accomplished]: '🟢',
  [Statuces.rejected]: '❌',
};

export enum PaymentStatuces {
  paid = 'paid',
  not_paid = 'not_paid',
}

export const PAYMENT_STATUCES_DICT: Record<PaymentStatuces, string> = {
  [PaymentStatuces.paid]: 'Оплачен',
  [PaymentStatuces.not_paid]: 'Не оплачен',
};

export const PAYMENT_STATUCES_MOBILE_DICT: Record<PaymentStatuces, string> = {
  [PaymentStatuces.paid]: '🟢',
  [PaymentStatuces.not_paid]: '🔴',
};

export enum ALLOWED_EXTENSIONS_ENUM {
  STL = 'stl',
  THREE_MF = '3mf',
  AMF = 'amf',
}
