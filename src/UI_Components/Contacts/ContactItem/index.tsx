import React from "react";
import s from "./style.module.scss";
import Link from "next/link";
type ContactItemProps = {
  id: string;
  label: string;
  description: string;
  url?: string;
};

export const ContactItem: React.FC<ContactItemProps> = ({
  id,
  label,
  description,
  url,
}) => {
  switch (id) {
    case "telephone":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <Link href={`tel:${description}`} className={s.itemDescription}>
            {description}
          </Link>
        </div>
      );
    case "whatsapp":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <Link href={`tel:${description}`} className={s.itemDescription}>
            {description}
          </Link>
        </div>
      );
    case "email":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <Link href={`mailto:${description}`} className={s.itemDescription}>
            {description}
          </Link>
        </div>
      );
    case "telegram":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={url || ""}
            className={s.itemDescription}
          >
            {description}
          </Link>
        </div>
      );
    case "vk":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={description}
            className={s.itemDescription}
          >
            {description}
          </Link>
        </div>
      );
    case "address":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <div className={s.itemDescription}>{description}</div>
        </div>
      );

    case "map":
      return (
        <div key={id} className={s.itemContainer}>
          <div className={s.itemLabel}>{label}</div>
          <div className={s.itemDescriptionMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.882545%2C55.789066&mode=whatshere&utm_campaign=desktop&utm_medium=search&utm_source=maps&whatshere%5Bpoint%5D=37.880508%2C55.788424&whatshere%5Bzoom%5D=17&z=16.87"
              width="300"
              height="150"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
      );
  }
  return (
    <div key={id} className={s.itemContainer}>
      <div className={s.itemLabel}>{label}</div>
      <div className={s.itemDescription}>{description}</div>
    </div>
  );
};
