'use client';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { OrderConsultationModal } from './ui/OrderConsultationModal';
import { useSearchParams, useRouter } from 'next/navigation';

import s from './style.module.scss';

export const OrderConsultationButton = () => {
  const params = useSearchParams();
  const router = useRouter();
  const isConsultationRequest = params?.get('consultation');

  const [openConsultModal, setOpenConsultModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenConsultModal(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setOpenConsultModal(true);
  }, []);
  const clearParams = () => {
    router.replace(window.location.pathname);
  };
  useEffect(() => {
    if (isConsultationRequest) {
      clearParams();
      handleOpenModal();
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [isConsultationRequest]);
  return (
    <>
      <button
        onClick={handleOpenModal}
        className={cn(s.button, s.buttonOrderModelingContainer)}
      >
        Заказать консультацию
      </button>
      <OrderConsultationModal
        open={openConsultModal}
        onClose={handleCloseModal}
      />
    </>
  );
};
