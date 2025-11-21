'use client';
import React from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { OrderConsultationForm } from './ui/OrderConsultationForm';

type ModalComponentProps = {
  open: boolean;
  onClose?: () => void;
};

export const OrderConsultationModal: React.FC<ModalComponentProps> = ({
  open,
  onClose = () => {},
}) => {
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={{ height: 190 }}
    >
      <OrderConsultationForm />
    </ModalComponent>
  );
};
