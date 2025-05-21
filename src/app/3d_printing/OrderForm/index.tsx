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

              {field.inputType === "text input" && (
                <input
                  type="text"
                  required={field.required}
                  placeholder={field.description}
                  className={s.inputField}
                />
              )}

              {field.inputType === "textarea input" && (
                <textarea
                  required={field.required}
                  placeholder={field.description}
                  className={s.textareaField}
                />
              )}

              {field.inputType === "file upload" && (
                <input
                  type="file"
                  required={field.required}
                  className={s.inputField}
                />
              )}

              {field.inputType === "selector" && (
                <select className={cn(s.inputField, s.inputSelectField)}>
                  <option>PLA</option>
                  <option>ABS</option>
                  <option>PETG</option>
                  <option>Другой</option>
                </select>
              )}

              {field.inputType === "color selector" && (
                <input type="color" className={s.colorPicker} />
              )}

              {field.inputType === "checkbox" && (
                <label className={s.checkbox}>
                  <input type="checkbox" />
                  <span>{field.description}</span>
                </label>
              )}
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
