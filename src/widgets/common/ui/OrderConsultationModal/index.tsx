"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { ModalComponent } from "@/shared/common/Modal";
import { Box } from "@mui/material";
import { OrderConsultationForm } from "../OrderConsultationForm";

type ModalComponentProps = {
  open: boolean;
  onClose?: () => void;
};

export const OrderConsultationModal: React.FC<ModalComponentProps> = ({
  open,
  onClose = () => {},
}) => {
  return (
    <ModalComponent
      open={open}
      onClose={onClose}
      withControl={false}
      style={{ height: 190 }}
    >
      <OrderConsultationForm />
    </ModalComponent>
  );
};
