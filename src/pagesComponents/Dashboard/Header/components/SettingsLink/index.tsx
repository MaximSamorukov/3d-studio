'use client';
import cn from 'classnames';
import Link from 'next/link';
import s from './style.module.scss';
import { usePathname } from 'next/navigation';

export const SettingsLink = () => {
  const pathname = usePathname();
  const currentPath = '/crm/settings';
  const isActive = currentPath === pathname;
  return (
    <div className={cn(cn(s.itemContainer, isActive && s.itemContainerActive))}>
      <Link
        href={'/crm/settings'}
        className={cn(s.unset, s.itemLabel, s.pointer)}
      >
        Настройки
      </Link>
    </div>
  );
};
