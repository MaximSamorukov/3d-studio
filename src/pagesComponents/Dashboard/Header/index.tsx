import React from 'react';
import { LoginButton } from '@/widgets/common/ui/LoginButton';
import s from './style.module.scss';
import { WebsiteLink } from './components/WebsiteLink';
import { EmailComponent } from './components/EmailComponent';
import { Romb } from './components/Romb';
import { OrdersLink } from './components/OrdersLink';
import { SettingsLink } from './components/SettingsLink';

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
