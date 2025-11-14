import 'server-only';
import { getServicesDataSource } from '@/shared/common/db/services';
import {
  MODELLING_PRICE,
  POST_PROCESSING_PRICE,
  PRINT_PRICE,
  SERVICES,
} from './constants';
import { ServicesEntity } from '@/entities/services';
import { In } from 'typeorm';

export const getFinalPriceAsync = async (
  price: number,
  withModelling: boolean,
  withPostProcessing: boolean,
) => {
  const dbServices = await getServicesDataSource();
  const repository = dbServices.getRepository(ServicesEntity);
  const services = await repository.findBy({
    alias: In([SERVICES.PRINTING, SERVICES.MODELLING, SERVICES.POSTPROCESSING]),
  });
  const prPrice = services.find((i) => i.alias === SERVICES.PRINTING)?.price;
  let prePrice = (prPrice || PRINT_PRICE) + price;
  if (withModelling) {
    const modPrice = services.find(
      (i) => i.alias === SERVICES.MODELLING,
    )?.price;
    prePrice += modPrice || MODELLING_PRICE;
  }
  if (withPostProcessing) {
    const postPrice = services.find(
      (i) => i.alias === SERVICES.POSTPROCESSING,
    )?.price;
    prePrice += postPrice || POST_PROCESSING_PRICE;
  }
  return Math.abs(Math.round(prePrice / 100) * 100);
};
