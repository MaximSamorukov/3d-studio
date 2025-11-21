import { STATUSES_DICT } from '@/shared/constants';
import React from 'react';

export const OrderStatusLabel = ({
  status,
}: {
  status?: keyof typeof STATUSES_DICT | null;
}) => {
  if (!status) {
    return <span>нет данных</span>;
  }
  return <span>{STATUSES_DICT[status]}</span>;
};

export default OrderStatusLabel;
