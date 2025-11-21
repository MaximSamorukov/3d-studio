import React from 'react';
import { PerPageSelector } from './PerPageSelector';
import { CurrentPageNumber } from './CurrentPageNumber';
import { ForwardButton } from './ForwardButtom';
import { BackwardButton } from './BackwardButton';
import s from './style.module.scss';

export const TablePaging = () => {
  return (
    <div className={s.container}>
      <BackwardButton />
      <CurrentPageNumber />
      <ForwardButton />
      <PerPageSelector />
    </div>
  );
};
