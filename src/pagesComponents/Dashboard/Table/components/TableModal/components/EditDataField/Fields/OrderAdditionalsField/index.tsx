'use client';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import s from './style.module.scss';

export const OrderAdditionalsField = observer(() => {
  const withModelling = crmPreviewModalState.with_modelling;
  const withPostProcessing = crmPreviewModalState.with_postprocessing;
  const handleWithModelling = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    crmPreviewModalState.with_modelling = value;
  };
  const handleWithPostprocessing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    crmPreviewModalState.with_postprocessing = value;
  };
  return (
    <div className={s.container}>
      <div className={s.containerLabel}>модел-ние:</div>
      <input
        className={s.containerInput}
        type="checkbox"
        checked={withModelling}
        onChange={handleWithModelling}
      />
      <div className={s.containerLabel}>пост-ка:</div>
      <input
        className={s.containerInput}
        type="checkbox"
        checked={withPostProcessing}
        onChange={handleWithPostprocessing}
      />
    </div>
  );
});
