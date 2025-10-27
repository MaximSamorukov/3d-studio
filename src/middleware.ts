import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const ses = await auth();
  console.log('session', ses, auth);
  if (!ses?.user) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/crm/:path*'],
};
