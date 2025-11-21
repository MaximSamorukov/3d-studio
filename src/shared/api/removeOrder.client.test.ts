import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { removeOrder } from './index';

describe('removeOrder', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('должен вернуть данные при успешном запросе', async () => {
    const data = { id: 1 };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));

    const result = await removeOrder(data.id);
    expect(result).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      '/api/orders',
      expect.objectContaining({
        method: 'DELETE',
        body: JSON.stringify(data),
      }),
    );
  });

  it('должен выбросить ошибку, если запрос не успешен', async () => {
    const data = { id: 1 };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue({
        ok: false,
      }),
    );
    await expect(removeOrder(data.id)).resolves.toEqual(false);
  });
});
