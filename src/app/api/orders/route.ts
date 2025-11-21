import { PrintOrderEntity } from '@/entities/order';
import { getOrderDataSource } from '@/shared/db/orders';
import { NextResponse } from 'next/server';
// export const runtime = 'nodejs';

export const DELETE = async (request: Request) => {
  const data = await request.json();
  const { id } = (data || {}) as {
    id: number;
  };
  if (!id) {
    return NextResponse.json({ error: 'Отсутсвует id' }, { status: 500 });
  }
  const db = await getOrderDataSource();
  const repository = db.getRepository(PrintOrderEntity);
  try {
    const orderToRemove = await repository.findOneBy({ id });
    if (!orderToRemove) {
      return NextResponse.json(
        { error: 'Отсутсвует сущность с предоставленным id' },
        { status: 500 },
      );
    }
    await repository.remove(orderToRemove);
    return new NextResponse(null, { status: 204 });
  } catch (_) {
    return NextResponse.json({ error: 'Ошибка удаления' }, { status: 500 });
  }
};
