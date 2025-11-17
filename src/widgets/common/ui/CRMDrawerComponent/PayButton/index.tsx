import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { usePathname } from 'next/navigation';
import { PaymentDTOType, PaymentType, PrintOrderType } from '@/shared/types';
import { createPayment } from '@/services/payments';
type PayButtonProps = {
  order: PrintOrderType;
};
export const PayButton = observer(({ order }: PayButtonProps) => {
  const pathname = usePathname();
  const price = order.price;
  const showPayButton =
    order.order_status === 'in_work' && order.payment_status === 'not_paid';
  const handlePay = async () => {
    const { price, email, id } = order || {};
    if (price && email && id) {
      const data: PaymentDTOType = {
        price: price.toString(),
        currency: 'RUB',
        email,
        orderId: id,
        date: Date.now(),
      };
      const pObject = await createPayment(data);

      if ('type' in pObject) {
        console.log('Ошибка создания платежа:', pObject);
        return;
      }
      if (!window.YooMoneyCheckoutWidget) {
        console.error('YooMoney widget script not loaded');
        return;
      }
      const payment = pObject as PaymentType;
      const checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token: payment.id,
        return_url: `${window.location.origin}${pathname}`,
        customization: {
          modal: true,
        },
        error_callback: (e: unknown) => {
          console.log(e);
        },
      });
      checkout.render().then(console.log);
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
