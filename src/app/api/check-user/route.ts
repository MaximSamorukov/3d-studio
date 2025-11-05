import * as entities from '@/entities/masterUsers/index';
// export const runtime = 'nodejs';

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
  const user = await db.getRepository(entities.MasterUserEntity).findOne({
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
