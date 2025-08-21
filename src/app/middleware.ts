import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/dashboard', '/tasks', '/notes']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/tasks/:path*', '/notes/:path*'],
}
