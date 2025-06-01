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
  }
  return (
    <div key={id} className={s.itemContainer}>
      <div className={s.itemLabel}>{label}</div>
      <div className={s.itemDescription}>{description}</div>
    </div>
  );
};
