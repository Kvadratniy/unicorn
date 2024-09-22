import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // AUTH
  if (!token && pathname.startsWith('/crm')) {
    // Если токен отсутствует, перенаправляем на страницу входа
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Продолжить выполнение запроса
  return NextResponse.next();
}
