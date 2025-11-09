export enum Statuces {
  submited = 'submited',
  in_work = 'in_work',
  rejected = 'rejected',
}

export const ORDER_STATUSES: Statuces[] = [
  Statuces.submited,
  Statuces.in_work,
  Statuces.rejected,
];

export const STATUSES_DICT: Record<Statuces, string> = {
  [Statuces.in_work]: 'В работе',
  [Statuces.submited]: 'Размещен',
  [Statuces.rejected]: 'Отменен',
};
