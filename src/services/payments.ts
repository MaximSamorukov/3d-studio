import { InvoiceType, PaymentDTOType, PaymentType } from '@/shared/types';
import { PaymentDTOSchema } from '@/shared/validateSchemas';
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
