import React from 'react';
import { LoginButton } from '@/shared/common/LoginButton';
import { WebsiteLink } from './ui/WebsiteLink';
import { EmailComponent } from './ui/EmailComponent';
import { Romb } from './ui/Romb';
import { OrdersLink } from './ui/OrdersLink';
import { SettingsLink } from './ui/SettingsLink';
import s from './style.module.scss';

export function Header() {
  return (
    <div className={s.container}>
      <SettingsLink />
      <Romb />
      <OrdersLink />
      <Romb />
      <EmailComponent />
      <Romb />
      <WebsiteLink />
      <Romb />
      <LoginButton withIcon={false} />
    </div>
  );
}
