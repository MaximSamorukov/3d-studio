import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const adminPaths = new Set(['/crm', '/api/crm/submited_orders']);
export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  });
  if (req.nextUrl.pathname.startsWith('/crm')) {
    if (token?.email) {
      const { email } = token;
      const result = await fetch(
        process.env.SERVER_URL + '/api/check-authenticated-user',
        {
          method: 'POST',
          body: JSON.stringify({ email }),
        },
      );
      const awaitedResult = await result.json();
      if (awaitedResult.admin) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    } else {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith('/admin_register')) {
    if (token?.email) {
      const { email } = token;
      const result = await fetch(
        process.env.SERVER_URL + '/api/check-authenticated-user',
        {
          method: 'POST',
          body: JSON.stringify({ email }),
        },
      );
      const awaitedResult = await result.json();
      if (!awaitedResult.admin) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL('/crm', req.url));
      }
    } else {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  if (token && req.nextUrl.pathname.startsWith('/api/crm')) {
    if (token?.email) {
      const { email } = token;
      const result = await fetch(
        process.env.SERVER_URL + '/api/check-authenticated-user',
        {
          method: 'POST',
          body: JSON.stringify({ email }),
        },
      );
      const awaitedResult = await result.json();
      if (awaitedResult.admin) {
        return NextResponse.next();
      }
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    } else {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }
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
  matcher: ['/crm', '/crm/:path*', '/api/:path*', '/admin_register'],
};
