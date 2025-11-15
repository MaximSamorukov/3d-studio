'use client';
import React from 'react';
import s from './PriceList.module.scss';

const services = [
  {
    name: '3D печать пластиком',
    price: '500₽/деталь + стоимость пластика по весу',
  },
  {
    name: 'Моделирование',
    price: '1000₽/изделие',
  },
  {
    name: 'Постобработка',
    price: '1000₽/изделие',
  },
];

const plastics = ['PLA', 'PETG', 'ABS', 'TPU', 'PA', 'HIPS', 'NYLON', 'ASA'];

export default function PriceList() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Прайс-лист услуг</h1>

      <div className={s.section}>
        <h2 className={s.sectionTitle}>Услуги</h2>
        <div className={s.cards}>
          {services.map((service) => (
            <div key={service.name} className={s.card}>
              <div className={s.cardName}>{service.name}</div>
              <div className={s.cardPrice}>{service.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.section}>
        <h2 className={s.sectionTitle}>Доступные пластики</h2>
        <p className={s.plasticList}>{plastics.join(', ')}</p>
      </div>
    </div>
  );
}
