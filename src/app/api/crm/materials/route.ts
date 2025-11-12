import { MaterialsEntity } from '@/entities/materials';
import { getMaterialsDataSource } from '@/shared/common/db/materials';

export const GET = async (request: Request) => {
  try {
    const dbMaterials = await getMaterialsDataSource();
    const repository = dbMaterials.getRepository(MaterialsEntity);
    const result = await repository.find();
    return Response.json({ materials: result }, { status: 200 });
  } catch (e) {
    return Response.json(
      { error: 'Ошибка при получении списка материалов' },
      { status: 500 },
    );
  }
};
