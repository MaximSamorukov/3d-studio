import React from 'react';
import s from './style.module.scss';
import { ContactFormType } from '../../OrderConsultationForm/types';
import Image from 'next/image';

type ConsultationDrawerCardProps = {
  consultation: ContactFormType;
};
export function ConsultationDrawerCard({
  consultation,
}: ConsultationDrawerCardProps) {
  return (
    <div className={s.cardContainer}>
      <div className={s.cardHeader}>
        <span>Заявка на консультацию: {consultation.id}</span>
        <button className={s.cardHeaderRemoveBtn}>
          <Image src="/trash.svg" width={32} height={32} alt="trash" />
        </button>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Контакт:</div>
        <div className={s.cardItemValue}>{consultation.contact}</div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Дата создания:</div>
        <div className={s.cardItemValue}>
          <>
            {consultation.created_at
              ? new Date(consultation.created_at).toLocaleDateString()
              : 'нет данных'}
          </>
        </div>
      </div>
      <div className={s.cardItemConatainer}>
        <div className={s.cardItemLabel}>Статус:</div>
        <div className={s.cardItemValue}>В работе</div>
      </div>
    </div>
  );
}
