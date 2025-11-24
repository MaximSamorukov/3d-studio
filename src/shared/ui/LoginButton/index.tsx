'use client';
import Image from 'next/image';
import cn from 'classnames';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ModalComponent } from '@/shared/ui/Modal';
import { LoginForm } from '../LoginForm';
import { signOut, useSession } from 'next-auth/react';
import { userState } from '@/shared/state/user/state';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { getMaterials, getServices } from '@/shared/api';
import { materialsState } from '@/shared/state/materials/state';
import { serviceState } from '@/shared/state/services/state';
import { Icon } from '@/shared/ui/Icon';
import { useWindowWidth } from '@/shared/hooks';

type LoginButtonProps = {
  withIcon?: boolean;
};

export const LoginButton = observer(({ withIcon = true }: LoginButtonProps) => {
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
    getMaterials()
      .then(({ materials }) => {
        materialsState.setMaterials(materials);
      })
      .catch(console.log);
  }, [session.data?.user]);
  useEffect(() => {
    getServices()
      .then(({ services }) => {
        serviceState.setServices(services);
      })
      .catch(console.log);
  }, [session.data?.user]);
  useEffect(() => {
    if (session.data?.user) {
      userState.setUser(session.data?.user);
      userState.getUserOrders();
    } else {
      userState.removeUserFromState();
    }
  }, [session.data?.user]);
  const windowWidth = useWindowWidth();
  const style = useMemo(() => {
    if (windowWidth > 520) return { height: 300 };
    if (windowWidth >= 420)
      return {
        height: 'fit-content',
        ['padding-bottom']: 10,
        ['boz-sizing']: 'border-box',
      };
    return {
      height: 'fit-content',
      width: windowWidth - 20,
      ['padding-bottom']: 10,
    };
  }, [windowWidth]);
  return (
    <div className={cn(s.itemContainer, { [s.itemContainerShort]: !withIcon })}>
      {withIcon && (
        <button
          onClick={handleOpenModal}
          className={cn(s.unset, s.itemIcon, s.pointer)}
        >
          <Icon type="login" />
        </button>
      )}
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
        style={style}
      >
        <LoginForm />
      </ModalComponent>
    </div>
  );
});
