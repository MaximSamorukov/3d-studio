'use client';
import s from './style.module.scss';
import { OrderConsultationButton } from '../OrderConsultationButton';
import { OrderButton } from '../OrderButton';

export default function ActionPanel() {
  return (
    <div className={s.container}>
      <OrderButton />
      <OrderConsultationButton />
    </div>
  );
}
