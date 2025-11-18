import { createDescription, createIdempotenceKey } from './utils';
import { PaymentDTOType } from '@/shared/types';
import { PaymentDTOSchema } from '@/shared/validateSchemas';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const {
      price,
      currency,
      email,
      orderId,
      date: _date,
    } = data as PaymentDTOType;

    PaymentDTOSchema.parse(data);

    const description = createDescription(email, price, orderId);
    const idempotentKey = createIdempotenceKey(description);
    const authHeader =
      'Basic ' +
      Buffer.from(
        `${process.env.YOU_KASSA_SHOP_ID!}:${process.env
          .YOU_KASSA_SECRET_KEY!}`,
      ).toString('base64');
    const fetchObject = {
      method: 'POST',
      headers: {
        'Idempotence-Key': idempotentKey,
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify({
        amount: {
          value: price,
          currency,
        },
        capture: true,
        confirmation: {
          type: 'redirect',
          return_url: process.env.SERVER_URL! + '/',
        },
        description,
      }),
    };
    const rawPaymentObject = await fetch(
      process.env.YOU_KASSA_URL!,
      fetchObject,
    );
    const paymentObject = await rawPaymentObject.json();

    if (!rawPaymentObject.ok) {
      return NextResponse.json(paymentObject, {
        status: rawPaymentObject.status,
      });
    }
    return NextResponse.json(paymentObject);
  } catch (_) {
    return NextResponse.json(
      { error: 'Payment object creation error' },
      { status: 500 },
    );
  }
}
