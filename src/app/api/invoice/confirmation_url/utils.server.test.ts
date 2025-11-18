import { addTwoWeeksToUnix, createDescription } from './utils';
import { expect, test, describe } from 'vitest';

describe('addTwoWeeksToUnix', () => {
  test('addTwoWeeksToUnix правильно прибавляет две недели 1', () => {
    const date1 = Date.UTC(2000, 0, 0, 0, 0, 0);
    const date2 = Date.UTC(2000, 0, 14, 0, 0, 0);
    const plusTwoWeeksInUTCISO = addTwoWeeksToUnix(date1);
    expect(plusTwoWeeksInUTCISO).toBe(new Date(date2).toISOString());
  });
});

describe('createDescription', () => {
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
