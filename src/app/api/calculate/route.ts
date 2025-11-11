import { getSTLVolume } from '@/shared/utils/computeVolume';
import { APPROXIMATE_PRINT_SPEED, materials, MODEL_DENSITY } from './constants';
import { getFinalPrice } from './utils';

export const POST = async (request: Request) => {
  const req = await request.formData();

  const rawFile = req.get('fileUpload');

  const isFileLike =
    rawFile && typeof (rawFile as Blob).arrayBuffer === 'function';
  const file = isFileLike ? rawFile : null;

  if (file) {
    try {
      const volumeInMM = await getSTLVolume(file as File);
      const volumeInSM = volumeInMM / 10 ** 3;
      const plasticType = req.get('plasticType') as keyof typeof materials;
      if (!plasticType || !materials[plasticType]) {
        return new Response(
          JSON.stringify({ message: 'Неизвестный тип пластика' }),
          { status: 400 },
        );
      }
      const material = materials[plasticType];
      const modelWeight = volumeInSM * material.density * MODEL_DENSITY;
      const printTimeInMinutes = volumeInMM / APPROXIMATE_PRINT_SPEED;

      const withPostProcessing =
        req.get('withPostProcessing') === 'true' ? true : false;
      const withModeling = req.get('withModeling') === 'true' ? true : false;

      return Response.json({
        weight: modelWeight.toFixed(2),
        plasticType: req.get('plasticType'),
        volume: volumeInMM.toFixed(2),
        printTime: printTimeInMinutes.toFixed(2),
        price: getFinalPrice(
          (modelWeight * material.price) / 1000,
          withModeling,
          withPostProcessing,
        ),
      });
    } catch {
      return new Response(null, { status: 500 });
    }
  }

  return Response.json({ message: 'Файл не загружен' }, { status: 400 });
};
