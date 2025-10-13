"use client";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import s from "./style.module.scss";

type ModalComponentProps = {
  open: boolean;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 250,
  bgcolor: "black",
  border: "1px solid #FFFFFF",
  boxShadow: 24,
  p: 4,
};
export const ModalComponent: React.FC<ModalComponentProps> = ({ open }) => {
  const [isOpened, setOpened] = useState(false);

  useEffect(() => {
    if (open) {
      setOpened(open);
    }
  }, [open]);

  const onClose = () => {
    setOpened(false);
  };
  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Заказ успешно отправлен.
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Представитель мастерской вам перезвонит для уточнения объема заказа.
        </Typography>
        <Box
          component="section"
          sx={{
            p: 2,
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className={s.button} onClick={onClose}>
            Отлично
          </button>
        </Box>
      </Box>
    </Modal>
  );
};
