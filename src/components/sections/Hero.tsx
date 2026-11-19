import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { contacts } from "@/content/contacts";

const socials = [
  { label: "Telegram", href: contacts.telegram },
  { label: "LinkedIn", href: contacts.linkedin },
  { label: "GitHub", href: contacts.github },
] as const;

export async function Hero(): Promise<React.ReactElement> {
  const t = await getTranslations("Hero");
  const locale = await getLocale();

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 pt-12 pb-10 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-14 md:pt-20 md:pb-14">
      <div className="order-2 md:order-1">
        <p className="border-border text-muted inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
          <span className="bg-accent size-2 rounded-full" aria-hidden="true" />
          {t("status")}
        </p>

        <h1 className="font-heading mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {t("title")}
        </h1>

        <p className="text-muted mt-5 max-w-prose text-lg">{t("subtitle")}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-opacity hover:opacity-90"
          >
            {t("contact")}
          </a>
          <a
            href={`/cv/Polina_Belash_CV_${locale}.pdf`}
            download
            className="border-border hover:border-accent hover:text-accent inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium transition-colors"
          >
            {t("cv")}
          </a>
        </div>

        <ul className="text-muted mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          {socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 w-36 md:order-2 md:w-full md:max-w-sm md:justify-self-end">
        <Image
          src="/photo/polina.jpg"
          alt={t("photoAlt")}
          width={380}
          height={760}
          priority
          sizes="(min-width: 768px) 384px, 144px"
          className="border-border h-auto w-full rounded-3xl border object-cover"
        />
      </div>
    </section>
  );
}
