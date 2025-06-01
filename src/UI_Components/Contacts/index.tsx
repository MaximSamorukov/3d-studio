import React from "react";
import s from "./style.module.scss";
import { contacts } from "./contacts";

export const Contacts = () => {
  return (
    <div className={s.container}>
      <div className={s.headerContainer}>
        <div className={s.headerLabel}>Контакты</div>
      </div>
      <div className={s.bodyContainer}>
        {contacts.map(({ id, label, description }) => (
          <div key={id} className={s.itemContainer}>
            <div className={s.itemLabel}>{label}</div>
            <div className={s.itemDescription}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
