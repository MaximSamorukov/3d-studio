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
      await dbOrder
        .createQueryBuilder()
        .delete()
        .from(PrintOrderEntity)
        .where('id = :id', { id })
        .execute();
      return Response.json({ data: 'success' }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при удалении сущности' },
        { status: 500 },
      );
    }
  }
  if (type === 'consultation') {
    try {
      const dbConsultation = await getConsultationDataSource();
      await dbConsultation
        .createQueryBuilder()
        .delete()
        .from(ConsultationEntity)
        .where('id = :id', { id })
        .execute();

      return Response.json({ data: 'success' }, { status: 200 });
    } catch (e) {
      return Response.json(
        { error: 'Ошибка при удалении сущности' },
        { status: 500 },
      );
    }
  }
};
