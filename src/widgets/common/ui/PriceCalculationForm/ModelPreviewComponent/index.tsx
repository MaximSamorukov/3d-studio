'use client';
import React, { useState } from 'react';
import { ModalComponent } from '@/shared/common/Modal';
import { observer } from 'mobx-react-lite';
import { formCalculationState } from '../formCalculationStore';
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
      <Preview3DModel url={formCalculationState.modelUrl!} />
    </ModalComponent>
  );
});
