import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

export const SubmitButton = () => {
  return (
    <input
      className={cn(s.button, s.buttonSubmit)}
      type="submit"
      value="Расчитать"
    />
  );
};
