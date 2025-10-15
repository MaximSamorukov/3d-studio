"use client";
import cn from "classnames";
import s from "./style.module.scss";
import { useCallback, useState } from "react";
import { OrderConsultationModal } from "../OrderConsultationModal";

export function OrderConsultationButton() {
  const [openConsultModal, setOpenConsultModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenConsultModal(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setOpenConsultModal(true);
  }, []);
  return (
    <>
      <button
        onClick={handleOpenModal}
        className={cn(s.button, s.buttonOrderModelingContainer)}
      >
        Заказать консультацию
      </button>
      <OrderConsultationModal
        open={openConsultModal}
        onClose={handleCloseModal}
      />
    </>
  );
}
