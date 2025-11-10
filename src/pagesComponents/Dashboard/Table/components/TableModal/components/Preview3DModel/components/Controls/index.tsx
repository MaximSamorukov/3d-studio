import { observer } from 'mobx-react-lite';
import React from 'react';
import s from './style.module.scss';

export const Controls = observer(() => {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <span>Размеры, мм:</span>
        <span>100 х 100 х 100</span>
      </div>
      <div className={s.itemWithPow}>
        <span>
          Объем, см<sup>3</sup>:
        </span>
      </div>
      <div className={s.item}>
        <span>100</span>
      </div>
    </div>
  );
});
