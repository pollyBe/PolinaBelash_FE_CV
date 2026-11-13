import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware({ ...routing, localeDetection: false });

const RU_LANGS = new Set(["ru", "be", "uk"]);

function detectLocale(request: NextRequest): "ru" | "en" {
  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  if (saved === "ru" || saved === "en") return saved;

  const header = request.headers.get("accept-language") ?? "";
  const first = header.split(",")[0]?.trim().toLowerCase().split("-")[0] ?? "";
  return RU_LANGS.has(first) ? "ru" : "en";
}

export default function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${detectLocale(request)}`;
    return NextResponse.redirect(url);
  }

  return handleI18n(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
