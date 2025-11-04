import { OrderFormFields } from '@/pages/3dPrinting/OrderForm';
import { removeConsultation, removeOrder } from '@/services';
import {
  getConsultationsOnEmail,
  getOrdersOnEmail,
} from '@/widgets/common/ui/CRMEnterButton/utils';
import { ContactFormType } from '@/widgets/common/ui/OrderConsultationForm/types';
import { action, makeAutoObservable } from 'mobx';

export type OrderType = Omit<OrderFormFields, 'file' | 'plasticType'> & {
  file_path?: string;
  plastic_type?: string;
};

type UserStateType = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  orders?: OrderType[];
  consultations?: ContactFormType[];
  role?: 'admin' | 'customer' | null;
};
class UserState {
  id: UserStateType['id'] = null;
  name: UserStateType['name'] = null;
  email: UserStateType['email'] = null;
  image: UserStateType['image'] = null;
  role: UserStateType['role'] = 'customer';
  orders: UserStateType['orders'] = [];
  consultations: UserStateType['consultations'] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: UserStateType) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.image = data.image;
  }

  removeUserFromState() {
    this.id = null;
    this.name = null;
    this.email = null;
    this.image = null;
    this.role = null;
    this.orders = [];
    this.consultations = [];
  }

  setConsultations(data: ContactFormType[]) {
    this.consultations = data;
  }
  setOrders(data: Omit<OrderType, 'file' | 'plasticType'>[]) {
    this.orders = data;
  }

  get isAuthorized() {
    return !!this.email;
  }

  removeConsultationById(id: number) {
    this.loading = true;
    removeConsultation(id).then(
      () => {
        if (this.email) {
          return getConsultationsOnEmail(this.email).then(
            action('update consultations', (data) => {
              this.loading = false;
              this.consultations = data.consultations;
            }),
            action('update consultations error', () => {
              this.loading = false;
              this.consultations = [];
            }),
          );
        }
      },
      () => {
        console.log('Ошибка удаления консультации');
      },
    );
  }
  removeOrderById(id: number) {
    this.loading = true;
    removeOrder(id).then(
      () => {
        if (this.email) {
          return getOrdersOnEmail(this.email).then(
            action('update orders', (data) => {
              this.loading = false;
              this.orders = data.orders;
            }),
            action('update orders error', () => {
              this.loading = false;
              this.orders = [];
            }),
          );
        }
      },
      () => {
        console.log('Ошибка удаления заказа');
      },
    );
  }
}

export const userState = new UserState();
