'use client';
import React from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { useWindowHeight, useWindowWidth } from '@/shared/hooks';

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
  const windowHeight = useWindowHeight();
  const width = windowWidth >= 820 ? 800 : '85%';
  const height = windowHeight >= 700 ? 645 : '90%';

  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={{ height, width, border: 'none' }}
    >
      {children}
    </ModalComponent>
  );
};
