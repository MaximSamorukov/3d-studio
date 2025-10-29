import { ContactFormType } from './types';
import { orderConsultation } from '@/services';

export async function orderConsultationHandler(data: ContactFormType) {
  const formData = new FormData();
  formData.append('contact', data.contact);
  formData.append('name', data.name!);
  formData.append('email', data.email!);

  const result = await orderConsultation(formData);
  return result;
}
