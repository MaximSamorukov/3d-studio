import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/app/config/constants', () => ({
  footerMenu: [],
  logoText: '1\n2',
}));

import Footer from './index';

describe('Footer component', () => {
  it('рендер Footer', () => {
    const { getByRole, findAllByRole } = render(<Footer />);
    const link = getByRole('link');
    const links = findAllByRole('link');
    expect(links).resolves.toHaveLength(1);
    expect(link).toHaveAttribute('href', '/3d_printing');
  });
});
