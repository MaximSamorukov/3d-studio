import { PrintOrderEntity } from '@/entities/order';
import { getOrderDataSource } from '@/shared/common/db/orders';
import { uploadFile } from './uploadFile';

export const POST = async (request: Request) => {
  try {
    const printOrderFormData = await request.formData();
    const db = await getOrderDataSource();
    const repository = db.getRepository(PrintOrderEntity);
    const file = printOrderFormData.get('file') as unknown as File | null;

    let file_path = 'there is no file uploaded';
    if (file) {
      const pathToFile = await uploadFile(file);
      file_path = pathToFile;
    }
    const name = printOrderFormData.get('name')?.toString() ?? '';
    const phone = printOrderFormData.get('phone')?.toString() ?? '';
    const email = printOrderFormData.get('email')?.toString() ?? '';
    const plasticType = printOrderFormData.get('plasticType')?.toString() ?? '';
    const color = printOrderFormData.get('color')?.toString() ?? '';
    const withPostprocessing =
      printOrderFormData.get('withPostprocessing') === 'Да' ? true : false;
    const comment = printOrderFormData.get('comment')?.toString() ?? '';
    const order = repository.create({
      file_path,
      name,
      phone,
      email,
      plastic_type: plasticType,
      color,
      with_postprocessing: withPostprocessing,
      comment,
      created_at: new Date(),
    });
    await repository.save(order);
    return Response.json({ message: 'Заказ сохранен' }, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: 'Ошибка при сохранении заказа' },
      { status: 500 },
    );
  }
};
