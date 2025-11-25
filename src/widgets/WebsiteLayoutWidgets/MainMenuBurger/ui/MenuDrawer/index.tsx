'use client';
import Drawer from '@mui/material/Drawer';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import cn from 'classnames';
import { menuItems } from '@/shared/constants/mainMenu';
import { MainMenuDrawerCloseButton } from '../MainMenuCloseButton';
import s from './style.module.scss';

type MenuDrawerProps = {
  open: boolean;
  onCloseDrawer: () => void;
};
export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  open,
  onCloseDrawer,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClickLink = (path: string) => {
    router.push(path);
    onCloseDrawer();
  };
  return (
    <Drawer
      onClose={onCloseDrawer}
      slotProps={{
        paper: {
          style: {
            backgroundColor: 'black',
          },
        },
      }}
      anchor="left"
      open={open}
    >
      <div className={s.drawerContainer}>
        <div className={s.drawerControlsContainer}>
          <MainMenuDrawerCloseButton handleCloseDrawer={onCloseDrawer} />
        </div>
        <div className={s.drawerDataContainer}>
          {menuItems.map((i) => (
            <div key={i.href} className={s.menuItem}>
              <button
                className={cn(s.menuItemLabel, {
                  [s.menuItemLabelActive]: pathname === i.href,
                })}
                onClick={() => handleClickLink(i.href)}
              >
                {i.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};
