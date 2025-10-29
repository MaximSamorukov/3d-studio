'use client';
import { OrderFormFields } from '@/pages/3dPrinting/OrderForm';
import { ContactFormType } from '@/widgets/common/ui/OrderConsultationForm/types';
import { makeAutoObservable } from 'mobx';

type UserStateType = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  orders?: OrderFormFields[];
  consultations?: ContactFormType[];
  role?: 'admin' | 'customer';
};
class UserState {
  id: UserStateType['id'] = null;
  name: UserStateType['name'] = null;
  email: UserStateType['email'] = null;
  image: UserStateType['image'] = null;
  role: UserStateType['role'] = 'customer';
  orders: UserStateType['orders'] = [];
  consultations: UserStateType['consultations'] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: UserStateType) {
    console.log(data);
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
    this.role = 'customer';
    this.orders = [];
    this.consultations = [];
  }

  setConsultations(data: ContactFormType[]) {
    this.consultations = data;
  }

  setOrders(data: OrderFormFields[]) {
    this.orders = data;
  }

  get isAuthorized() {
    return !!this.email;
  }
}

export const userState = new UserState();
