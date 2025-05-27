import React from "react";
import s from "./style.module.scss";
import { PlasticType } from "./types";

export const PlasicItem: React.FC<{ item: PlasticType }> = ({
  item: { name, extendedName, application, descriptions },
}) => {
  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
        <div className={s.name}>
          <span className={s.nameShort}>{name}</span>
          <span className={s.nameFull}>{`(${extendedName})`}</span>
        </div>
        <div className={s.applicationContainer}>
          <span className={s.applicationKey}>Краткое описание:</span>
          <span className={s.applicationValue}>{descriptions}</span>
        </div>
        <div className={s.applicationContainer}>
          <span className={s.applicationKey}>Применение:</span>
          <span className={s.applicationValue}>{application}</span>
        </div>
      </div>
    </div>
  );
};
