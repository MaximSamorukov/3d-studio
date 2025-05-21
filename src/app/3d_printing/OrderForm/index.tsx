import cn from "classnames";
import { fields } from "./constants";
import s from "./style.module.scss";

export const OrderForm = () => {
  return (
    <div className={s.orderFormContainer}>
      <form className={s.orderForm}>
        {fields.map((field, i) => {
          return (
            <div key={i} className={s.formGroup}>
              <label className={s.label}>
                {field.label}
                {field.required && <span className={s.required}>*</span>}
              </label>
              <input
                type="text"
                required={field.required}
                placeholder={field.description}
                className={s.inputField}
              />
              <textarea
                required={field.required}
                placeholder={field.description}
                className={s.textareaField}
              />
              <input
                type="file"
                required={field.required}
                className={s.inputField}
              />
              <select className={cn(s.inputField, s.inputSelectField)}>
                <option>PLA</option>
                <option>ABS</option>
                <option>PETG</option>
                <option>Другой</option>
              </select>
              <input type="color" className={s.colorPicker} />
              <label className={s.checkbox}>
                <input type="checkbox" />
                <span>{field.description}</span>
              </label>
            </div>
          );
        })}

        <button type="submit" className={s.submitBtn}>
          <div className={s.makeOrderBtnLabel}>Отправить заявку</div>
        </button>
      </form>
    </div>
  );
};
