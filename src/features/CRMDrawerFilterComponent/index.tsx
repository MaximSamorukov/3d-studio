'use client';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { userState } from '@/shared/state/user/state';
import { observer } from 'mobx-react-lite';
import s from './style.module.scss';
import { DrawerCloseButton } from './ui/CloseButton';
import { crmDraweFilterState } from '../../shared/state/crmDrawerFilterComponent/CRMDrawerFilterComponentState';

type CRMDrawerFilterComponentProps = {
  children: React.ReactElement;
};
export const CRMDrawerFilterComponent: React.FC<CRMDrawerFilterComponentProps> =
  observer(({ children }) => {
    const session = useSession();

    const handleCloseModal = () => {
      crmDraweFilterState.handleClose();
    };

    if (!session.data?.user) {
      return <></>;
    }
    return (
      <Drawer
        slotProps={{
          paper: {
            style: {
              backgroundColor: 'black',
            },
          },
        }}
        anchor="top"
        open={crmDraweFilterState.open}
      >
        <div className={s.drawerContainer}>
          <div className={s.drawerFiltersContainer}>{children}</div>
        </div>
        <div className={s.drawerControlsContainer}>
          <DrawerCloseButton handleCloseDrawer={handleCloseModal} />
        </div>
      </Drawer>
    );
  });
