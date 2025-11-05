import React from 'react';
import { LoginButton } from '@/widgets/common/ui/LoginButton';
import s from './style.module.scss';
import { WebsiteLink } from './components/WebsiteLink';
import { EmailComponent } from './components/EmailComponent';
import { Romb } from './components/Romb';
import { Label } from './components/Label';

export function Header() {
  return (
    <div className={s.container}>
      <EmailComponent />
      <Romb />
      <WebsiteLink />
      <Romb />
      <LoginButton withIcon={false} />
    </div>
  );
}
