import { UseControllerProps } from 'react-hook-form';
import { PaymentStatuces, Statuces } from '../constants/constants';

export type PrintOrderType = {
  color?: string | null;
  comment?: string | null;
  created_at?: string | null;
  email?: string | null;
  file_path?: string | null;
  id: number | null;
  name?: string | null;
  order_status?: Statuces | null;
  payment_status?: PaymentStatuces | null;
  phone?: string | null;
  plastic_type?: string | null;
  price?: number | null;
  with_modelling?: boolean;
  with_postprocessing?: boolean;
  invoice_url?: string | null;
};

export type PaymentDTOType = {
  price: string;
  currency: string;
  email: string;
  orderId: number;
  date: number;
};

export type PaymentType = {
  id: string;
  status: string;
  paid: boolean;
  amount: Amount;
  income_amount?: Amount;
  description?: string;
  recipient: Recipient;
  payment_method?: PaymentMethod;
  created_at: Date;
  expires_at?: Date;
  test: boolean;
  refundable: boolean;
  authorization_details?: AuthorizationDetails;
  metadata?: Metadata;
};

export type Amount = {
  value: string;
  currency: string;
};

export type AuthorizationDetails = {
  rrn: string;
  auth_code: string;
  three_d_secure: ThreeDSecure;
};

export type ThreeDSecure = {
  applied: boolean;
};

export type PaymentMethod = {
  type: string;
  id: string;
  saved: boolean;
  card: Card;
  title: string;
};

export type Card = {
  first6: string;
  last4: string;
  expiry_month: string;
  expiry_year: string;
  card_type: string;
  card_product: CardProduct;
  issuer_country: string;
  issuer_name: string;
};

export type CardProduct = {
  code: string;
  name: string;
};

export type Recipient = {
  account_id: string;
  gateway_id: string;
};

export type InvoiceType = {
  id: string;
  status: string;
  cart: Cart[];
  delivery_method: DeliveryMethod;
  payment_details?: PaymentDetails;
  created_at: Date;
  expires_at: Date;
  description: string;
  metadata: Metadata;
};

export type Cart = {
  description: string;
  price: Price;
  discount_price?: Price;
  quantity: number;
};

export type Price = {
  value: string;
  currency: string;
};

export type DeliveryMethod = {
  type: string;
  url?: string;
};

export type PaymentDetails = {
  id: string;
  status: 'waiting_for_capture' | 'succeeded' | 'canceled';
};
export type Metadata = {
  order_id?: string;
};

export enum FormInputTypeEnum {
  file = 'file',
  checkbox = 'checkbox',
  inputNumber = 'inputNumber',
  inputText = 'inputText',
  inputTextArea = 'inputTextArea',
  selector = 'selector',
  textField = 'textField',
  inputContacts = 'inputContacts',
}

export type Option = { key: string; value: string };

export type FormItemType = {
  label: string | undefined;
  placeholder: string;
  name: string;
  formInputType: FormInputTypeEnum;
  defaultValue: number | string | boolean | undefined;
  values: undefined | string | number | Option[];
  rules?: UseControllerProps['rules'];
  created_at?: string;
  id: number;
};

export type ContactFormType = {
  contact: string;
  name?: string;
  email?: string;
  created_at?: string;
  id: number;
};
