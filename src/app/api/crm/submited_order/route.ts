import { PrintOrderEntity } from '@/entities/order/index';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';

export const POST = async (request: Request) => {
  const data = await request.json();
  const { id, type } = data;
  if (type === 'print_order') {
    try {
      const dbOrder = await getOrderDataSource();
      const orderRepository = dbOrder.getRepository(PrintOrderEntity);
      const queryString = `SELECT * FROM print_orders where id=${id}`;
      const result = await orderRepository.query(queryString);
      return Response.json({ data: result[0] }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при получении заказа' },
        { status: 500 },
      );
    }
  }
  if (type === 'consultation') {
    try {
      const dbConsultation = await getConsultationDataSource();
      const consultRepository =
        dbConsultation.getRepository(ConsultationEntity);
      const queryString = `SELECT * FROM consultations where id=${id}`;
      const result = await consultRepository.query(queryString);
      return Response.json({ data: result[0] }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при получении консультации' },
        { status: 500 },
      );
    }
  }
};
