'use client';
import { useWindowWidth } from '@/shared/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getDimension } from './utils';

export function Logo() {
  const width = useWindowWidth();
  const imgDim = getDimension(width);
  if (width <= 1070) {
    return <div>M</div>;
  }
  return (
    <Link href={'/3d_printing'}>
      <Image src="/logo.svg" width={imgDim} height={imgDim} alt="logo" />
    </Link>
  );
}
