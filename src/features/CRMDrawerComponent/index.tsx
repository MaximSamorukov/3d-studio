'use client';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { userState } from '@/shared/state/user/state';
import { observer } from 'mobx-react-lite';
import s from './style.module.scss';
import { CircularProgress, Tab, Tabs } from '@mui/material';
import { DrawerPanelContainer } from './ui/DrawerPanelContainer';
import { DrawerCloseButton } from './ui/CloseButton';
import { crmDrawerState } from '../../shared/state/crmDrawerComponent/CRMDrawerComponentState';
import { DrawerRefreshButton } from './ui/RefreshButton';

export const CRMDrawerComponent = observer(() => {
  const session = useSession();
  const [tabType, setTabType] = useState<'orders' | 'consultations'>('orders');

  const handleCloseModal = () => {
    crmDrawerState.handleClose();
  };
  const handleChangeTab = (
    event: React.SyntheticEvent,
    newValue: 'orders' | 'consultations',
  ) => {
    setTabType(newValue);
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
        <div className={s.drawerControlsContainer}>
          <DrawerCloseButton handleCloseDrawer={handleCloseModal} />
          <DrawerRefreshButton />
        </div>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={tabType}
          onChange={handleChangeTab}
        >
          <Tab
            value="orders"
            label="Заказы"
            sx={{ color: '#ededed', fontWeight: 700, fontSize: 16 }}
          />
          <Tab
            value="consultations"
            label="Консультации"
            sx={{ color: '#ededed', fontWeight: 700, fontSize: 16 }}
          />
        </Tabs>
        <DrawerPanelContainer tabType={tabType} />
        {userState.loading ? (
          <div className={s.drawerContainerLoader}>
            <CircularProgress size={40} color="secondary" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </Drawer>
  );
});
