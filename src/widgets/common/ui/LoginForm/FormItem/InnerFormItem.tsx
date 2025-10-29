import { FormInputTypeEnum, FormItemType } from '../types';
import { InputNumber } from './InputNumber';
import { InputSelect } from './InputSelect';
import { InputText } from './InputText';
import { InputCheckbox } from './InputCheckbox';
import { TextField } from './TextField';
import { InputFile } from './InputFile';
import { InputContacts } from './InputContacts';
import { InputPassword } from './InputPassword';

export const InnerFormItem: React.FC<{
  field: FormItemType;
}> = ({ field }) => {
  const { formInputType } = field;

  switch (formInputType) {
    case FormInputTypeEnum.inputNumber:
      return <InputNumber field={field} />;
    case FormInputTypeEnum.inputContacts:
      return <InputContacts field={field} />;
    case FormInputTypeEnum.inputText:
      return <InputText field={field} />;
    case FormInputTypeEnum.password:
      return <InputPassword field={field} />;
    case FormInputTypeEnum.selector:
      return <InputSelect field={field} />;
    case FormInputTypeEnum.checkbox:
      return <InputCheckbox field={field} />;
    case FormInputTypeEnum.textField:
    //return <TextField />;
    case FormInputTypeEnum.file:
      return <InputFile field={field} />;
    default:
      return null;
  }
};
