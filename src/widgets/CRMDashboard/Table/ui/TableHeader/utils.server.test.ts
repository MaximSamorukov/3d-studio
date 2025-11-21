import { expect, test, describe } from 'vitest';
import { hideNotvisible } from '../../model';

describe('test hideNotvisible', () => {
  test('должен возвращать true', () => {
    expect(hideNotvisible({ visible: true })).toBe(true);
  });
  test('должен возвращать false', () => {
    expect(hideNotvisible({ visible: false })).toBe(false);
  });
});
