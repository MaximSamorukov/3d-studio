import { createFetchObject } from './utils';
import { PaymentDTOSchema } from '@/shared/validateSchemas';
import { PrintOrderEntity } from '@/entities/order';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const rawData = await req.json();
  try {
    const data = PaymentDTOSchema.parse(rawData);
    const db = await getOrderDataSource();

    const fetchObject = createFetchObject(data);
    const rawInvoiceObject = await fetch(
      process.env.YOU_KASSA_URL_INVOICES!,
      fetchObject,
    );
    const invoiceObject = await rawInvoiceObject.json();

    if (!rawInvoiceObject.ok) {
      return NextResponse.json(invoiceObject, {
        status: rawInvoiceObject.status,
      });
    }
    const result = await db
      .createQueryBuilder()
      .update(PrintOrderEntity)
      .set({
        invoice_url: invoiceObject?.delivery_method?.url || null,
        invoice_id: invoiceObject?.id || null,
      })
      .where('id = :id', { id: data.orderId })
      .execute();
    if (result.affected === 0) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    return NextResponse.json(invoiceObject);
  } catch (_) {
    return NextResponse.json(
      { error: 'Invoice object creation error' },
      { status: 500 },
    );
  }
}
