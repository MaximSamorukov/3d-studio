import { ServicesEntity } from '@/entities/services';
import { getServicesDataSource } from '@/shared/common/db/services';

export const GET = async (request: Request) => {
  try {
    const dbServices = await getServicesDataSource();
    const repository = dbServices.getRepository(ServicesEntity);
    const result = await repository.find();
    return Response.json({ services: result }, { status: 200 });
  } catch (e) {
    return Response.json(
      { error: 'Ошибка при получении списка работ' },
      { status: 500 },
    );
  }
};
