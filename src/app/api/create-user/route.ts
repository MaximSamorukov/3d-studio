// export const runtime = 'nodejs';

import { MasterUserEntity } from '@/entities/masterUsers/index';
import { getMasterUsersDataSource } from '@/shared/common/db/masterUsers';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { login, password } = (data || {}) as {
    login: string;
    password: string;
  };

  const db = await getMasterUsersDataSource();
  const user = await db.getRepository(MasterUserEntity).findOne({
    where: {
      email: login,
    },
  });
  if (user) {
    return NextResponse.json(
      { error: 'Логин уже используется' },
      { status: 404 },
    );
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const result = await db.getRepository(MasterUserEntity).save({
    email: login,
    password: hashedPassword,
  });
  return NextResponse.json(result);
}
