import React from 'react';
import { observer } from 'mobx-react-lite';
import { ContactFormType } from '../../OrderConsultationForm/types';
import Image from 'next/image';
import { userState } from '@/shared/state/user/state';
import s from './style.module.scss';

type ConsultationDrawerCardProps = {
  consultation: ContactFormType;
};

export const ConsultationDrawerCard = observer(
  ({ consultation }: ConsultationDrawerCardProps) => {
    const handleRemoveConsultation = async (id: number) => {
      await userState.removeConsultationById(id);
    };

    return (
      <div className={s.cardContainer}>
        <div className={s.cardHeader}>
          <span>Заявка на консультацию: {consultation.id}</span>
          <button
            onClick={() => handleRemoveConsultation(consultation.id)}
            className={s.cardHeaderRemoveBtn}
          >
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
  },
);
