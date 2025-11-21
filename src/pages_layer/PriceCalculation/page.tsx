import React from 'react';
import { PriceCalculationForm } from '@/widgets/PriceCalculation';
import s from './style.module.scss';

export function PriceCalculationPage() {
  return (
    <div className={s.container}>
      <PriceCalculationForm />
    </div>
  );
}
