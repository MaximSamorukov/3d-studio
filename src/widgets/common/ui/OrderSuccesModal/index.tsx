"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { ModalComponent } from "@/shared/common/Modal";
import { Box } from "@mui/material";

type ModalComponentProps = {
  open: boolean;
};

export const OrderSuccesModal: React.FC<ModalComponentProps> = ({ open }) => {
  return (
    <ModalComponent open={open}>
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
      ></Box>
    </ModalComponent>
  );
};
