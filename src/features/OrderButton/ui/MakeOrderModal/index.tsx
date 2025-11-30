'use client';
import React, { useMemo } from 'react';
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
  const styleConfig = useMemo(
    () => ({ height, width, border: 'none' }),
    [height, width],
  );
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={styleConfig}
    >
      {children}
    </ModalComponent>
  );
};
