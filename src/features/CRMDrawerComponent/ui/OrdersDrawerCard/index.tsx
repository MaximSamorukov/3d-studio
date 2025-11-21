import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './style.module.scss';
import { userState } from '@/shared/state/user/state';
import { observer } from 'mobx-react-lite';
import { PrintOrderType } from '@/shared/types/types';
import { PayButton } from '../PayButton';
import OrderStatusLabel from '../OrderStatusLabel';
import PaymentStatusLabel from '../PaymentStatusLabel';

type OrderDrawerCardProps = {
  order: PrintOrderType;
};
export const OrderDrawerCard = observer(({ order }: OrderDrawerCardProps) => {
  const handleRemoveOrder = async (id: number) => {
    await userState.removeOrderById(id);
  };

  return (
    <div className={s.cardContainer}>
      <div className={s.cardHeader}>
        <span>Заказ: {order.id}</span>
        <button
          onClick={() => handleRemoveOrder(order.id!)}
          className={s.cardHeaderRemoveBtn}
        >
          <Image src="/trash.svg" width={32} height={32} alt="trash" />
        </button>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Контакт:</div>
        <div className={s.cardItemValue}>{order.email}</div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Дата создания:</div>
        <div className={s.cardItemValue}>
          <>
            {order.created_at
              ? new Date(order.created_at).toLocaleDateString()
              : 'нет данных'}
          </>
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Тип пластика:</div>
        <div className={s.cardItemValue}>
          {order.plastic_type || 'нет данных'}
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Цвет изделия:</div>
        <div
          className={s.cardItemValue}
          style={
            order.color ? { backgroundColor: order.color, color: 'black' } : {}
          }
        >
          {order.color || 'нет данных'}
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Постобработка:</div>
        <div className={s.cardItemValue}>
          {order.with_postprocessing ? 'Да' : 'Нет'}
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Файл:</div>
        <div className={s.cardItemValue}>
          {order.file_path ? (
            <Link
              target="_blank"
              download
              href={order.file_path}
              referrerPolicy="no-referrer"
            >
              ссылка на файл
            </Link>
          ) : (
            'нет данных'
          )}
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Комментарии:</div>
        <div className={s.cardItemValue}>{order.comment || 'нет данных'}</div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Статус:</div>
        <div className={s.cardItemValue}>
          <OrderStatusLabel status={order.order_status} />
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Стоимость заказа:</div>
        <div className={s.cardItemValue}>
          {order.price ? <PayButton order={order} /> : 'не определена'}
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Статус оплаты:</div>
        <div className={s.cardItemValue}>
          <PaymentStatusLabel status={order.payment_status} />
        </div>
      </div>
    </div>
  );
});
