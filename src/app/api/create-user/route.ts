export const runtime = 'nodejs';

import * as entities from '@/shared/common/auth/entities';

import { getDataSource } from '@/shared/common/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { login, password } = (data || {}) as {
    login: string;
    password: string;
  };

  const db = await getDataSource();
  const user = await db.getRepository(entities.UserEntity).findOne({
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
  const result = await db.getRepository(entities.UserEntity).save({
    email: login,
    password: hashedPassword,
  });
  return NextResponse.json(result);
}
