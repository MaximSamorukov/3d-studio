import React from 'react';
import s from './style.module.scss';
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';
import { TablePaging } from './components/TablePaging';
import { TableModal } from './components/TableModal';

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
