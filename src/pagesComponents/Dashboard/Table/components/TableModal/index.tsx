'use client';
import React, { useState } from 'react';
import { ModalComponent } from '@/shared/common/Modal';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import { observer } from 'mobx-react-lite';
import { ShowDataField } from './components/ShowDataField';
import s from './style.module.scss';
import { EditDataField } from './components/EditDataField';

export const TableModal = observer(() => {
  const open = crmPreviewModalState.modalOpen;
  const handleClose = () => {
    crmPreviewModalState.modalOpen = false;
  };
  return (
    <ModalComponent
      open={open}
      withControl={false}
      onClose={handleClose}
      style={{ width: 800 }}
    >
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
            label="Телефон"
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
          <EditDataField
            label="Статус заказа"
            type="print_order"
            fieldType="orderStatus"
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
          <EditDataField
            label="Статус заказа"
            type="consultation"
            fieldType="orderStatus"
          />
        </div>
      )}
    </ModalComponent>
  );
});
