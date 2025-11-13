import { expect, test } from 'vitest';
import { getFinalPriceAsync } from './utils';

test('test getFinalPrice function', async () => {
  await expect(getFinalPriceAsync(100, true, true)).resolves.toBeTypeOf(
    'number',
  );
  await expect(getFinalPriceAsync(100, false, false)).resolves.toBeTypeOf(
    'number',
  );
  await expect(getFinalPriceAsync(1, true, true)).resolves.toBeTypeOf('number');
  await expect(getFinalPriceAsync(0, true, true)).resolves.toBeTypeOf('number');
  await expect(getFinalPriceAsync(-100, true, true)).resolves.toBeTypeOf(
    'number',
  );
  await expect(() =>
    getFinalPriceAsync(100, false, false),
  ).resolves.not.toThrow();
});
