import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { adminRegister } from './index';

describe('adminRegister', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('должен вернуть данные при успешном запросе', async () => {
    const mockResponse = { status: 201 };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response),
    );
    const data = { login: 'test@mail.com', password: 'Password1' };
    const result = await adminRegister(data);
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      '/api/admin_register',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }),
    );
  });

  it('должен выбросить ошибку, если запрос не успешен', async () => {
    const mockError = { error: 'Логин и пароль обязательны.' };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => mockError,
      } as Response),
    );
    const data = { login: 'test@mail.com', password: 'Password1' };
    await expect(adminRegister(data)).rejects.toEqual(mockError);
  });
});
