import { PrintOrderEntity } from '@/entities/order/index';
import { getOrderDataSource } from '@/shared/db/orders';
import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/db/consultations';

export const POST = async (request: Request) => {
  const data = await request.json();
  const { id, type, fields } = data;

  if (type === 'print_order') {
    try {
      const dbOrder = await getOrderDataSource();
      await dbOrder
        .createQueryBuilder()
        .update(PrintOrderEntity)
        .set(fields)
        .where('id = :id', { id })
        .execute();
      return Response.json({ data: 'success' }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при сохранения изменений' },
        { status: 500 },
      );
    }
  }
  if (type === 'consultation') {
    try {
      const dbConsultation = await getConsultationDataSource();
      await dbConsultation
        .createQueryBuilder()
        .update(ConsultationEntity)
        .set(fields)
        .where('id = :id', { id })
        .execute();

      return Response.json({ data: 'success' }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при сохранения изменений' },
        { status: 500 },
      );
    }
  }
};
