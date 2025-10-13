import React from "react";
import s from "./style.module.scss";
import { PlasticType } from "./types";
import { labels } from "@/app/config/plastic/constants";

export const PlasicItem: React.FC<{ item: PlasticType }> = ({
  item: { name, extendedName, application, descriptions, properties },
}) => {
  const subPropertiesData = Object.entries(properties);
  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
        <div className={s.name}>
          <span className={s.nameShort}>{name}</span>
          <span className={s.nameFull}>{`(${extendedName})`}</span>
        </div>
        <div className={s.descriptionContainer}>
          <span className={s.descriptionKey}>Краткое описание:</span>
          <span className={s.descriptionValue}>{descriptions}</span>
        </div>
        <div className={s.applicationContainer}>
          <span className={s.applicationKey}>Применение:</span>
          <span className={s.applicationValue}>{application}</span>
        </div>
        <div className={s.propertiesContainer}>
          <span className={s.propertiesKey}>
            Базовые технологические особенности:
          </span>
        </div>
        {subPropertiesData.map((i) => (
          <div key={i[0]} className={s.propertiesContainer}>
            <span className={s.propertiesSubKey}>
              {`- ${labels[i[0] as keyof typeof labels]}`}:
            </span>
            <span className={s.propertiesValue}>{i[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
