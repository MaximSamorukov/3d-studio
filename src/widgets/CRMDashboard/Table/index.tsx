import React from 'react';
import s from './style.module.scss';
import { TableHeader } from './ui/TableHeader';
import { TableBody } from './ui/TableBody';
import { TablePaging } from './ui/TablePaging';
import { TableModal } from './ui/TableModal';

export const Table = () => {
  return (
    <div className={s.container}>
      <TableHeader />
      <TableBody />
      <TablePaging />
      <TableModal />
    </div>
  );
};
