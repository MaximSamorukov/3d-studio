import { OrderFormFields } from '@/shared/common/OrderForm';
import { removeConsultation, removeOrder } from '@/shared/api';
import {
  getConsultationsOnEmail,
  getOrdersOnEmail,
} from '@/features/CRMEnterButton/utils';
import { ContactFormType } from '@/shared/types';
import { action, makeAutoObservable, runInAction } from 'mobx';
import { PrintOrderType } from '../../types';

export type OrderType = Omit<OrderFormFields, 'file' | 'plasticType'> & {
  file_path?: string;
  plastic_type?: string;
};

type UserStateType = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  orders?: PrintOrderType[];
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
  setOrders(data: PrintOrderType[]) {
    this.orders = data;
  }
  async getUserOrders() {
    if (this.email) {
      runInAction(() => {
        this.loading = true;
      });

      try {
        const [consultationsRes, ordersRes] = await Promise.allSettled([
          getConsultationsOnEmail(this.email),
          getOrdersOnEmail(this.email),
        ]);

        runInAction(() => {
          if (consultationsRes.status === 'fulfilled') {
            this.setConsultations(consultationsRes.value.consultations);
          }

          if (ordersRes.status === 'fulfilled') {
            this.setOrders(ordersRes.value.orders);
          }

          this.loading = false;
        });
      } catch {
        runInAction(() => {
          this.loading = false;
        });
      }
    }
  }
  get isAuthorized() {
    return !!this.email;
  }

  removeConsultationById(id: number) {
    runInAction(() => {
      this.loading = true;
    });
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
    runInAction(() => {
      this.loading = true;
    });
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
