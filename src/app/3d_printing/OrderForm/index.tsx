import cn from "classnames";
import s from "./style.module.scss";

export const OrderForm = () => {
  return (
    <div className={s.orderFormContainer}>
      <form className={s.orderForm}>
        <div className={s.orderFormHeaderLabel}>Напишите нам</div>
        <div className={s.formGroup}>
          <div className={s.gridItem1}>
            <label className={s.label}>Файл</label>
            <input
              min={0}
              max={20}
              multiple
              type="file"
              className={s.inputField}
            />
          </div>
          <div className={s.gridItem3}>
            <label className={s.label}>
              Имя
              <span className={s.required}>*</span>
            </label>
            <input type="text" placeholder="Имя" className={s.inputField} />
          </div>

          <div className={s.gridItem5}>
            <label className={s.label}>
              Телефон
              <span className={s.required}>*</span>
            </label>
            <input type="text" placeholder="Телефон" className={s.inputField} />
          </div>

          <div className={s.gridItem7}>
            <label className={s.label}>
              Email
              <span className={s.required}>*</span>
            </label>
            <input type="text" placeholder="Email" className={s.inputField} />
          </div>

          <div className={s.gridItem2}>
            <label className={s.label}>Тип пластика</label>
            <select className={cn(s.inputField, s.inputSelectField)}>
              <option>PLA</option>
              <option>PETG</option>
              <option>ABS</option>
              <option>TPU</option>
              <option>PA</option>
              <option>HIPS</option>
              <option defaultChecked>Требуется консультация</option>
            </select>
          </div>

          <div className={s.gridItem4}>
            <label className={s.label}>Цвет изделия</label>
            <input type="color" className={s.colorPicker} />
          </div>

          <div className={s.gridItem6}>
            <label className={s.label}>Требуется постобработка</label>
            <select className={cn(s.inputField, s.inputSelectField)}>
              <option>Да</option>
              <option>Нет</option>
              <option>Требуется консультация</option>
            </select>
          </div>
          <div className={s.gridItem8}>
            <label className={s.label}>Комментарии</label>
            <textarea placeholder="Комментарии" className={s.textareaField} />
          </div>

          <button type="submit" className={s.submitBtn}>
            <div className={s.makeOrderBtnLabel}>Заказать 3D-печать</div>
          </button>
        </div>
      </form>
    </div>
  );
};
