export type IconType =
  | 'login'
  | 'social_tg'
  | 'social_vk'
  | 'eye_close'
  | 'eye_open'
  | 'under_construction'
  | 'remove'
  | 'check'
  | 'trash'
  | 'refresh'
  | 'crm'
  | 'preview'
  | 'calculate_price_lilac'
  | 'calculate_price_green'
  | 'approve_price_green'
  | 'approve_price_white'
  | 'refresh_green'
  | 'save_green'
  | 'save_white'
  | 'restore_green'
  | 'restore_white'
  | 'download_green'
  | 'phone'
  | 'email'
  | 'logo';

export interface IconProps {
  type: IconType;
  width?: number;
  height?: number;
  className?: string;
}
