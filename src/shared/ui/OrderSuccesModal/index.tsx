'use client';
import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { ModalComponent } from '@/shared/ui/Modal';
import { Box } from '@mui/material';
import s from './style.module.scss';
import { useWindowWidth } from '@/shared/hooks';

type ModalComponentProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const OrderSuccesModal: React.FC<ModalComponentProps> = ({
  open,
  setOpen,
}) => {
  const onClose = () => {
    setOpen(false);
  };
  const windowWidth = useWindowWidth();
  const style = useMemo(() => {
    if (windowWidth >= 420) return {};
    return { width: '90%', height: 'fit-content' };
  }, [windowWidth]);
  return (
    <ModalComponent
      style={style}
      withControl={false}
      open={open}
      onClose={onClose}
    >
      <div className={s.container}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Заказ успешно отправлен.
        </Typography>
        <Typography
          className={s.text}
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          Представитель мастерской вам перезвонит для уточнения объема заказа.
        </Typography>
        <Box
          component="section"
          sx={{
            pt: 5,
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button onClick={onClose} className={s.button}>
            Отлично
          </button>
        </Box>
      </div>
    </ModalComponent>
  );
};
