'use client';
import Image from 'next/image';
import cn from 'classnames';
import { useCallback, useState } from 'react';
import { ModalComponent } from '@/shared/common/Modal';
import { LoginForm } from '../LoginForm';
import { signOut, useSession } from 'next-auth/react';

import s from './style.module.scss';

export const LoginButton = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    if (!session.data?.user) {
      setOpen(true);
      return;
    }
    signOut({ redirectTo: '/' });
  };
  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);
  console.log('session', session);
  return (
    <div className={s.itemContainer}>
      <button
        onClick={handleOpenModal}
        className={cn(s.unset, s.itemIcon, s.pointer)}
      >
        <Image src="/login_icon.svg" width={24} height={24} alt="login_icon" />
      </button>
      <button
        onClick={handleOpenModal}
        className={cn(s.unset, s.itemLabel, s.pointer)}
      >
        {session.data?.user ? <span>Выход</span> : <span>Вход</span>}
      </button>
      <ModalComponent
        onClose={handleCloseModal}
        open={open}
        withControl={false}
        style={{
          height: 300,
        }}
      >
        <LoginForm />
      </ModalComponent>
    </div>
  );
};
