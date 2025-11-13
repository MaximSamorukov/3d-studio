'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmPreviewModalState } from '@/shared/crmPreviewModal/state';
import Image from 'next/image';
import { getUrl, updateSubmitedOrderById } from './utils';
import s from './style.module.scss';
import { calculatePrintPrice } from '@/services';

export const OrderPriceField = observer(() => {
  const id = crmPreviewModalState.id;
  const price = crmPreviewModalState.price || 0;
  const type = crmPreviewModalState.orderType;
  const [currentPriceValue, setCurrentPriceValue] = useState<number | null>(
    price,
  );
  const currentStateHasBeenChanged = price !== currentPriceValue;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCurrentPriceValue(Number(value));
    }
  };
  const handleCalculateOrderPrice = async () => {
    if (crmPreviewModalState.filePath) {
      const formData = new FormData();
      formData.append(
        'withModeling',
        crmPreviewModalState.with_modelling ? 'true' : 'false',
      );
      formData.append(
        'withPostProcessing',
        crmPreviewModalState.with_postprocessing ? 'true' : 'false',
      );
      formData.append(
        'plasticType',
        crmPreviewModalState.plasticType as string,
      );
      const blob = await getUrl(crmPreviewModalState.filePath as string);
      if (blob) {
        formData.append('fileUpload', blob as Blob);
        calculatePrintPrice(formData)
          .then((i) => {
            setCurrentPriceValue(i.price);
          })
          .catch(() => {
            setCurrentPriceValue(0);
          });
      }
    }
  };
  const handleSavePrice = async () => {
    if (id && type && currentPriceValue) {
      try {
        await updateSubmitedOrderById({
          id,
          type,
          fields: {
            price: currentPriceValue,
            with_modelling: crmPreviewModalState.with_modelling || false,
            with_postprocessing:
              crmPreviewModalState.with_postprocessing || false,
          },
        });
        crmPreviewModalState.price = currentPriceValue;
      } catch (_) {
        console.error('Ошибка сохранения изменений');
      }
    }
  };
  return (
    <div className={s.container}>
      <input
        className={s.containerInput}
        onChange={onChange}
        type="text"
        value={currentPriceValue || ''}
      />
      <button
        disabled={!currentStateHasBeenChanged}
        onClick={handleCalculateOrderPrice}
        className={cn(s.btn, s.btnCalculate)}
      >
        {currentStateHasBeenChanged ? (
          <Image
            src={'/calculate_price_crm_green.svg'}
            width={20}
            height={20}
            alt="calculate_price_crm"
          />
        ) : (
          <Image
            src={'/calculate_price_crm_white.svg'}
            width={20}
            height={20}
            alt="calculate_price_crm"
          />
        )}
      </button>
      <button
        disabled={!currentStateHasBeenChanged}
        onClick={handleSavePrice}
        className={cn(s.btn, s.btnApprove)}
      >
        {currentStateHasBeenChanged ? (
          <Image
            src={'/approve_price_crm_green.svg'}
            width={20}
            height={20}
            alt="approve_price_crm"
          />
        ) : (
          <Image
            src={'/approve_price_crm_white.svg'}
            width={20}
            height={20}
            alt="approve_price_crm"
          />
        )}
      </button>
    </div>
  );
});
