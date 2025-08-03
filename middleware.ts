import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Разрешаем доступ к Sanity Studio
  if (request.nextUrl.pathname.startsWith('/blogmaker')) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Исключаем статические файлы и API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}