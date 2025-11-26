import React from 'react';
import s from './style.module.scss';
type DrawerCloseButtonProps = {
  handleCloseDrawer: () => void;
};
export function DrawerCloseButton({
  handleCloseDrawer,
}: DrawerCloseButtonProps) {
  return (
    <div className={s.container}>
      <button onClick={handleCloseDrawer} className={s.btn}>
        Закрыть
      </button>
    </div>
  );
}
