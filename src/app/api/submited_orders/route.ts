import { PrintOrderEntity } from '@/entities/order/index';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';

export const POST = async (request: Request) => {
  const data = await request.json();
  const { page, perPage, type } = data;
  console.log(page, perPage, type);
  if (type === 'print_order') {
    try {
      const dbOrder = await getOrderDataSource();
      const orderRepository = dbOrder.getRepository(PrintOrderEntity);
      const offset = (page - 1) * perPage;
      const limit = perPage;
      const result = await orderRepository.query(
        `SELECT * FROM print_orders OFFSET ${offset} LIMIT ${limit}`,
      );
      return Response.json({ orders: result }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при получении списка заказов' },
        { status: 500 },
      );
    }
  }
  if (type === 'consultation') {
    try {
      const dbConsultation = await getConsultationDataSource();
      const consultRepository =
        dbConsultation.getRepository(ConsultationEntity);
      const offset = (page - 1) * perPage;
      const limit = perPage;
      const result = await consultRepository.query(
        `SELECT * FROM consultations OFFSET ${offset} LIMIT ${limit}`,
      );
      return Response.json({ orders: result }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при получении списка консультаций' },
        { status: 500 },
      );
    }
  }
};
