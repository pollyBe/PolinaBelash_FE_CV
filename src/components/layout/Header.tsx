import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

const sections = ["experience", "projects", "skills", "contacts"] as const;

export async function Header(): Promise<React.ReactElement> {
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <div className="border-border bg-background/80 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl border px-4 py-2.5 backdrop-blur md:rounded-full md:px-6">
        <Link href="/" className="font-heading font-semibold">
          {t("name")}
        </Link>

        <nav
          aria-label={t("navLabel")}
          className="text-muted order-3 flex w-full justify-center gap-5 text-sm md:order-none md:w-auto"
        >
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-foreground transition-colors">
              {t(id)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
