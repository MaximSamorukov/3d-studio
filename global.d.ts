declare module '*.scss';
declare module '*.sass';
declare module '*.css';

import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role?: 'admin' | 'customer';
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: 'admin' | 'customer';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'admin' | 'customer';
  }
}

declare module 'next-svgr' {
  import type { NextConfig } from 'next';
  export default function withSvgr(config: NextConfig): NextConfig;
}
