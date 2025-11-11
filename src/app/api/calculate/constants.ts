export const materials = {
  PLA: { density: 1.25, price: 1500 },
  PETG: { density: 1.27, price: 1500 },
  ABS: { density: 1.05, price: 1500 },
  TPU: { density: 1.18, price: 3000 },
  PA: { density: 1.13, price: 3000 }, // примерная плотность для полиамида г/см**3
  HIPS: { density: 1.04, price: 3000 }, // цена в руб / кг
  NYLON: { density: 1.1, price: 3000 },
  ASA: { density: 1.07, price: 3000 },
};

export const APPROXIMATE_PRINT_SPEED = 240; // мм**3 / мин
export const MODEL_DENSITY = 0.5; // заполнение модели 50 %

export const PRINT_PRICE = 500;
export const POST_PROCESSING_PRICE = 1000;
export const MODELLING_PRICE = 1000;
