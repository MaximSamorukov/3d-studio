import { PrintOrderEntity } from '@/entities/order/index';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';
import { getObject } from './utils';

export const POST = async (request: Request) => {
  const data = await request.json();
  const { page, perPage, type, email, phone, plastic_type } = data;

  if (type === 'print_order') {
    try {
      const dbOrder = await getOrderDataSource();
      const orderRepository = dbOrder.getRepository(PrintOrderEntity);
      const offset = (page - 1) * perPage;
      const limit = perPage;
      const whereStr = [
        getObject({ email }),
        getObject({ phone }),
        getObject({ plastic_type }),
      ]
        .filter((i) => !!i.value)
        .map((i) => `${i.key}='${i.value}'`)
        .join(' and ')
        .trim();
      const where = whereStr.length ? `WHERE ${whereStr}` : '';
      const queryString = `SELECT * FROM print_orders ${where} LIMIT ${limit} OFFSET ${offset}`;
      const result = await orderRepository.query(queryString);
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
        `SELECT * FROM consultations LIMIT ${limit} OFFSET ${offset}`,
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
