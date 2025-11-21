import { ContactFormType } from '@/shared/types/types';
import { orderConsultation } from '@/shared/api';

export async function orderConsultationHandler(data: ContactFormType) {
  const formData = new FormData();
  formData.append('contact', data.contact);
  formData.append('name', data.name!);
  formData.append('email', data.email!);

  const result = await orderConsultation(formData);
  return result;
}
