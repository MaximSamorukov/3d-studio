'use client';
import React from 'react';
import MenuItem from '@/shared/ui/MenuItem';
import { useWindowWidth } from '@/shared/hooks';
import { menuItems } from '@/shared/constants/mainMenu';
import s from './style.module.scss';

export function MenuItems() {
  const width = useWindowWidth();
  if (width < 500) {
    return <div className={s.container} />;
  }
  if (width <= 1070) {
    return <div className={s.container}>Студия 3D-печати</div>;
  }
  return (
    <>
      {menuItems.map((i) => (
        <MenuItem key={i.href} href={i.href} label={i.label} />
      ))}
    </>
  );
}
