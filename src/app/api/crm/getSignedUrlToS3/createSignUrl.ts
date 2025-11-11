import { s3 } from '@/shared/common/db/s3';
import { GetObjectCommand } from '@aws-sdk/client-s3';

export async function uploadFile(file: File) {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const path = `uploads/${Date.now()}_${file.name}`;
    const command = new GetObjectCommand({
      Bucket: process.env.FILE_STORAGE_BUCKET_NAME,
      Key: path,
    });

    const response = await s3.send(command);
    if (response['$metadata'].httpStatusCode === 200) {
      const endpoint = process.env.FILE_STORAGE_URL?.replace(/\/$/, '');
      const url = `${endpoint}/${process.env.FILE_STORAGE_BUCKET_NAME}/${path}`;
      return url;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log('Ошибка загрузки файла', e);
    return 'file is not saved correctly';
  }
}
