import { PaymentDTOType } from '@/shared/types';
import crypto from 'crypto';

export function addTwoWeeksToUnix(unixTimestamp: number): string {
  const TWO_WEEKS_IN_ML_SECONDS = 14 * 24 * 60 * 60 * 1000;
  const date = new Date(unixTimestamp + TWO_WEEKS_IN_ML_SECONDS);
  return date.toISOString();
}

export function createIdempotenceKey(description: string): string {
  return crypto.createHash('sha256').update(description).digest('hex');
}

export function createDescription(
  email: string,
  price: string,
  orderId: number,
) {
  const description = `${email}-${price}-${orderId}`;
  return description;
}

export function createFetchObject(data: PaymentDTOType) {
  const { price, currency, email, orderId, date } = data as PaymentDTOType;

  const description = createDescription(email, price, orderId);
  const idempotentKey = createIdempotenceKey(description);
  const authHeader =
    'Basic ' +
    Buffer.from(
      `${process.env.YOU_KASSA_SHOP_ID!}:${process.env.YOU_KASSA_SECRET_KEY!}`,
    ).toString('base64');
  const fetchObject = {
    method: 'POST',
    headers: {
      'Idempotence-Key': idempotentKey,
      'Content-Type': 'application/json',
      Authorization: authHeader,
    },
    body: JSON.stringify({
      payment_data: {
        amount: {
          value: price,
          currency,
        },
        capture: true,
        description: `Заказа № ${orderId}`,
        metadata: {
          order_id: orderId,
        },
      },
      cart: [
        {
          description: `Заказа № ${orderId}`,
          price: {
            value: price,
            currency,
          },
          quantity: 1.0,
        },
      ],
      expires_at: addTwoWeeksToUnix(date),
    }),
  };
  return fetchObject;
}
