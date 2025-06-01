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
        <div className={s.bodyContainerColumnFirst}>
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
        <div className={s.bodyContainerColumnSecond}>
          <ContactItem
            id="address"
            label="Адрес студии 3D печати:"
            description="Балашиха, ул. Ситникова, 4, пом. 11"
          />
          <div className={s.workingScheduleContainer}>
            <div className={s.workingScheduleHeader}>Время работы студии:</div>
            <div className={s.workingScheduleBody}>
              <div className={s.workingScheduleItem}>
                Пн-Пт 9:00 - 19:00 (для посещения)
              </div>
              <div className={s.workingScheduleItem}>
                Пн-Пт 9:00 - 19:00 (для расчетов)
              </div>
              <div className={s.workingScheduleItem}>
                Сб-Вс по-договоренности
              </div>
            </div>
          </div>
          <ContactItem
            id="map"
            label="Адрес студии 3D печати:"
            description="Балашиха, ул. Ситникова, 4, пом. 11"
          />
        </div>
      </div>
    </div>
  );
};
