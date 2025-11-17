import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getMaterials } from './index';

describe('getMaterials', () => {
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
    const result = await getMaterials();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('/api/crm/materials');
  });

  it('должен выбросить ошибку, если запрос не успешен_1', async () => {
    const mockError = { error: 'Error' };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => mockError,
      } as Response),
    );
    await expect(getMaterials()).rejects.toEqual(mockError);
  });

  it('должен выбросить ошибку, если запрос не успешен_2', async () => {
    const mockError = { error: 'Error' };
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(mockError));
    await expect(getMaterials()).rejects.toEqual(mockError);
  });
});
