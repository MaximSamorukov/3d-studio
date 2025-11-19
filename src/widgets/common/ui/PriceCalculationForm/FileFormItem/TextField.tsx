"use client";
import React from "react";
import s from "./style.module.scss";
import { technicalData } from "../constants";
import { formCalculationState } from "../formCalculationStore";
import { observer } from "mobx-react-lite";

export const TextField = observer(() => {
  const data = {
    weight: formCalculationState.weight,
    volume: formCalculationState.volume,
    time: formCalculationState.printTime,
    price: formCalculationState.price,
  };
  return (
    <div className={s.textFieldContainer}>
      {technicalData.map((i) => (
        <div key={i.key} className={s.textFieldRow}>
          <div className={s.textFieldRowKey}>
            <span>{`${i.label}, ${i.units}`}</span>
          </div>
          <div className={s.textFieldRowValue}>
            <span>{data[i.key as keyof typeof data] || "нет данных"}</span>
          </div>
        </div>
      ))}
    </div>
  );
});
