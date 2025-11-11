import { s3 } from '@/shared/common/db/s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const key = url.searchParams.get('key');

  if (!key) {
    return NextResponse.json({ error: 'Missing key' }, { status: 400 });
  }
  console.log('key=', key);
  const command = new GetObjectCommand({
    Bucket: process.env.FILE_STORAGE_BUCKET_NAME,
    Key: key,
  });

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

  return NextResponse.json({ url: signedUrl });
}
