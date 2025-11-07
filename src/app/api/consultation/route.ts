import { ConsultationEntity } from '@/entities/consultation';
import { getConsultationDataSource } from '@/shared/common/db/consultations';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    const consultFormData = await request.formData();
    const db = await getConsultationDataSource();
    const repository = db.getRepository(ConsultationEntity);
    const contact = consultFormData.get('contact')?.toString() ?? '';
    const name = consultFormData.get('name')?.toString() ?? '';
    const email = consultFormData.get('email')?.toString() ?? '';

    const data = repository.create({
      contact,
      name,
      email,
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

export const DELETE = async (request: Request) => {
  const data = await request.json();
  const { id } = (data || {}) as {
    id: number;
  };
  if (!id) {
    return NextResponse.json({ error: 'Отсутсвует id' }, { status: 500 });
  }
  const db = await getConsultationDataSource();
  const repository = db.getRepository(ConsultationEntity);
  try {
    const consultationToRemove = await repository.findOneBy({ id });
    if (!consultationToRemove) {
      return NextResponse.json(
        { error: 'Отсутсвует сущность с предоставленным id' },
        { status: 500 },
      );
    }
    await repository.remove(consultationToRemove);
    return new NextResponse(null, { status: 204 });
  } catch (_) {
    return NextResponse.json({ error: 'Ошибка удаления' }, { status: 500 });
  }
};
