import * as entities from '@/entities/masterUsers/index';
import { getMasterUsersDataSource } from '@/shared/db/masterUsers';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { login, password } = (data || {}) as {
      login: string;
      password: string;
    };
    if (!login || !password) {
      return NextResponse.json(
        { error: 'Логин и пароль обязательны.' },
        { status: 400 },
      );
    }
    const email = login.toLowerCase();
    const db = await getMasterUsersDataSource();
    const rep = db.getRepository(entities.MasterUserEntity);
    const user = await rep.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return NextResponse.json(
        { error: 'Ошибка регистрации' },
        { status: 409 },
      );
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const admin = rep.create({
        email: login,
        password: hashedPassword,
      });
      await rep.save(admin);
      return NextResponse.json({}, { status: 201 });
    }
  } catch (_) {
    return NextResponse.json({ error: 'Ошибка сервера.' }, { status: 500 });
  }
}
