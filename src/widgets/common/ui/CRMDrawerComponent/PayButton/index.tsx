import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { PrintOrderType } from '@/shared/types';
type PayButtonProps = {
  order: PrintOrderType;
};
export const PayButton = observer(({ order }: PayButtonProps) => {
  const price = order.price;
  const showPayButton =
    order.order_status === 'in_work' && order.payment_status === 'not_paid';

  return (
    <div className={s.container}>
      <div className={s.priceValue}>
        <span>
          {price} {'\u20BD'}
        </span>
      </div>
      {showPayButton && <button className={s.payButton}>Оплатить</button>}
    </div>
  );
});
