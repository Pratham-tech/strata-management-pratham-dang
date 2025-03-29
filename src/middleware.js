import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow static assets like CSS, images, and fonts
  if (pathname.startsWith("/_next/") || pathname.startsWith("/static/")) {
    return NextResponse.next();
  }

  // Define allowed paths
  const allowedPaths = [
    "/",
    "/announcements",
    "/maintenance",
    "/committee",
    "/financial-reports",
    "/contact-feedback",
  ];

  if (allowedPaths.includes(pathname)) {
    return NextResponse.next();
  }

  return new Response("Page Not Found", { status: 404 });
}
