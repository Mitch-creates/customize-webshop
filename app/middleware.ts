import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TODO support more locales eventually
const locales = ["en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

// Ignore API, Next internals, and files with an extension
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip non-page requests
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // If the path already starts with a supported locale, allow it
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  // Otherwise, force the default locale
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

// Run on all pages
export const config = {
  matcher: ["/((?!_next|api).*)"],
};
