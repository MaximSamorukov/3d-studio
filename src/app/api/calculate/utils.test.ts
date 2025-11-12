import { expect, test } from 'vitest';
import { getFinalPrice } from './utils';

test('test getFinalPrice function', () => {
  expect(typeof getFinalPrice(100, true, true)).toBe('number');
  expect(typeof getFinalPrice(100, false, false)).toBe('number');
  expect(typeof getFinalPrice(1, true, true)).toBe('number');
  expect(typeof getFinalPrice(0, true, true)).toBe('number');
  expect(typeof getFinalPrice(-100, true, true)).toBe('number');
  expect(() => getFinalPrice(100, false, false)).not.toThrow();
});
