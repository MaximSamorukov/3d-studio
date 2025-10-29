'use client';
import cn from 'classnames';
import s from './style.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { MakeOrderModal } from '../MakeOrderModal';
import { OrderForm } from '@/pages/3dPrinting/OrderForm';

export function OrderButton() {
  const [openModal, setOpenModal] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const printOrder = params?.get('print_order');
  const path = usePathname();
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);
  const clearParams = () => {
    router.replace(window.location.pathname);
  };
  const handleScroll = () => {
    if (path?.includes('3d_printing')) {
      const el = document.getElementById('order_form');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenModal();
    }
  };
  useEffect(() => {
    if (printOrder) {
      handleOpenModal();
      clearParams();
    }
  }, [printOrder]);
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
