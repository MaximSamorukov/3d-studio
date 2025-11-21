import { Filters } from '@/pages_layer/Dashboard/Filters';
import { Header } from '@/pages_layer/Dashboard/Header';
import { Table } from '@/pages_layer/Dashboard/Table';
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
