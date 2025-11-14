import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Btn } from './Btn.jsx';

test('рендер кнопки', () => {
  render(<Btn />);
  expect(screen.getByText('Click Me')).toBeDefined();
});
