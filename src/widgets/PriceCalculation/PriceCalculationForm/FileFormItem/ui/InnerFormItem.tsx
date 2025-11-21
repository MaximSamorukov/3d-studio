import {
  FormInputTypeEnum,
  FormItemType,
} from '@/shared/common/FormItem/types';
import { Input3DFile } from './Input3DFile';
import { TextField } from './TextField';

export const InnerFormItem: React.FC<{
  field: FormItemType;
}> = ({ field }) => {
  const { formInputType } = field;

  switch (formInputType) {
    case FormInputTypeEnum.textField:
      return <TextField />;
    case FormInputTypeEnum.file:
      return <Input3DFile field={field} />;
    default:
      return null;
  }
};
