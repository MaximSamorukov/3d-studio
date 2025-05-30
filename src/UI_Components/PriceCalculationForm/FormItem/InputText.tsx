import React from "react";
import { FormItemType } from "../types";
import s from "./style.module.scss";

export const InputText = ({ field }: { field: FormItemType }) => {
  console.log(field);
  return (
    <div className={s.inputTextContainer}>
      <div className={s.inputTextItem} />
    </div>
  );
};
