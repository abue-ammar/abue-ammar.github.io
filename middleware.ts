import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  // Exclude auth routes from JWT protection (register and login)
  if (
    pathname.startsWith("/api/auth/register") ||
    pathname.startsWith("/api/auth/login")
  ) {
    return NextResponse.next(); // Allow register and login routes to pass without JWT
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
