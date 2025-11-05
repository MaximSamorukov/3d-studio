import { Filters } from '@/pagesComponents/Dashboard/Filters';
import { Header } from '@/pagesComponents/Dashboard/Header';
import { Table } from '@/pagesComponents/Dashboard/Table';
import { LoginButton } from '@/widgets/common/ui/LoginButton';
import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Filters />
      <Table />
    </>
  );
}
