//export const runtime = 'nodejs';
import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import NeonAdapter from '@auth/neon-adapter';
import { Pool } from '@neondatabase/serverless';
import { DataSource } from 'typeorm';
import { TypeORMAdapter } from '@auth/typeorm-adapter';
import { AppDataSource } from '@/shared/common/db/index';
import { login as loginFn } from '@/services';
import { ZodError } from 'zod';
import { NextResponse } from 'next/server';
import * as entities from '@/shared/common/auth/entities';

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(async () => {
  return {
    debug: false,
    logger: {
      error: console.error,
      warn: console.warn,
      debug: console.debug,
    },
    adapter: TypeORMAdapter({
      type: 'postgres',
      url: process.env.AUTH_TYPEORM_CONNECTION,
      entities,
      ssl: { rejectUnauthorized: false },
    }),
    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 15 * 60,
    },
    providers: [
      Credentials({
        id: 'credentials',
        name: 'Credentials',
        credentials: {
          login: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async (data) => {
          const { login, password } = data;
          console.log('authorize', data);
          if (!login || !password) {
            return null;
          }
          const user = {
            login,
            password,
            email: login as string,
          } as User & { email: string };
          const objectToReturn = {
            name: 'Maxim Samorukov',
            image:
              'https://lh3.googleusercontent.com/a/ACg8ocK6_bkZbZ8apoHgYt2CNXpwYmE7SnOz85CPdjTKSxr4DKVCdh9I=s96-c',
            id: '1',
            email: 'maxim.samorukov@gmail.com',
          };
          //console.log('auth -> authorize return object', objectToReturn);
          //try {
          //  const resp = await fetch('http://localhost:3000/api/users', {
          //    method: 'POST',
          //    body: JSON.stringify(user),
          //    headers: {
          //      'Content-Type': 'application/json',
          //    },
          //  });
          //  console.log('resp', resp);
          //} catch (e) {
          //  console.log('error', e);
          //  return null;
          //}
          return objectToReturn;
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    //pages: {
    //  error: '/auth_error',
    //  signIn: '/auth_error',
    //},
  };
});
