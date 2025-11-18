import { createDescription } from './utils';
import { expect, test, describe } from 'vitest';

describe('createDescriptionInPayments', () => {
  test('createDescription правильно правильно отрабатывает 1', () => {
    const email = 'test@test.ru';
    const price = '1000';
    const orderId = 2;
    const description = createDescription(email, price, orderId);
    expect(description).toBe('test@test.ru-1000-2');
  });
  test('createDescription правильно правильно отрабатывает 2', () => {
    const email = 'test@test.ru';
    const price = '';
    const orderId = 2;
    const description = createDescription(email, price, orderId);
    expect(description).toBe('test@test.ru--2');
  });
  test('createDescription правильно правильно отрабатывает 3', () => {
    const email = '';
    const price = '';
    const orderId = 0;
    const description = createDescription(email, price, orderId);
    expect(description).toBe('--0');
  });
});
