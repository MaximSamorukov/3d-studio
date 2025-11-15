import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PlasicItem } from './index';
import { PlasticType } from './types';
import { labels } from '@/app/config/plastic/constants';

describe('PlasicItem component', () => {
  const item: PlasticType = {
    name: 'PLA',
    extendedName: 'Polylactic Acid',
    application: 'Прототипирование',
    descriptions: 'Быстрый и простой в печати пластик',
    properties: {
      temperature: '200–220°C',
      bed: 'Не требуется',
      strength: 'Средняя',
      flexibility: 'Низкая',
      shrinkage: 'Минимальная',
      notes: 'Экологичный',
    },
  };

  it('рендерит основные поля', () => {
    render(<PlasicItem item={item} />);

    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(`(${item.extendedName})`)).toBeInTheDocument();
    expect(screen.getByText('Краткое описание:')).toBeInTheDocument();
    expect(screen.getByText(item.descriptions)).toBeInTheDocument();
    expect(screen.getByText('Применение:')).toBeInTheDocument();
    expect(screen.getByText(item.application)).toBeInTheDocument();
  });

  it('рендерит свойства пластика', () => {
    render(<PlasicItem item={item} />);

    for (const [key, value] of Object.entries(item.properties)) {
      const label = labels[key as keyof typeof labels];

      // - Температура:
      expect(screen.getByText(`- ${label}:`)).toBeInTheDocument();

      // 200–220°C
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  });
});
