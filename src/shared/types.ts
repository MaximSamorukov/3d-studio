import { Statuces } from './constants';

export type PrintOrderType = {
  color?: string | null;
  comment?: string | null;
  created_at?: string | null;
  email?: string | null;
  file_path?: string | null;
  id: number | null;
  name?: string | null;
  order_status?: Statuces | null;
  payment_status?: 'paid' | 'not_paid' | null;
  phone?: string | null;
  plastic_type?: string | null;
  price?: number | null;
  with_modelling?: boolean;
  with_postprocessing?: boolean;
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

export type Metadata = {};

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
