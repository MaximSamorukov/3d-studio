import React from 'react';
import s from './style.module.scss';
import cn from 'classnames';
type CrossButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};
export function CrossButton({ disabled, onClick }: CrossButtonProps) {
  return (
    <button className={s.container} onClick={onClick}>
      <div
        className={cn(s.containerCross, {
          [s.containerCrossDisabled]: disabled,
        })}
      />
    </button>
  );
}
