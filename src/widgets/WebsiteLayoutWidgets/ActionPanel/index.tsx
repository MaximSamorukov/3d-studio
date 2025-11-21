'use client';
import s from './style.module.scss';
import { OrderConsultationButton } from '../../../features/OrderConsultationButton';
import { OrderButton } from '@/features/OrderButton';

export default function ActionPanel() {
  return (
    <div className={s.container}>
      <OrderButton />
      <OrderConsultationButton />
    </div>
  );
}
