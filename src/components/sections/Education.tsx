import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { courses, languages } from "@/content/education";

export async function Education(): Promise<React.ReactElement> {
  const t = await getTranslations("Education");

  return (
    <Section id="education" title={t("title")}>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="border-border bg-surface rounded-2xl border p-5">
          <h3 className="text-muted font-mono text-xs">{t("universityLabel")}</h3>
          <p className="font-heading mt-3 font-semibold">{t("university.name")}</p>
          <p className="text-muted mt-1">{t("university.faculty")}</p>
        </article>

        <article className="border-border bg-surface rounded-2xl border p-5">
          <h3 className="text-muted font-mono text-xs">{t("coursesLabel")}</h3>
          <ul className="mt-3 flex flex-col gap-3">
            {courses.map((id) => (
              <li key={id}>
                <p className="font-heading font-semibold">{t(`courses.${id}.school`)}</p>
                <p className="text-muted">{t(`courses.${id}.program`)}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-border bg-surface rounded-2xl border p-5">
          <h3 className="text-muted font-mono text-xs">{t("languagesLabel")}</h3>
          <ul className="mt-3 flex flex-col gap-3">
            {languages.map((id) => (
              <li key={id}>
                <p className="font-heading font-semibold">{t(`languages.${id}.name`)}</p>
                <p className="text-muted">{t(`languages.${id}.level`)}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
