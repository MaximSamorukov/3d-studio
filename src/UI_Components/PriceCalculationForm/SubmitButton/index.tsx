import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

export const SubmitButton = () => {
  return <button className={cn(s.button, s.buttonSubmit)}>Расчитать</button>;
};
