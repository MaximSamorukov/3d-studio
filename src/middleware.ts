import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const ses = await auth();
  if (
    req.nextUrl.pathname.startsWith('/api/auth') ||
    req.nextUrl.pathname.startsWith('/api/check-authenticated-user') ||
    req.nextUrl.pathname.startsWith('/api/check-user')
  ) {
    return NextResponse.next();
  }
  if (!ses?.user && req.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!ses?.user) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/crm', '/crm/:path*', '/api/:path*'],
};
