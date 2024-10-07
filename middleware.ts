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

  // Allow POST, PUT, DELETE requests to protected routes without verification
  if (
    pathname.startsWith("/api") &&
    (req.method === "POST" || req.method === "PUT" || req.method === "DELETE")
  ) {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Token missing" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
