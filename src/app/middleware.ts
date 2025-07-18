import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();

  // /admin e /conta exigem login
  if (!data.session && (req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/conta'))) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
  return res;
}
