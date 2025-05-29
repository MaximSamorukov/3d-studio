import React from "react";
import s from "./style.module.scss";

export const TextField = () => {
  return (
    <div className={s.textFieldContainer}>
      <div className={s.textFieldItem}>
        <span>нет данных</span>
      </div>
    </div>
  );
};
