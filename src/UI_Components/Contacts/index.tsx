import React from "react";
import s from "./style.module.scss";
import { contacts } from "./contacts";
import { ContactItem } from "./ContactItem";

export const Contacts = () => {
  return (
    <div className={s.container}>
      <div className={s.headerContainer}>
        <div className={s.headerLabel}>Контакты</div>
      </div>
      <div className={s.bodyContainer}>
        {contacts.map(({ id, label, description, url }) => (
          <ContactItem
            key={id}
            id={id}
            label={label}
            description={description}
            url={url}
          />
        ))}
      </div>
    </div>
  );
};
