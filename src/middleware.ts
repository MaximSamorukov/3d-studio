import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  if (
    req.nextUrl.pathname.startsWith('/api/auth') ||
    req.nextUrl.pathname.startsWith('/api/check-authenticated-user') ||
    req.nextUrl.pathname.startsWith('/api/check-user')
  ) {
    return NextResponse.next();
  }
  if (!token && req.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!token) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/crm', '/crm/:path*', '/api/:path*'],
};
