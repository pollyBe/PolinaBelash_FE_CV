import { getFormatter, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { experience } from "@/content/experience";

const monthFormat = { month: "2-digit", year: "numeric", timeZone: "UTC" } as const;

function toDate(value: string): Date {
  return new Date(`${value}-01T00:00:00Z`);
}

export async function Experience(): Promise<React.ReactElement> {
  const t = await getTranslations("Experience");
  const format = await getFormatter();

  return (
    <Section id="experience" title={t("title")}>
      <ol className="border-border space-y-12 border-l pl-6 md:pl-10">
        {experience.map((job) => (
          <li key={job.id} className="relative">
            <span
              aria-hidden="true"
              className="bg-accent absolute top-2 -left-[29px] size-2.5 rounded-full md:-left-[45px]"
            />
            <article>
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold">
                    {t(`items.${job.id}.company`)}
                  </h3>
                  <p className="text-muted">{t(`items.${job.id}.role`)}</p>
                </div>
                <p className="text-muted shrink-0 font-mono text-sm">
                  {t.rich("period", {
                    start: () => (
                      <time dateTime={job.start}>
                        {format.dateTime(toDate(job.start), monthFormat)}
                      </time>
                    ),
                    end: () => (
                      <time dateTime={job.end}>
                        {format.dateTime(toDate(job.end), monthFormat)}
                      </time>
                    ),
                  })}
                </p>
              </header>

              <ul className="marker:text-accent mt-4 max-w-[65ch] list-disc space-y-2 pl-5">
                {job.points.map((point) => (
                  <li key={point}>
                    {t.rich(`items.${job.id}.points.${point}`, {
                      b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
                    })}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <TagList items={job.stack} label={t("stackLabel")} />
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
