import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Специальная обработка для Sanity Studio
  if (url.pathname.startsWith('/blogmaker')) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Только для blogmaker пути
    '/blogmaker/:path*',
  ],
}