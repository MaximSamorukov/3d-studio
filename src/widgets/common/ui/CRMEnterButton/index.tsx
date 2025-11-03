'use client';
import Image from 'next/image';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { observer } from 'mobx-react-lite';
import { CRMDrawerComponent } from '../CRMDrawerComponent';
import { crmDrawerState } from '../CRMDrawerComponent/CRMDrawerComponentState';

import s from './style.module.scss';

export const CRMEnterButton = observer(() => {
  const session = useSession();
  const handleOpenModal = () => {
    if (session.data?.user) {
      crmDrawerState.handleOpen();
      return;
    }
  };

  if (!session.data?.user) {
    return <></>;
  }
  return (
    <div className={s.itemContainer}>
      <button
        onClick={handleOpenModal}
        className={cn(s.unset, s.itemIcon, s.pointer)}
      >
        <Image src="/crm_icon.svg" width={32} height={32} alt="login_icon" />
      </button>
      <button
        onClick={handleOpenModal}
        className={cn(s.unset, s.itemLabel, s.pointer)}
      >
        <span>Мои заказы</span>
      </button>
      <CRMDrawerComponent />
    </div>
  );
});
