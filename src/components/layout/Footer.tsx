import { getTranslations } from "next-intl/server";

export async function Footer(): Promise<React.ReactElement> {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-border border-t">
      <div className="text-muted mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{t("rights")}</p>
        <p className="font-mono">{t("location")}</p>
      </div>
    </footer>
  );
}
