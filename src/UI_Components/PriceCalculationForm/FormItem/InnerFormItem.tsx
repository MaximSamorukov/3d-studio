import { FormInputTypeEnum, FormItemType } from "../types";
import s from "./style.module.scss";

export const InnerFormItem: React.FC<{ field: FormItemType }> = ({ field }) => {
  const { formInputType } = field;

  switch (formInputType) {
    case FormInputTypeEnum.inputNumber:
      return (
        <div className={s.inputNumberContainer}>
          <div className={s.inputNumberItem} />
        </div>
      );
    case FormInputTypeEnum.inputText:
      return (
        <div className={s.inputTextContainer}>
          <div className={s.inputTextItem} />
        </div>
      );
    case FormInputTypeEnum.selector:
      return (
        <div className={s.inputSelectorContainer}>
          <div className={s.inputSelectorItem} />
        </div>
      );
    case FormInputTypeEnum.checkbox:
      return (
        <div className={s.checkboxContainer}>
          <div className={s.checkboxItem}>
            <div className={s.checkboxItemLabel}>Да</div>
            <div className={s.checkboxItemCheck} />
          </div>
          <div className={s.checkboxItem}>
            <div className={s.checkboxItemLabel}>Нет</div>
            <div className={s.checkboxItemCheck} />
          </div>
        </div>
      );
    case FormInputTypeEnum.textField:
      return (
        <div className={s.textFieldContainer}>
          <div className={s.textFieldItem}>
            <span>нет данных</span>
          </div>
        </div>
      );
    case FormInputTypeEnum.file:
      return (
        <div className={s.fileFieldContainer}>
          <div className={s.fileFieldItem}>
            <span>
              Ператащите сюда файл для загрузки.
              <br />
              Форматы: *.STL, *.OBJ
            </span>
          </div>
        </div>
      );
    default:
      return null;
  }
};
