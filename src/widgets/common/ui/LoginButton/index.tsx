'use client';
import Image from 'next/image';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { ModalComponent } from '@/shared/common/Modal';
import { LoginForm } from '../LoginForm';
import { signOut, useSession } from 'next-auth/react';
import { userState } from '@/shared/user/state';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';

export const LoginButton = observer(() => {
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

  useEffect(() => {
    if (session.data?.user?.id) {
      userState.setUser(session.data?.user);
    } else {
      userState.removeUserFromState();
    }
  }, [session.data?.user?.id]);
  console.log(userState.email);
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
});
