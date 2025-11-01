import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TODO when more locales are added, update this array
const locales = ["en"];
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

// Paths to ignore (api, next internals, and files with an extension)
const PUBLIC_FILE = /\.(.*)$/;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip API, Next internals, and static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Already locale-prefixed?
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  // No locale in the URL → force default ('en')
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// Run for everything except assets
export const config = {
  matcher: ["/((?!_next|api).*)"],
};
