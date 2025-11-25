import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './index';
import { IconType } from './types';

const meta: Meta<typeof Icon> = {
  title: 'Shared/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: [
        'login',
        'social_tg',
        'social_vk',
        'eye_close',
        'eye_open',
        'under_construction',
        'remove',
        'check',
        'trash',
        'refresh',
        'crm',
        'preview',
        'calculate_price_lilac',
        'calculate_price_green',
        'approve_price_green',
        'approve_price_white',
        'refresh_green',
        'save_green',
        'save_white',
        'restore_green',
        'restore_white',
        'download_green',
        'phone',
        'email',
        'logo',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    type: 'login',
    width: 24,
    height: 24,
  },
};

const allIcons: IconType[] = [
  'login',
  'social_tg',
  'social_vk',
  'eye_close',
  'eye_open',
  'under_construction',
  'remove',
  'check',
  'trash',
  'refresh',
  'crm',
  'preview',
  'calculate_price_lilac',
  'calculate_price_green',
  'approve_price_green',
  'approve_price_white',
  'refresh_green',
  'save_green',
  'save_white',
  'restore_green',
  'restore_white',
  'download_green',
  'phone',
  'email',
  'logo',
];

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {allIcons.map((type) => (
        <div
          key={type}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <Icon type={type} width={32} height={32} />
          <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>
            {type}
          </span>
        </div>
      ))}
    </div>
  ),
};
