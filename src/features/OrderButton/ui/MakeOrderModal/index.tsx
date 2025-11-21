'use client';
import React from 'react';
import { ModalComponent } from '@/shared/common/Modal';

type ModalComponentProps = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const MakeOrderModal: React.FC<ModalComponentProps> = ({
  open,
  onClose = () => {},
  children,
}) => {
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={{ height: 645, width: 800, border: 'none' }}
    >
      {children}
    </ModalComponent>
  );
};
