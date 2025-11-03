'use client';
import Drawer from '@mui/material/Drawer';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { userState } from '@/shared/user/state';
import { observer } from 'mobx-react-lite';
import s from './style.module.scss';
import { Tab, Tabs } from '@mui/material';
import { DrawerPanelContainer } from './DrawerPanelContainer';
import { DrawerCloseButton } from './CloseButton';
import { crmDrawerState } from './CRMDrawerComponentState';

export const CRMDrawerComponent = observer(() => {
  const session = useSession();
  const [tabNumber, setTabNumber] = useState<'orders' | 'consultations'>(
    'orders',
  );

  const handleCloseModal = () => {
    crmDrawerState.handleClose();
  };
  const handleChangeTab = (
    event: React.SyntheticEvent,
    newValue: 'orders' | 'consultations',
  ) => {
    setTabNumber(newValue);
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
      anchor="right"
      open={crmDrawerState.open}
    >
      <div className={s.drawerContainer}>
        <DrawerCloseButton handleCloseDrawer={handleCloseModal} />
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={tabNumber}
          onChange={handleChangeTab}
        >
          <Tab value="orders" label="Заказы" sx={{ color: 'white' }} />
          <Tab
            value="consultations"
            label="Консультации"
            sx={{ color: 'white' }}
          />
        </Tabs>
        <DrawerPanelContainer tabNumber={tabNumber} />
      </div>
    </Drawer>
  );
});
