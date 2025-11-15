import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

const menuItems = Array(8)
  .fill(null)
  .map((_, i) => ({ href: `test_href_${i}`, label: `label_${i}` }));
const socials = Array(2)
  .fill(null)
  .map((_, i) => ({
    id: `test_soc_${i}`,
    description: `description_soc_${i}`,
  }));
vi.mock('@/app/config/constants', () => ({
  menuItems: Array(8)
    .fill(null)
    .map((_, i) => ({ href: `test_href_${i}`, label: `label_${i}` })),
  socials: Array(2)
    .fill(null)
    .map((_, i) => ({
      id: `test_soc_${i}`,
      description: `description_soc_${i}`,
    })),
}));

import { FooterMenuItem } from './index';
describe('FooterMenuItem component', () => {
  const header = 'header';
  it('рендер FooterMenuItem type=baseMenuItems', () => {
    const { getByText } = render(
      <FooterMenuItem type="baseMenuItems" header={header} />,
    );
    const headerElement = getByText(header);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.className).toContain('header');

    const nextElement = headerElement.nextElementSibling;
    expect(nextElement?.className).toContain('bodyMenuContainer');
    expect(nextElement?.children.length).toBe(8);
    for (let i = 0; i < menuItems.length; i++) {
      expect(nextElement?.children[i]).toHaveTextContent(menuItems[i].label);
    }
  });
  it('рендер FooterMenuItem type=contacts', () => {
    const { getByText } = render(
      <FooterMenuItem type="contacts" header={header} />,
    );
    const headerElement = getByText(header);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.className).toContain('header');

    const nextElement = headerElement.nextElementSibling;
    expect(nextElement?.className).toContain('bodyContactsContainer');
    expect(nextElement).toHaveTextContent('+7-925-026-17-37');
    expect(nextElement).toHaveTextContent('zakaz.print.3d@gmail.com');
    expect(nextElement?.querySelectorAll('a')).toHaveLength(4);
  });
  it('рендер FooterMenuItem type=socials', () => {
    const { getByText } = render(
      <FooterMenuItem type="socials" header={header} />,
    );
    const headerElement = getByText(header);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.className).toContain('header');

    const nextElement = headerElement.nextElementSibling;
    expect(nextElement?.className).toContain('bodySocialsContainer');
    expect(nextElement?.children).toHaveLength(socials.length);
    for (let i = 0; i < socials.length; i++) {
      expect(nextElement?.children[i].querySelector('a')).toHaveAttribute(
        'href',
        socials[i].description,
      );
    }
  });
});
