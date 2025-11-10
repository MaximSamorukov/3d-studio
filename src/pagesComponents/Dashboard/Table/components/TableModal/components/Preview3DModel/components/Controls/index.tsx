import { observer } from 'mobx-react-lite';
import React from 'react';
import s from './style.module.scss';
import { mmToSm } from './utils';

type ControlsPropsType = {
  volume?: string;
  x?: number;
  y?: number;
  z?: number;
};

export const Controls: React.FC<ControlsPropsType> = observer(
  ({ x, y, z, volume }) => {
    return (
      <div className={s.container}>
        <div className={s.item}>
          <span>Размеры, мм:&nbsp;&nbsp;</span>
          <span>
            {x?.toFixed(1) || '0'} x {y?.toFixed(1) || '0'} x{' '}
            {z?.toFixed(1) || '0'}.
          </span>
        </div>
        <div className={s.itemWithPow}>
          <span>
            Объем, см<sup>3</sup>:&nbsp;&nbsp;
          </span>
        </div>
        <div className={s.item}>
          <span>{mmToSm(volume || '0')}.</span>
        </div>
      </div>
    );
  },
);
