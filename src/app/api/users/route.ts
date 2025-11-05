// export const runtime = 'nodejs';

import { User } from '@/entities/user/index';
import { getDataSource } from '@/shared/common/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = req.body;
  const ds = await getDataSource();
  const users = await ds.getRepository(User).save({
    user: 'sdfsd',
    email: 'sdfsdf',
    name: 'sdfsdf',
    password: 'fsdfsdf',
  });
  return NextResponse.json(users);
}
