import React from "react";
import Image from "next/image";
import s from "./style.module.scss";

export const UnderWork = () => {
  return (
    <div className={s.container}>
      <Image
        className={s.image}
        src="/under_construction.png"
        width={250}
        height={250}
        alt="Site is under construction"
      />
      <span>The site is under construction</span>
    </div>
  );
};
