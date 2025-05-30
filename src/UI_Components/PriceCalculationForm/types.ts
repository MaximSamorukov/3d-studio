export enum FormInputTypeEnum {
  file = "file",
  checkbox = "checkbox",
  inputNumber = "inputNumber",
  inputText = "inputText",
  inputTextArea = "inputTextArea",
  selector = "selector",
  textField = "textField",
  inputContacts = "inputContacts",
}

export type Option = { key: string; value: string };

export type FormItemType = {
  label: string | undefined;
  placeholder: string;
  name: string;
  formInputType: FormInputTypeEnum;
  defaultValue: number | string | boolean | undefined;
  values: undefined | string | number | Option[];
};

export type CalculationForm = {
  plasticType: string;
  fileUpload: Blob;
  inputContacts: string;
  withModeling: boolean;
  withPostProcessing: boolean;
};

export type CalculationDataResponseType = {
  weight: string;
  plasticType: string;
  volume: string;
  printTime: string;
  price: string;
};
