import { getLocale, getTranslations } from "next-intl/server";
import { CopyButton } from "@/components/ui/CopyButton";
import { Section } from "@/components/ui/Section";
import { contactLinks, contacts } from "@/content/contacts";

export async function Contacts(): Promise<React.ReactElement> {
  const t = await getTranslations("Contacts");
  const locale = await getLocale();

  return (
    <Section id="contacts" title={t("title")}>
      <div className="border-border bg-surface grid gap-10 rounded-3xl border p-6 md:p-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="max-w-prose text-lg">{t("intro")}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-opacity hover:opacity-90"
            >
              {t("primary")}
            </a>
            <a
              href={`/cv/Polina_Belash_CV_${locale}.pdf`}
              download
              className="border-border hover:border-accent hover:text-accent inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium transition-colors"
            >
              {t("cv")}
            </a>
          </div>
        </div>

        <ul className="divide-border flex flex-col divide-y">
          {contactLinks.map((link) => (
            <li
              key={link.id}
              className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0"
            >
              <div className="flex min-w-0 flex-col">
                <span className="text-muted font-mono text-xs">{t(`links.${link.id}`)}</span>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:text-accent font-medium break-all transition-colors"
                >
                  {link.value}
                </a>
              </div>
              {link.id === "email" ? (
                <CopyButton value={contacts.email} label={t("copy")} copiedLabel={t("copied")} />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
