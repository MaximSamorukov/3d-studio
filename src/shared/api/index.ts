import { MaterialType } from '@/shared/state/materials/state';
import { ServiceType } from '@/shared/state/services/state';
import { User } from 'next-auth';

export const calculatePrintPrice = (data: FormData) => {
  return fetch('/api/calculate', {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};

export const login = (data: { login: string; password: string }) => {
  return fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};

export const orderConsultation = (data: FormData) => {
  return fetch('/api/consultation', {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      return true;
    })
    .catch(() => false);
};

export const makeOrder = (data: FormData) => {
  return fetch('/api/makeOrder', {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch(() => ({}));
};

export const checkUser = async (data: { login: string; password: string }) => {
  const { login, password } = data;
  const user = {
    login,
    password,
  } as User;
  const url = process.env.SERVER_URL + '/api/check-user';
  try {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
    });
    if (result.status === 200) {
      return await result.json();
    } else {
      return false;
    }
  } catch (e) {
    console.log('Error', e);
    return false;
  }
};

export const removeConsultation = (id: number) => {
  return fetch('/api/consultation', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  })
    .then((res) => {
      return true;
    })
    .catch(() => false);
};

export const removeOrder = (id: number) => {
  return fetch('/api/orders', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  })
    .then((res) => {
      return true;
    })
    .catch(() => false);
};

export const getMaterials = (): Promise<{ materials: MaterialType[] }> => {
  return fetch('/api/crm/materials')
    .then(async (res) => {
      const json = await res.json();
      if (!res.ok) throw json;
      return json;
    })
    .catch((e) => {
      throw e;
    });
};

export const getServices = (): Promise<{ services: ServiceType[] }> => {
  return fetch('/api/crm/services').then(async (res) => {
    const json = await res.json();
    if (!res.ok) throw json;
    return json;
  });
};

export const adminRegister = (data: { login: string; password: string }) => {
  return fetch('/api/admin_register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (res) => {
    const json = await res.json();
    if (!res.ok) throw json;
    return json;
  });
};
export async function getConsultationsOnEmail(email: string) {
  try {
    const result = fetch('/api/consultation/list', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    return (await result).json();
  } catch (e) {
    console.log('error getting consultations', e);
    return [];
  }
}

export async function getOrdersOnEmail(email: string) {
  try {
    const result = fetch('/api/orders/list', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    return (await result).json();
  } catch (e) {
    console.log('error getting orders', e);
    return [];
  }
}
import { InvoiceType, PaymentDTOType, PaymentType } from '@/shared/types/types';
import { PaymentDTOSchema } from '@/shared/schemas/validateSchemas';
import * as z from 'zod';

export type CreatePaymentError =
  | { type: 'validation'; issues: z.ZodIssue[] }
  | { type: 'network'; message: string };

type CreatePaymentResult = PaymentType | CreatePaymentError;

export const createPayment = async (
  data: PaymentDTOType,
): Promise<CreatePaymentResult> => {
  try {
    PaymentDTOSchema.parse(data);
    const rawPaymentObject = await fetch('/api/payment/confirmation_url', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!rawPaymentObject.ok) {
      return {
        type: 'network',
        message: `Ошибка API: ${rawPaymentObject.status}`,
      };
    }
    const paymentObject = await rawPaymentObject.json();
    return paymentObject;
  } catch (e) {
    if (e instanceof z.ZodError) {
      return {
        type: 'validation',
        issues: e.issues,
      };
    } else {
      return {
        type: 'network',
        message: 'Ошибка функции createPayment',
      };
    }
  }
};

export type CreateInvoiceError =
  | { type: 'validation'; issues: z.ZodIssue[] }
  | { type: 'network'; message: string };

type CreateInvoiceResult = InvoiceType | CreateInvoiceError;

export const createInvoice = async (
  data: PaymentDTOType,
): Promise<CreateInvoiceResult> => {
  try {
    PaymentDTOSchema.parse(data);
    const rawInvoiceObject = await fetch('/api/invoice/confirmation_url', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!rawInvoiceObject.ok) {
      return {
        type: 'network',
        message: `Ошибка API: ${rawInvoiceObject.status}`,
      };
    }
    const invoiceObject = (await rawInvoiceObject.json()) as InvoiceType;
    return invoiceObject;
  } catch (e) {
    if (e instanceof z.ZodError) {
      return {
        type: 'validation',
        issues: e.issues,
      };
    } else {
      return {
        type: 'network',
        message: 'Ошибка функции createPayment',
      };
    }
  }
};
