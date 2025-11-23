'use client';
import cn from 'classnames';
import { useRouter } from 'next/navigation';

import s from './style.module.scss';
import { MenuDrawer } from './ui/MenuDrawer';
import { useCallback, useState } from 'react';

export const MainMenuBurger = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen((v) => !v);
  };
  const handleCloseDrawer = useCallback(() => {
    console.log('on close');
    //setOpen(false);
  }, []);
  console.log('open', open);
  return (
    <div className={s.container}>
      <button
        id="burger"
        onClick={handleOpenModal}
        className={cn(s.unset, s.burger, { [s.active]: open })}
      >
        <div></div>
      </button>
      <MenuDrawer open={false} onCloseDrawer={handleCloseDrawer} />
    </div>
  );
};
