'use client';
import { CRMDrawerFilterComponent } from '@/features/CRMDrawerFilterComponent';
import { useWindowWidth } from '@/shared/hooks';
import { crmDraweFilterState } from '@/shared/state/crmDrawerFilterComponent/CRMDrawerFilterComponentState';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React from 'react';
import s from './style.module.scss';

type FilterLayoutProps = {
  children: React.ReactElement;
};

export const FilterLayout: React.FC<FilterLayoutProps> = observer(
  ({ children }) => {
    const width = useWindowWidth();
    const handleOpenModal = () => {
      crmDraweFilterState.handleOpen();
    };
    if (width > 400) {
      return <>{children}</>;
    } else {
      return (
        <>
          <button className={s.filtersButton} onClick={handleOpenModal}>
            <Image
              width={24}
              height={24}
              src={'/crm_filter_icon.svg'}
              alt="filters"
            />
          </button>
          <CRMDrawerFilterComponent>{children}</CRMDrawerFilterComponent>
        </>
      );
    }
  },
);
