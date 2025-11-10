'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import { deleteSubmitedOrderById } from './utils';
import s from './style.module.scss';

export const DeleteBtn = observer(() => {
  const id = crmPreviewModalState.id;
  const type = crmPreviewModalState.orderType;
  const [wantsToDelete, setWantsToDelete] = useState(false);

  const handleWantsToDelete = () => {
    if (id && type) {
      setWantsToDelete((v) => !v);
    }
  };
  const handleCancelDelete = () => {
    setWantsToDelete(() => false);
  };
  const handleDeleteEntity = async () => {
    if (id && type) {
      crmPreviewModalState.pending = true;
      await deleteSubmitedOrderById({ id, type });
      setWantsToDelete((v) => !v);
      crmPreviewModalState.pending = false;
      crmPreviewModalState.modalOpen = false;
    }
  };
  return (
    <div className={s.container}>
      {wantsToDelete ? (
        <>
          <button
            onClick={handleDeleteEntity}
            className={cn(s.btn, s.btnDelete)}
          >
            Точно удалить
          </button>
          <button
            onClick={handleCancelDelete}
            className={cn(s.btn, s.btnCancel)}
          >
            Хотя, не стоит удалять
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleWantsToDelete}
            className={cn(s.btn, s.btnDelete)}
          >
            Удалить
          </button>
        </>
      )}
    </div>
  );
});
