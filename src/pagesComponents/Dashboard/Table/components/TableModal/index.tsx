'use client';
import React, { useState } from 'react';
import { ModalComponent } from '@/shared/common/Modal';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import { observer } from 'mobx-react-lite';
import { ShowDataField } from './components/ShowDataField';
import s from './style.module.scss';

export const TableModal = observer(() => {
  const open = crmPreviewModalState.modalOpen;
  const handleClose = () => {
    crmPreviewModalState.modalOpen = false;
  };
  return (
    <ModalComponent open={open} withControl={false} onClose={handleClose}>
      {crmPreviewModalState.orderType === 'print_order' ? (
        <div className={s.container}>
          <ShowDataField
            label="Тип заказа"
            value={crmPreviewModalState.orderType}
            type="print_order"
          />
          <ShowDataField
            label="Дата создания"
            value={crmPreviewModalState.createdAt!}
            type="print_order"
          />
          <ShowDataField
            label="Email"
            value={crmPreviewModalState.email!}
            type="print_order"
          />
          <ShowDataField
            label="Контакт"
            value={crmPreviewModalState.phone!}
            type="print_order"
          />
          <ShowDataField
            label="Тип пластика"
            value={crmPreviewModalState.plasticType!}
            type="print_order"
          />
          <ShowDataField
            label="Статус оплаты"
            value={crmPreviewModalState.paymentStatus!}
            type="print_order"
          />
          <ShowDataField
            label="Статус заказа"
            value={crmPreviewModalState.orderStatus!}
            type="print_order"
          />
        </div>
      ) : (
        <div className={s.container}>
          <ShowDataField
            label="Тип заказа"
            value={crmPreviewModalState.orderType!}
            type="consultation"
          />
          <ShowDataField
            label="Дата создания"
            value={crmPreviewModalState.createdAt!}
            type="consultation"
          />
          <ShowDataField
            label="Email"
            value={crmPreviewModalState.email!}
            type="consultation"
          />
          <ShowDataField
            label="Контакт"
            value={crmPreviewModalState.phone!}
            type="consultation"
          />
          <ShowDataField
            label="Статус заказа"
            value={crmPreviewModalState.orderStatus!}
            type="consultation"
          />
        </div>
      )}
    </ModalComponent>
  );
});
