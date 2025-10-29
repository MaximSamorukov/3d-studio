import { PrintOrderEntity } from '@/entities/order/index';
import { getOrderDataSource } from '@/shared/common/db/orders';

export const POST = async (request: Request) => {
  try {
    const userData = await request.json();
    const db = await getOrderDataSource();
    const repository = db.getRepository(PrintOrderEntity);
    const { email } = userData;

    const data = await repository.find({
      where: {
        email,
      },
    });
    return Response.json({ orders: data }, { status: 200 });
  } catch (e) {
    return Response.json(
      { error: 'Ошибка при получении списка заказов' },
      { status: 500 },
    );
  }
};
