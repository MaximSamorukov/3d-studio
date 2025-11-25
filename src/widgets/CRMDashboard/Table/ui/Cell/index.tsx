import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { getFileName } from '../../api/utils';
import {
  PAYMENT_STATUCES_DICT,
  PAYMENT_STATUCES_MOBILE_DICT,
  STATUSES_DICT,
  STATUSES_MOBILE_DICT,
} from '@/shared/constants/constants';
import { useWindowWidth } from '@/shared/hooks';

type CellProps = {
  path: string;
  value: string;
};

export const Cell: React.FC<CellProps> = ({ path, value }) => {
  const width = useWindowWidth();

  if (path === 'file_path') {
    return <div className={s.container}>{getFileName(value)}</div>;
  }

  if (path === 'order_status') {
    const isMobile = width < 600;
    const DICT = isMobile ? STATUSES_MOBILE_DICT : STATUSES_DICT;
    return (
      <div className={cn(s.container, s.centered)}>
        {DICT[value as keyof typeof DICT]}
      </div>
    );
  }

  if (path === 'payment_status') {
    const isMobile = width < 600;
    const DICT = isMobile
      ? PAYMENT_STATUCES_MOBILE_DICT
      : PAYMENT_STATUCES_DICT;
    return (
      <div className={cn(s.container, s.centered)}>
        {DICT[value as keyof typeof DICT]}
      </div>
    );
  }

  if (path === 'created_at') {
    const dateString = new Date(value).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
    return <div className={cn(s.container, s.centered)}>{dateString}</div>;
  }
  const l = (value || '').trim() || '---';
  return <div className={s.container}>{l}</div>;
};
