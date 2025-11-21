'use client';
import Image from 'next/image';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { observer } from 'mobx-react-lite';
import { CRMDrawerComponent } from '../CRMDrawerComponent';
import { crmDrawerState } from '../../shared/state/crmDrawerComponent/CRMDrawerComponentState';
import { useRouter } from 'next/navigation';

import s from './style.module.scss';

export const CRMEnterButton = observer(() => {
  const session = useSession();
  const router = useRouter();
  const isAdmin = session.data?.user.role === 'admin';
  const isCustomer = session.data?.user.role === 'customer';

  const handleOpenModal = () => {
    if (session.data?.user && isCustomer) {
      crmDrawerState.handleOpen();
      return;
    }
    if (session.data?.user && isAdmin) {
      router.push('/crm');
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
        {isAdmin ? <span>Вход в CRM</span> : <span>Мои заказы</span>}
      </button>
      <CRMDrawerComponent />
    </div>
  );
});
