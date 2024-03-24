import { type NextRequest, NextResponse } from 'next/server';

const middleware = (request: NextRequest): Response | undefined => {
  console.log('TEST');

  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    request.nextUrl.searchParams.get('allowed') !== 'true'
  ) {
    const deniedRoutePathname = request.nextUrl.pathname.split('/')[1];
    return NextResponse.redirect(new URL(`/?deniedRoute=${deniedRoutePathname}`, request.url));
  }
};

export default middleware;
