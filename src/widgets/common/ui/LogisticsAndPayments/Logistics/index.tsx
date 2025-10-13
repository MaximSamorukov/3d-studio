import React from "react";
import s from "./style.module.scss";
import { logistics } from "./constants";

export const Logistics = () => {
  return (
    <div className={s.container}>
      <div className={s.headerContainer}>
        <div className={s.headerLabel}>Доставка</div>
      </div>
      <div className={s.bodyContainer}>
        {logistics.map(({ id, label, description }) => (
          <div key={id} className={s.itemContainer}>
            <div className={s.itemLabel}>{label}</div>
            <div className={s.itemDescription}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
