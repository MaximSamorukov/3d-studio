import React from 'react';
import { PerPageSelector } from './ui/PerPageSelector';
import { CurrentPageNumber } from './ui/CurrentPageNumber';
import { ForwardButton } from './ui/ForwardButtom';
import { BackwardButton } from './ui/BackwardButton';
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
