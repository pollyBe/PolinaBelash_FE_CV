import type { Locale } from "@/i18n/routing";

export function saveLocale(locale: Locale): void {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
}
