import React from "react";
import s from "./style.module.scss";
import { payments } from "./constants";

export const Payments = () => {
  return (
    <div className={s.container}>
      <div className={s.headerContainer}>
        <div className={s.headerLabel}>Оплата</div>
      </div>
      <div className={s.bodyContainer}>
        {payments.map(({ id, label, description }) => (
          <div key={id} className={s.itemContainer}>
            <div className={s.itemLabel}>{label}</div>
            <div className={s.itemDescription}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
