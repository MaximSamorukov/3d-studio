'use client';
import { usePathname } from 'next/navigation';
import s from './style.module.scss';

export const MakeOrderButton = () => {
  const handleScroll = () => {
    const el = document.getElementById('order_form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={s.makeOrderBtn}>
      <button onClick={handleScroll} className={s.makeOrderBtnContainer}>
        <div className={s.makeOrderBtnLabel}>Заказать 3D-печать</div>
      </button>
    </div>
  );
};
