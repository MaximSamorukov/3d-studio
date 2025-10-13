import s from "./style.module.scss";

export const MakeOrderButton = () => {
  return (
    <div className={s.makeOrderBtn}>
      <button className={s.makeOrderBtnContainer}>
        <div className={s.makeOrderBtnLabel}>Заказать 3D-печать</div>
      </button>
    </div>
  );
};
