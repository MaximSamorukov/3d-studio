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
