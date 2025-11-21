'use client';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { crmPreviewModalState } from '@/shared/state/crmPreviewModal/state';
import Image from 'next/image';
import { getFile, updateSubmitedOrderById } from './utils';
import { calculatePrintPrice } from '@/services';
import { getVolume } from '@/shared/utils/computeVolume';

import s from './style.module.scss';

export const OrderPriceField = observer(() => {
  const [priceCalculating, setPriceCalculating] = useState(false);
  const id = crmPreviewModalState.id;
  const price = crmPreviewModalState.price || 0;
  const withModel = crmPreviewModalState.with_modelling;
  const withPostProc = crmPreviewModalState.with_postprocessing;
  const originalPrice = crmPreviewModalState.originalPrice;
  const originalWithModelling = crmPreviewModalState.originalWithModelling;
  const originalWithPostProcessing =
    crmPreviewModalState.originalWithPostProcessing;

  const type = crmPreviewModalState.orderType;
  const [currentStateHasBeenChanged, setCurrentStateHasBeenChanged] =
    useState(false);

  useEffect(() => {
    const isChanged = originalPrice !== price;
    if (isChanged) {
      setCurrentStateHasBeenChanged(true);
    } else {
      setCurrentStateHasBeenChanged(false);
    }
  }, [originalPrice, price]);

  useEffect(() => {
    if (
      withModel !== originalWithModelling ||
      withPostProc !== originalWithPostProcessing
    ) {
      setCurrentStateHasBeenChanged(true);
    } else {
      setCurrentStateHasBeenChanged(false);
    }
  }, [
    withModel,
    originalWithModelling,
    withPostProc,
    originalWithPostProcessing,
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      crmPreviewModalState.price = Number(value);
    }
  };
  const handleRefresh = () => {
    crmPreviewModalState.refresh();
  };
  const handleCalculateOrderPrice = async () => {
    if (crmPreviewModalState.filePath) {
      setPriceCalculating(true);
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
      const file = await getFile(crmPreviewModalState.filePath as string);
      if (file) {
        const volume = await getVolume(file);
        formData.append('volume', volume.toString());
        calculatePrintPrice(formData)
          .then((i) => {
            setPriceCalculating(false);
            crmPreviewModalState.price = i.price;
          })
          .catch(() => {
            setPriceCalculating(false);
            console.log('Ошибка расчета стоимости изделия');
          });
      } else {
        setPriceCalculating(false);
      }
    }
  };
  const handleSavePrice = async () => {
    if (id && type && price) {
      try {
        await updateSubmitedOrderById({
          id,
          type,
          fields: {
            invoice_url: null,
            invoice_id: null,
            price,
            with_modelling: crmPreviewModalState.with_modelling || false,
            with_postprocessing:
              crmPreviewModalState.with_postprocessing || false,
          },
        });
        await crmPreviewModalState.refresh();
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
        value={price || ''}
      />
      <button
        disabled={priceCalculating}
        onClick={handleCalculateOrderPrice}
        className={cn(s.btn, s.btnCalculate)}
      >
        {priceCalculating ? (
          <Image
            src={'/calculate_price_crm_lilac.svg'}
            width={20}
            height={20}
            alt="calculate_price_crm"
          />
        ) : (
          <Image
            src={'/calculate_price_crm_green.svg'}
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
      <button onClick={handleRefresh} className={cn(s.btn, s.btnRefresh)}>
        <Image
          src={'/refresh_green.svg'}
          width={20}
          height={20}
          alt="refresh_price_crm"
        />
      </button>
    </div>
  );
});
