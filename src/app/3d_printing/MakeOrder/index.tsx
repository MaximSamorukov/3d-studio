import { orderSteps } from "./constants";
import s from "./style.module.scss";

export const MakeOrder = () => {
  return (
    <div className={s.makeOrderContainer}>
      <div className={s.makeOrderMainLabel}>
        Как сделать заказ на 3D-печать изделий?
      </div>
      <div className={s.makeOrderStepsContainer}>
        {orderSteps.map((i) => (
          <div key={i.step} className={s.makeOrderStepContainer}>
            <div className={s.makeOrderStepHeader}>{i.step}</div>
            <div className={s.makeOrderStepBody}>{i.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
