// export const runtime = 'nodejs';
import 'server-only';

import { S3Client } from '@aws-sdk/client-s3';

const objectKey = 'objectkey';
const copyObjectKey = 'objectkeycopy';
const bucketParams = { Bucket: process.env.FILE_STORAGE_BUCKET_NAME };
const uploadParams = { Bucket: bucketParams.Bucket, Key: '', Body: '' };
const createParams = {
  Bucket: bucketParams.Bucket,
  Key: objectKey,
  Body: 'test_body123',
};
const metaParams = { Bucket: bucketParams.Bucket, Key: objectKey };
const copyParams = {
  Bucket: bucketParams.Bucket,
  CopySource: `${bucketParams.Bucket}/${objectKey}`,
  Key: copyObjectKey,
};

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
