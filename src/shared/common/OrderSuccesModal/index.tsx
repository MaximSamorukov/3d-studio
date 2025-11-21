'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import { ModalComponent } from '@/shared/common/Modal';
import { Box } from '@mui/material';
import s from './style.module.scss';

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
  return (
    <ModalComponent withControl={false} open={open} onClose={onClose}>
      <div style={{ padding: 20 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Заказ успешно отправлен.
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
