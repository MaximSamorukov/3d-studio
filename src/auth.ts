import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { TypeORMAdapter } from '@auth/typeorm-adapter';
import { checkUser } from '@/services';
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
          const { login, password } = data as {
            login: string;
            password: string;
          };
          if (!login || !password) {
            return null;
          }

          const user = {
            login,
            password,
          };
          const result = await checkUser(user);

          if (!result) {
            return null;
          } else {
            return result;
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async session({ session, token }) {
        const { email } = session.user;
        if (session.user.email) {
          try {
            const result = await fetch(
              'http://localhost:3000/api/check-authenticated-user',
              {
                method: 'POST',
                body: JSON.stringify({ email }),
              },
            );
            const awaitedResult = await result.json();
            if (awaitedResult.admin) {
              session.user.role = 'admin';
            } else {
              session.user.role = 'customer';
            }
          } catch (e) {
            console.log('Error, checking if user is admin or not');
          }
        }
        return session;
      },
    },
    //pages: {
    //  error: '/auth_error',
    //  signIn: '/auth_error',
    //},
  };
});

// export const runtime = 'nodejs';
