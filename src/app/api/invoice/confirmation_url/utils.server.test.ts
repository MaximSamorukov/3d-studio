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

describe('addTwoWeeksToUnix edge cases', () => {
  test('корректно работает при переходе на следующий месяц', () => {
    const start = Date.UTC(2024, 0, 25);
    const expected = Date.UTC(2024, 1, 8);

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
  });

  test('корректно работает на високосный год (2024)', () => {
    const start = Date.UTC(2024, 1, 20);
    const expected = Date.UTC(2024, 2, 5);

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
  });

  test('корректно работает на обычный год (2023)', () => {
    const start = Date.UTC(2023, 1, 20);
    const expected = Date.UTC(2023, 2, 6);

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
  });

  test('работает корректно на переходе года', () => {
    const start = Date.UTC(1999, 11, 25);
    const expected = Date.UTC(2000, 0, 8);

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
  });

  test('корректно работает при timestamp = 0', () => {
    const start = 0;
    const expected = 14 * 24 * 60 * 60 * 1000;

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
  });

  test('работает с произвольными временными значениями', () => {
    const start = Date.UTC(2025, 4, 15, 13, 45, 30);
    const expected = Date.UTC(2025, 4, 29, 13, 45, 30);

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
  });

  test('работает при большом timestamp (дата далеко в будущем)', () => {
    const start = Date.UTC(2099, 10, 1);
    const expected = Date.UTC(2099, 10, 15);

    expect(addTwoWeeksToUnix(start)).toBe(new Date(expected).toISOString());
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
