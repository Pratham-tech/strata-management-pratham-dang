import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow static assets like CSS, images, fonts, and anything with an extension
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.match(/\.(jpg|jpeg|png|svg|gif|webp|ico|css|js|woff2?|ttf)$/)
  ) {
    return NextResponse.next();
  }

  const allowedPaths = [
    "/",
    "/announcements",
    "/maintenance",
    "/committee",
    "/financial-reports",
    "/contact-feedback",
    "/api/contact"
  ];

  if (allowedPaths.includes(pathname)) {
    return NextResponse.next();
  }

  return new Response("Page Not Found", { status: 404 });
}
