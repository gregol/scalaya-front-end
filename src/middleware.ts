import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { JWT } from 'next-auth/jwt';

export default withAuth(
  function middleware() {
    // Additional middleware logic can go here
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }: { token: JWT | null; req: NextRequest }) => {
        // Protect /dashboard routes
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return !!token;
        }
        return true;
      },
    },
    pages: {
      signIn: '/login',
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*'],
};


