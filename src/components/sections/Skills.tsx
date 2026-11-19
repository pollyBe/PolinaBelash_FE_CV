import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { skills } from "@/content/skills";

export async function Skills(): Promise<React.ReactElement> {
  const t = await getTranslations("Skills");

  return (
    <Section id="skills" title={t("title")}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => {
          const title = t(`groups.${group.id}`);

          return (
            <li key={group.id} className="border-border bg-surface rounded-2xl border p-5">
              <h3 className="font-heading font-semibold">{title}</h3>
              <div className="mt-4">
                <TagList items={group.items} label={title} />
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
