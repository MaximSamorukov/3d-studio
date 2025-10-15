"use client";
import cn from "classnames";
import s from "./style.module.scss";
import { OrderConsultationButton } from "../OrderConsultationButton";

export default function ActionPanel() {
  const handleScroll = () => {
    const el = document.getElementById("order_form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={s.container}>
      <button
        onClick={handleScroll}
        className={cn(s.button, s.buttonOrderPrintingContainer)}
      >
        Заказать 3D-печать
      </button>
      <OrderConsultationButton />
    </div>
  );
}
