'use client';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import s from './style.module.scss';

export const EmailComponent = () => {
  const session = useSession();
  const { email } = session.data?.user || { email: 'нет данных' };

  if (session.status === 'loading') {
    return <div>...</div>;
  }
  return (
    <div className={cn(s.itemContainer)}>
      <div className={cn(s.unset, s.itemLabel, s.pointer)}>{email}</div>
    </div>
  );
};
