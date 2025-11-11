import {
  MODELLING_PRICE,
  POST_PROCESSING_PRICE,
  PRINT_PRICE,
} from './constants';

export const getFinalPrice = (
  price: number,
  withModelling: boolean,
  withPostProcessing: boolean,
) => {
  let prePrice = PRINT_PRICE + price;
  if (withModelling) {
    prePrice += MODELLING_PRICE;
  }
  if (withPostProcessing) {
    prePrice += POST_PROCESSING_PRICE;
  }
  return Math.round(prePrice / 100) * 100;
};
