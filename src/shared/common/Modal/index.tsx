"use client";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import s from "./style.module.scss";

type ModalComponentProps = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  withControl?: boolean;
  style?: {
    height?: number;
    width?: number;
  };
};
const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 250,
  bgcolor: "black",
  border: "1px solid #FFFFFF",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
};
export const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  onClose = () => {},
  children,
  withControl = true,
  style = {
    width: styles.width,
    height: styles.height,
  },
}) => {
  const [isOpened, setOpened] = useState(false);

  useEffect(() => {
    if (open) {
      setOpened(open);
    }
    onClose();
  }, [open]);

  const onCloseFn = () => {
    setOpened(false);
  };
  return (
    <Modal
      disableScrollLock
      open={isOpened}
      onClose={onCloseFn}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...styles, ...style }}>
        {children}
        {withControl && (
          <button className={s.button} onClick={onClose}>
            Отлично
          </button>
        )}
      </Box>
    </Modal>
  );
};
