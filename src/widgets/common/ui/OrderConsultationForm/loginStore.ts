import { makeAutoObservable } from 'mobx';
import { ContactFormType } from './types';
import { orderConsultation } from '@/services';

class FormOrderConsultationState {
  contact = '';

  constructor() {
    makeAutoObservable(this);
  }

  setValue<K extends keyof Pick<ContactFormType, 'contact'>>(
    key: K,
    value: string,
  ) {
    this[key] = value;
  }

  async orderConsultationHandler(data: ContactFormType) {
    const formData = new FormData();
    formData.append('contact', data.contact);
    formData.append('name', data.name!);
    formData.append('email', data.email!);

    const result = await orderConsultation(formData);
    return result;
  }
}

export const formOrderConsultationState = new FormOrderConsultationState();
