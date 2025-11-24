'use client';
import React from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { OrderConsultationForm } from './ui/OrderConsultationForm';
import { useWindowWidth } from '@/shared/hooks';

type ModalComponentProps = {
  open: boolean;
  onClose?: () => void;
};

export const OrderConsultationModal: React.FC<ModalComponentProps> = ({
  open,
  onClose = () => {},
}) => {
  const windowWidth = useWindowWidth();
  const style =
    windowWidth >= 420
      ? { height: 190 }
      : { height: 'fitContent', width: '90%' };
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={style}
    >
      <OrderConsultationForm />
    </ModalComponent>
  );
};
