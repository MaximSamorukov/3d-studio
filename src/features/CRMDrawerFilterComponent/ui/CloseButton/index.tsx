import React from 'react';
import s from './style.module.scss';
type DrawerCloseButtonProps = {
  handleCloseDrawer: () => void;
};
export function DrawerCloseButton({
  handleCloseDrawer,
}: DrawerCloseButtonProps) {
  return (
    <button className={s.btnContainer} onClick={handleCloseDrawer}>
      <div className={s.btnCross} />
    </button>
  );
}
