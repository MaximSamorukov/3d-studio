export const runtime = 'nodejs';
import * as entities from '@/entities/masterUsers/index';
import { getMasterUsersDataSource } from '@/shared/common/db/masterUsers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { email } = (data || {}) as {
    email: string;
  };

  const db = await getMasterUsersDataSource();
  const user = await db.getRepository(entities.MasterUserEntity).findOne({
    where: {
      email,
    },
  });
  if (user) {
    return NextResponse.json({ admin: true });
  } else {
    return NextResponse.json({ admin: false });
  }
}
