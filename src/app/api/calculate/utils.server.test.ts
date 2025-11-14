import { expect, test, vi, describe, beforeEach, type Mock } from 'vitest';
import { getFinalPriceAsync } from './utils';
import { SERVICES } from './constants';
import { getServicesDataSource } from '@/shared/common/db/services';

vi.mock('server-only', () => ({}));
vi.mock('@/shared/common/db/services', () => ({
  getServicesDataSource: vi.fn(),
}));

// 🔹 Подготавливаем фейковый репозиторий
const mockFindBy = vi.fn();

beforeEach(() => {
  // Сбрасываем все моки перед каждым тестом
  vi.clearAllMocks();

  (getServicesDataSource as unknown as Mock).mockResolvedValue({
    getRepository: vi.fn().mockReturnValue({
      findBy: mockFindBy,
    }),
  });
});

describe('getFinalPriceAsync', () => {
  test('должен возвращать число', async () => {
    // Мокаем, что findBy возвращает фейковые данные услуг
    mockFindBy.mockResolvedValue([
      { alias: SERVICES.PRINTING, price: 100 },
      { alias: SERVICES.MODELLING, price: 200 },
      { alias: SERVICES.POSTPROCESSING, price: 300 },
    ]);

    const result = await getFinalPriceAsync(500, true, true);
    expect(typeof result).toBe('number');
  });

  test('работает без моделирования и постобработки', async () => {
    mockFindBy.mockResolvedValue([{ alias: SERVICES.PRINTING, price: 150 }]);
    const result = await getFinalPriceAsync(100, false, false);
    expect(result).toBeTypeOf('number');
  });

  test('обрабатывает отрицательные значения', async () => {
    mockFindBy.mockResolvedValue([
      { alias: SERVICES.PRINTING, price: 100 },
      { alias: SERVICES.MODELLING, price: 50 },
      { alias: SERVICES.POSTPROCESSING, price: 50 },
    ]);
    const result = await getFinalPriceAsync(-100, true, true);
    expect(result).toBeGreaterThanOrEqual(0);
  });

  test('не выбрасывает исключений', async () => {
    mockFindBy.mockResolvedValue([]);
    await expect(getFinalPriceAsync(100, false, false)).resolves.not.toThrow();
  });
});
