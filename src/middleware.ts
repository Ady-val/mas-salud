import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const isRootPath = request.nextUrl.pathname === '/';
  const currentPath = request.nextUrl.pathname;
  const token = request.cookies.get('access_token');

  console.log('running middleware', isRootPath);

  if (!token) {
    if (currentPath !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  }

  try {
    const res = await fetch('http://localhost:4000/me', {
      method: 'GET',
      headers: {
        Cookie: `access_token=${token.value}`,
      },
      credentials: 'include',
    });

    if (!res.ok) {
      if (currentPath !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      return NextResponse.next();
    }

    if (isRootPath) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Error verifying token:', error);

    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
