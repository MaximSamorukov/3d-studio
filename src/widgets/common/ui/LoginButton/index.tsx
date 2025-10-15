"use client";
import Image from "next/image";
import cn from "classnames";
import s from "./style.module.scss";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ModalComponent } from "@/shared/common/Modal";
import { LoginForm } from "../LoginForm";

export const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div className={s.itemContainer}>
      <button onClick={handleOpenModal} className={cn(s.unset, s.itemIcon)}>
        <Image src="/login_icon.svg" width={24} height={24} alt="login_icon" />
      </button>
      <button onClick={handleOpenModal} className={cn(s.unset, s.itemLabel)}>
        <span>Вход</span>
      </button>
      <ModalComponent
        onClose={handleCloseModal}
        open={open}
        withControl={false}
      >
        <LoginForm />
      </ModalComponent>
    </div>
  );
};
