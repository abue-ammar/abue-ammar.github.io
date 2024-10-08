import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Exclude auth routes from JWT protection (register and login)
  if (
    pathname.startsWith("/api/auth/register") ||
    pathname.startsWith("/api/auth/login") ||
    pathname.startsWith("/api/auth/session")
  ) {
    return NextResponse.next(); // Allow register and login routes to pass without JWT
  }

  const session = req.cookies.get("next-auth.session-token");
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/cms/:path*"],
};
