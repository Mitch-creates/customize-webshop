import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "de"] as const;
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

  // Check if path starts with any locale (supported or unsupported)
  const pathnameHasLocale = pathname.split("/")[1];

  // If it starts with a supported locale, allow it
  const hasValidLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (hasValidLocale) {
    return;
  }

  // If it starts with an unsupported locale or no locale, redirect to default
  const url = req.nextUrl.clone();

  // If pathname starts with an unsupported locale, remove it and add default
  if (pathnameHasLocale && pathnameHasLocale.length === 2) {
    // Remove the unsupported locale and add default locale
    const pathWithoutLocale = "/" + pathname.split("/").slice(2).join("/");
    url.pathname = `/${defaultLocale}${pathWithoutLocale}`;
  } else {
    // No locale in path, add default locale
    url.pathname = `/${defaultLocale}${pathname}`;
  }

  return NextResponse.redirect(url);
}

// Run on all pages
export const config = {
  matcher: ["/((?!_next|api).*)"],
};
