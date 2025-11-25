'use client';
import React, { useMemo } from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { crmPreviewModalState } from '@/shared/state/crmPreviewModal/state';
import { observer } from 'mobx-react-lite';
import { ShowDataField } from './ui/ShowDataField';
import { EditDataField } from './ui/EditDataField';
import { DeleteBtn } from './ui/DeleteBtn';
import s from './style.module.scss';
import { Preview3DModel } from './ui/Preview3DModel';
import { useWindowWidth } from '@/shared/hooks';

export const TableModal = observer(() => {
  const width = useWindowWidth();
  const open = crmPreviewModalState.modalOpen;
  const loading = crmPreviewModalState.deletePending;
  const handleClose = () => {
    crmPreviewModalState.modalOpen = false;
    crmPreviewModalState.resetAllFields();
  };
  const isPrintOrder = crmPreviewModalState.orderType === 'print_order';

  const modalWidth = isPrintOrder ? 880 : 440;

  const style = useMemo(() => {
    return {
      width: width >= modalWidth ? modalWidth : width - 20,
      height: 'fitContent',
    };
  }, [width, modalWidth]);
  return (
    <ModalComponent
      open={open}
      loading={loading}
      withControl={false}
      onClose={handleClose}
      style={style}
    >
      {crmPreviewModalState.orderType === 'print_order' ? (
        <div className={s.metaContainer}>
          <div className={s.container}>
            <ShowDataField
              label="Тип заказа - id"
              value={`${crmPreviewModalState.orderType} - ${crmPreviewModalState.id}`}
              type="print_order"
            />
            <ShowDataField
              label="Дата создания"
              value={crmPreviewModalState.createdAt!}
              type="print_order"
            />
            <ShowDataField
              label="Файл"
              value={crmPreviewModalState.filePath || ''}
              type="print_order"
              fieldType="file_with_download"
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
            <EditDataField
              label="Доп. работы"
              type="print_order"
              fieldType="additionals"
            />
            <EditDataField
              label="Статус заказа"
              type="print_order"
              fieldType="orderStatus"
            />
            <ShowDataField
              label="Статус оплаты"
              value={crmPreviewModalState.paymentStatus!}
              type="print_order"
              fieldType="paymentStatus"
            />
            <EditDataField
              label="Стоимость заказа"
              type="print_order"
              fieldType="orderPrice"
            />
          </div>
          <div className={s.container}>
            <Preview3DModel url={crmPreviewModalState.filePath!} />
          </div>
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
      <div className={s.footer}>
        <DeleteBtn />
      </div>
    </ModalComponent>
  );
});
