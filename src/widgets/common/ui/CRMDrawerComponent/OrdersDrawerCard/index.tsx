import React from 'react';
import s from './style.module.scss';
import { OrderFormFields } from '@/pages/3dPrinting/OrderForm';
import Link from 'next/link';
import { toJS } from 'mobx';

type OrderDrawerCardProps = {
  order: Omit<OrderFormFields, 'file' | 'plasticType'> & {
    file_path?: string;
    plastic_type?: string;
  };
};
export function OrderDrawerCard({ order }: OrderDrawerCardProps) {
  return (
    <div className={s.cardContainer}>
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
        <div className={s.cardItemValue}>{order.color || 'нет данных'}</div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Постобработка:</div>
        <div className={s.cardItemValue}>
          {order.withPostprocessing ? 'Да' : 'Нет'}
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
        <div className={s.cardItemValue}>В работе</div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Стоимость заказа:</div>
        <div className={s.cardItemValue}>2500 Р</div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Статус оплаты:</div>
        <div className={s.cardItemValue}>Оплачен</div>
      </div>
    </div>
  );
}
