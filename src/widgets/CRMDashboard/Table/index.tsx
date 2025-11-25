import React from 'react';
import s from './style.module.scss';
import { TableHeader } from './ui/TableHeader';
import { TableBody } from './ui/TableBody';
import { TablePaging } from './ui/TablePaging';
import { TableModal } from './ui/TableModal';
import { Container } from '@/shared/ui/Container';

export const Table = () => {
  return (
    <div className={s.container}>
      <TableHeader />
      <Container>
        <TableBody />
      </Container>
      <TablePaging />
      <TableModal />
    </div>
  );
};
