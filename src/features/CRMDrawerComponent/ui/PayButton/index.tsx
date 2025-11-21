import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { InvoiceType, PaymentDTOType, PrintOrderType } from '@/shared/types';
import { createInvoice } from '@/shared/api';
type PayButtonProps = {
  order: PrintOrderType;
};
export const PayButton = observer(({ order }: PayButtonProps) => {
  const price = order.price;
  const isPaymentAvailable =
    order.order_status === 'in_work' && order.payment_status === 'not_paid';
  const showPayButton = isPaymentAvailable;
  const withInvoiceUrl = !!order.invoice_url;
  const handlePay = async () => {
    if (withInvoiceUrl) {
      window.open(order.invoice_url!, '_blank');
      return;
    }
    if (isPaymentAvailable) {
      const { price, email, id } = order || {};
      if (price && email && id) {
        const data: PaymentDTOType = {
          price: price.toString(),
          currency: 'RUB',
          email,
          orderId: id,
          date: Date.now(),
        };
        const iObject = await createInvoice(data);

        if ('type' in iObject) {
          console.log('Ошибка создания счета:', iObject);
          return;
        }

        const invoice = iObject as InvoiceType;
        const url = invoice?.delivery_method?.url;
        if (url) {
          window.open(url, '_blank');
        }
      }
    }
  };
  return (
    <div className={s.container}>
      <div className={s.priceValue}>
        <span>
          {price} {'\u20BD'}
        </span>
      </div>
      {showPayButton && (
        <button onClick={handlePay} className={s.payButton}>
          Оплатить
        </button>
      )}
    </div>
  );
});
