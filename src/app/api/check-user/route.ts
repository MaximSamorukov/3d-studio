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
  if (user && user?.password) {
    const isEqualPasswords = await bcrypt.compare(password, user?.password);
    if (isEqualPasswords) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json(
        { error: 'Credentials are incorrect' },
        { status: 401 },
      );
    }
  } else {
    return NextResponse.json(
      { error: 'Credentials are incorrect' },
      { status: 401 },
    );
  }
}
