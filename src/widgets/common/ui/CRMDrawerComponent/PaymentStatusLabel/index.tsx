import { PAYMENT_STATUCES_DICT, PaymentStatuces } from '@/shared/constants';
import React from 'react';

export const PaymentStatusLabel = ({
  status,
}: {
  status?: PaymentStatuces | null;
}) => {
  if (!status) {
    return <span>нет данных</span>;
  }
  return <span>{PAYMENT_STATUCES_DICT[status]}</span>;
};

export default PaymentStatusLabel;
