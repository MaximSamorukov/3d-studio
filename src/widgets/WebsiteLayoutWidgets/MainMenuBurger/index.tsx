'use client';
import cn from 'classnames';
import { MenuDrawer } from './ui/MenuDrawer';
import { useCallback, useState } from 'react';
import s from './style.module.scss';

export const MainMenuBurger = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(() => true);
  };
  const handleCloseDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={s.container}>
      <button
        id="burger"
        onClick={handleOpenModal}
        className={cn(s.unset, s.burger, { [s.active]: open })}
      >
        <div></div>
      </button>
      <MenuDrawer open={open} onCloseDrawer={handleCloseDrawer} />
    </div>
  );
};
