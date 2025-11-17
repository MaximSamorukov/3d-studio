import z from 'zod';

export const PaymentDTOSchema = z.object({
  price: z.string(),
  currency: z.string(),
  email: z.email({
    pattern: z.regexes.email,
    message: 'Неверный формат email',
  }),
  orderId: z.number(),
  date: z.number(),
});
