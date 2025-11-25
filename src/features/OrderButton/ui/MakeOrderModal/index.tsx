'use client';
import React from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { useWindowWidth } from '@/shared/hooks';

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
  const windowWidth = useWindowWidth();
  const width = windowWidth >= 820 ? 800 : '90%';
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={{ height: 645, width, border: 'none' }}
    >
      {children}
    </ModalComponent>
  );
};
