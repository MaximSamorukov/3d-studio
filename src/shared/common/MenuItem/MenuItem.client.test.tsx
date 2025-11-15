import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MenuItem from './index';

vi.mock('next/navigation', () => ({
  usePathname: () => '/test-path',
}));
describe('PlasicItem component', () => {
  const label = 'label';
  const href = 'href';
  it('рендер PlasicItem', () => {
    const { getByRole } = render(<MenuItem href={href} label={label} />);

    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute('href', href);
    expect(getByRole('link')).toHaveTextContent(label);
  });
  it('добавляет active класс если pathname совпадает', () => {
    const label = 'label';
    const href = '/test-path';

    const { getByRole } = render(<MenuItem href={href} label={label} />);

    const wrapper = getByRole('link').parentElement!;
    expect(wrapper.className).toContain('menuItemActive');
  });
  it('не добавляет active класс если pathname не совпадает', () => {
    const label = 'label';
    const href = '/other-test-path';

    const { getByRole } = render(<MenuItem href={href} label={label} />);

    const wrapper = getByRole('link').parentElement!;
    expect(wrapper.className).not.toContain('menuItemActive');
  });
});
