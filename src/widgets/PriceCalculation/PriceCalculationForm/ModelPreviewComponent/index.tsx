'use client';
import React from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { observer } from 'mobx-react-lite';
import { formCalculationState } from '../model/formCalculationStore';
import { Preview3DModel } from './Preview3DModel';

export const ModelPreviewComponent = observer(() => {
  const handleClose = () => {
    formCalculationState.closePreviewModal();
  };
  const isOpen = formCalculationState.previewModalIsOpen;
  return (
    <ModalComponent
      open={isOpen}
      loading={false}
      withControl={false}
      onClose={handleClose}
      style={{ width: 800, height: 800 }}
    >
      <Preview3DModel
        fileName={formCalculationState.fileName}
        url={formCalculationState.modelUrl!}
      />
    </ModalComponent>
  );
});
