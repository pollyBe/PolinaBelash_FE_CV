"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { saveLocale } from "@/lib/locale-cookie";

export function LanguageSwitch(): React.ReactElement {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function change(next: Locale): void {
    saveLocale(next);
    router.replace(pathname, { locale: next });
  }

  return (
    <div role="group" aria-label="Language" className="flex gap-1">
      {routing.locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => change(item)}
          aria-pressed={item === locale}
          className="rounded px-2 py-1 text-sm uppercase aria-pressed:font-semibold"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
