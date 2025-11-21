import React from 'react';

import s from './style.module.scss';
import { PlasicItem } from '@/shared/ui/PlasticItem';
import { filaments } from './constants';

export default function PlasticTypes() {
  return (
    <div className={s.container}>
      {filaments.map((i) => (
        <PlasicItem key={i.name} item={i} />
      ))}
    </div>
  );
}
