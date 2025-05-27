import React from "react";
import { PriceCalculationForm } from "@/UI_Components/PriceCalculationForm";
import s from "./style.module.scss";

export default function Price() {
  return (
    <div className={s.container}>
      <PriceCalculationForm />
    </div>
  );
}
