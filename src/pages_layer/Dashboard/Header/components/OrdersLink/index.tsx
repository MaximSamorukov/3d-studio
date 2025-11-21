'use client';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './style.module.scss';

export const OrdersLink = () => {
  const pathname = usePathname();
  const currentPath = '/crm/dashboard';
  const isActive = currentPath === pathname;
  return (
    <div className={cn(cn(s.itemContainer, isActive && s.itemContainerActive))}>
      <Link href={currentPath} className={cn(s.unset, s.itemLabel, s.pointer)}>
        Заказы
      </Link>
    </div>
  );
};
