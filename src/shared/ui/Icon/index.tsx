import React from 'react';
import Image from 'next/image';
import { IconProps, IconType } from './types';

const ICON_MAP: Record<IconType, string> = {
  login: '/login_icon.svg',
  social_tg: '/footer/socials_tg_footer.png',
  social_vk: '/footer/socials_vk_footer.png',
  eye_close: '/eye_close.svg',
  eye_open: '/eye_open.svg',
  under_construction: '/under_construction.png',
  remove: '/remove.svg',
  check: '/check.png',
  trash: '/trash.svg',
  refresh: '/refresh.svg',
  crm: '/crm_icon.svg',
  preview: '/preview.svg',
  calculate_price_lilac: '/calculate_price_crm_lilac.svg',
  calculate_price_green: '/calculate_price_crm_green.svg',
  approve_price_green: '/approve_price_crm_green.svg',
  approve_price_white: '/approve_price_crm_white.svg',
  refresh_green: '/refresh_green.svg',
  save_green: '/save_green.svg',
  save_white: '/save_white.svg',
  restore_green: '/restore_green.svg',
  restore_white: '/restore_white.svg',
  download_green: '/download_green.svg',
  phone: '/phone.svg',
  email: '/email.svg',
  logo: '/logo.svg',
};

export const Icon: React.FC<IconProps> = ({
  type,
  width = 24,
  height = 24,
  className,
  onClick,
}) => {
  const src = ICON_MAP[type];

  return (
    <Image
      src={src}
      alt={type}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};
