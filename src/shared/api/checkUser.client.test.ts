import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { checkUser } from './index';

describe('checkUser', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('должен вернуть данные при успешном запросе 1', async () => {
    const mockResponse = { data: 'data' };
    const data = { login: 'test@mail.com', password: 'Password1' };
    const requestUrl = process.env.SERVER_URL + '/api/check-user';
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => mockResponse,
      } as Response),
    );
    const result = await checkUser(data);
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      requestUrl,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(data),
      }),
    );
  });

  it('должен вернуть данные при успешном запросе 2', async () => {
    const mockResponse = { data: 'data' };
    const data = { login: 'test@mail.com', password: 'Password1' };
    const requestUrl = process.env.SERVER_URL + '/api/check-user';
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        status: 201,
        json: async () => mockResponse,
      } as Response),
    );
    const result = await checkUser(data);
    expect(result).toEqual(false);
    expect(fetch).toHaveBeenCalledWith(
      requestUrl,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(data),
      }),
    );
  });

  it('должен выбросить ошибку, если запрос не успешен', async () => {
    const data = { login: 'test@mail.com', password: 'Password1' };
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(false));
    const result = await checkUser(data);
    await expect(result).toEqual(false);
  });
});
