// export const runtime = 'nodejs';
import 'server-only';

import { S3Client } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
  endpoint: process.env.FILE_STORAGE_URL,
  forcePathStyle: true,
  region: process.env.FILE_STORAGE_REGION,
  apiVersion: 'latest',
  credentials: {
    accessKeyId: process.env.FILE_STORAGE_ACCESS_KEY!,
    secretAccessKey: process.env.FILE_STORAGE_SECRET_ACCESS_KEY!,
  },
});
