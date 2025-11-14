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
