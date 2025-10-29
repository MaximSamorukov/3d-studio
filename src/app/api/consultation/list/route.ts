import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';

export const POST = async (request: Request) => {
  try {
    const userData = await request.json();
    const db = await getConsultationDataSource();
    const repository = db.getRepository(ConsultationEntity);
    const { email } = userData;

    const data = await repository.find({
      where: {
        email,
      },
    });
    return Response.json({ consultations: data }, { status: 200 });
  } catch (e) {
    return Response.json(
      { error: 'Ошибка при получении консультаций' },
      { status: 500 },
    );
  }
};
