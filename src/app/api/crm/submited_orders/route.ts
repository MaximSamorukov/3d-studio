import { PrintOrderEntity } from '@/entities/order/index';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';
import { getObject, getWhereString } from './utils';

export const POST = async (request: Request) => {
  const data = await request.json();
  const {
    page,
    perPage,
    type,
    email,
    phone,
    plastic_type,
    created_at,
    order_status,
  } = data;

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
        getObject({ created_at }),
        getObject({ order_status }),
      ]
        .filter((i) => !!i.value)
        .map(getWhereString)
        .join(' and ')
        .trim();

      const where = whereStr.length ? `WHERE ${whereStr}` : '';
      const queryString = `SELECT * FROM print_orders ${where} order by created_at desc LIMIT ${limit} OFFSET ${offset}`;
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
      const whereStr = [
        getObject({ email }),
        getObject({ contact: phone }),
        getObject({ created_at }),
        getObject({ order_status }),
      ]
        .filter((i) => !!i.value)
        .map(getWhereString)
        .join(' and ')
        .trim();
      const where = whereStr.length ? `WHERE ${whereStr}` : '';
      const queryString = `SELECT * FROM consultations ${where} order by created_at desc LIMIT ${limit} OFFSET ${offset}`;
      const result = await consultRepository.query(queryString);
      return Response.json({ orders: result }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при получении списка консультаций' },
        { status: 500 },
      );
    }
  }
};
