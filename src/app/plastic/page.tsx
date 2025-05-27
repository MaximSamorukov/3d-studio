import React from "react";
import { filaments } from "./constants";

import s from "./style.module.scss";
import { PlasicItem } from "@/UI_Components/PlasticItem";

export default function Printing3D() {
  return (
    <div className={s.container}>
      {filaments.map((i) => (
        <PlasicItem key={i.name} item={i} />
      ))}
    </div>
  );
}
