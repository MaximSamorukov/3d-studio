import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

export const SubmitButton = ({ label }: { label?: string }) => {
  return (
    <input
      className={cn(s.button, s.buttonSubmit)}
      type="submit"
      value={label || "Расчитать"}
    />
  );
};
