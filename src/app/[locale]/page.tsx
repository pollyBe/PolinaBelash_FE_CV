import { LanguageSwitch } from "@/components/layout/languageSwitch";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<React.ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Hero");

  return (
    <>
      <LanguageSwitch />
      <main className="mx-auto max-w-4xl px-5 py-20">
        <p>{t("status")}</p>
        <h1 className="mt-4 text-4xl font-semibold">{t("title")}</h1>
        <p className="mt-4">{t("subtitle")}</p>
      </main>
    </>
  );
}
