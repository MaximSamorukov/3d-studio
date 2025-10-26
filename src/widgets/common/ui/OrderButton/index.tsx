'use client';
import cn from 'classnames';
import s from './style.module.scss';
import { useCallback, useState } from 'react';
import { OrderConsultationModal } from '../OrderConsultationModal';
import { usePathname } from 'next/navigation';
import { MakeOrderModal } from '../MakeOrderModal';
import { OrderForm } from '@/pages/3dPrinting/OrderForm';

export function OrderButton() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);
  const path = usePathname();

  const handleScroll = () => {
    if (path?.includes('3d_printing')) {
      const el = document.getElementById('order_form');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenModal();
    }
  };
  return (
    <>
      <button
        onClick={handleScroll}
        className={cn(s.button, s.buttonOrderPrintingContainer)}
      >
        Заказать 3D-печать
      </button>
      <MakeOrderModal open={openModal} onClose={handleCloseModal}>
        <OrderForm />
      </MakeOrderModal>
    </>
  );
}
