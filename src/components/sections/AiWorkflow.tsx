import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { aiPractices, claudeSkills } from "@/content/aiWorkflow";

export async function AiWorkflow(): Promise<React.ReactElement> {
  const t = await getTranslations("AiWorkflow");

  return (
    <Section id="ai-workflow" title={t("title")}>
      <p className="text-muted max-w-prose text-lg">{t("intro")}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
        <ul className="flex flex-col gap-6">
          {aiPractices.map((id) => (
            <li key={id}>
              <h3 className="font-heading text-lg font-semibold">{t(`practices.${id}.title`)}</h3>
              <p className="text-muted mt-1 max-w-prose">{t(`practices.${id}.text`)}</p>
            </li>
          ))}
        </ul>

        <figure className="bg-terminal-bg text-terminal-fg border-border overflow-hidden rounded-2xl border font-mono text-sm">
          <div className="border-terminal-muted/20 flex items-center gap-2 border-b px-4 py-3">
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="bg-terminal-muted size-2.5 rounded-full" />
              <span className="bg-terminal-muted size-2.5 rounded-full" />
              <span className="bg-terminal-muted size-2.5 rounded-full" />
            </span>
            <figcaption className="text-terminal-muted ml-2 text-xs">
              {t("terminal.title")}
            </figcaption>
          </div>

          <div className="flex flex-col gap-4 p-5">
            <p>
              <span aria-hidden="true" className="text-terminal-muted">
                ${" "}
              </span>
              {t("terminal.command")}
            </p>
            <ul className="flex flex-col gap-3">
              {claudeSkills.map((skill) => (
                <li key={skill.id} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                  <span className="text-terminal-accent shrink-0 sm:w-36">{skill.command}</span>
                  <span className="text-terminal-muted">{t(`skills.${skill.id}`)}</span>
                </li>
              ))}
            </ul>
            <p aria-hidden="true">
              <span className="text-terminal-muted">$ </span>
              <span className="bg-terminal-fg inline-block h-4 w-2 animate-pulse align-middle" />
            </p>
          </div>
        </figure>
      </div>
    </Section>
  );
}
