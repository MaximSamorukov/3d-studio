import 'server-only';
import { getSTLVolume } from '@/shared/utils/computeVolume';
import {
  APPROXIMATE_PRINT_SPEED,
  MM_PER_SM_POW_3,
  MODEL_DENSITY,
} from './constants';
import { getFinalPriceAsync } from './utils';
import { getMaterialsDataSource } from '@/shared/common/db/materials';
import { MaterialsEntity } from '@/entities/materials';

export const POST = async (request: Request) => {
  const req = await request.formData();

  const rawFile = req.get('fileUpload');

  const isFileLike =
    rawFile && typeof (rawFile as Blob).arrayBuffer === 'function';
  const file = isFileLike ? rawFile : null;

  if (file) {
    try {
      const volumeInMM = await getSTLVolume(file as File);
      const volumeInSM = volumeInMM / MM_PER_SM_POW_3;
      const plasticType = req.get('plasticType');
      if (!plasticType) {
        return new Response(
          JSON.stringify({ message: 'Неизвестный тип пластика' }),
          { status: 400 },
        );
      }
      const dbMaterials = await getMaterialsDataSource();
      const repository = dbMaterials.getRepository(MaterialsEntity);
      const material = await repository
        .createQueryBuilder('materials')
        .where('materials.name = :plasticType', { plasticType })
        .getOne();
      if (!material) {
        return new Response(
          JSON.stringify({ message: 'Неизвестный тип пластика' }),
          { status: 400 },
        );
      }

      const modelWeight = volumeInSM * material.density * MODEL_DENSITY;
      const printTimeInMinutes = volumeInMM / APPROXIMATE_PRINT_SPEED;

      const withPostProcessing = req.get('withPostProcessing') === 'true';
      const withModeling = req.get('withModeling') === 'true';
      const price = await getFinalPriceAsync(
        (modelWeight * material.price_per_kg) / 1000,
        withModeling,
        withPostProcessing,
      );
      return Response.json({
        weight: modelWeight.toFixed(2),
        plasticType: req.get('plasticType'),
        volume: volumeInMM.toFixed(2),
        printTime: printTimeInMinutes.toFixed(2),
        price,
      });
    } catch {
      return new Response(null, { status: 500 });
    }
  }

  return Response.json({ message: 'Файл не загружен' }, { status: 400 });
};
