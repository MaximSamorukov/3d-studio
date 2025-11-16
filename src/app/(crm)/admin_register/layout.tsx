import React from 'react';
import s from './layout.module.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={s.container}>
      <div className={s.crmContainer}>{children}</div>
    </div>
  );
}
