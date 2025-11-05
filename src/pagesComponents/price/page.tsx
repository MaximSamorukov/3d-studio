import React from "react";
import { PriceCalculationForm } from "@/widgets/common/ui/PriceCalculationForm";
import s from "./style.module.scss";

export function PricePage() {
  return (
    <div className={s.container}>
      <PriceCalculationForm />
    </div>
  );
}
