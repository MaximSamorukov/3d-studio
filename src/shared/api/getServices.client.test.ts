import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getServices } from './index';

describe('getServices', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('должен вернуть данные при успешном запросе', async () => {
    const mockResponse = { data: 'data' };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response),
    );
    const result = await getServices();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('/api/crm/services');
  });

  it('должен выбросить ошибку, если запрос не успешен 1', async () => {
    const mockError = { error: 'Error' };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => mockError,
      } as Response),
    );
    await expect(getServices()).rejects.toEqual(mockError);
  });
  it('должен выбросить ошибку, если запрос не успешен 2', async () => {
    const mockError = { error: 'Error' };
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(mockError));
    await expect(getServices()).rejects.toEqual(mockError);
  });
});
