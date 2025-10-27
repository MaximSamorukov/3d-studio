import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';

export const POST = async (request: Request) => {
  try {
    const consultFormData = await request.formData();
    const db = await getConsultationDataSource();
    const repository = db.getRepository(ConsultationEntity);
    const contact = consultFormData.get('contact')?.toString() ?? '';
    const data = repository.create({
      contact,
    });
    await repository.save(data);
    return Response.json(
      { message: 'Запрос на консультацию сохранен' },
      { status: 201 },
    );
  } catch (e) {
    return Response.json(
      { error: 'Ошибка при сохранении запроса на консультацию' },
      { status: 500 },
    );
  }
};
