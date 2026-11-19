import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { type Project, projects } from "@/content/projects";

type Translate = Awaited<ReturnType<typeof getTranslations<"Projects">>>;

const linkKinds = ["live", "repo"] as const;

function ProjectLinks({
  project,
  t,
}: {
  project: Project;
  t: Translate;
}): React.ReactElement | null {
  const name = t(`items.${project.id}.title`);
  const available = linkKinds.filter((kind) => project.links[kind]);

  if (available.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-3">
      {available.map((kind) => (
        <li key={kind}>
          <a
            href={project.links[kind]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(`links.${kind}Aria`, { name })}
            className="border-border hover:border-accent hover:text-accent inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
          >
            {t(`links.${kind}`)}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectText({ project, t }: { project: Project; t: Translate }): React.ReactElement {
  const key = `items.${project.id}` as const;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-muted font-mono text-xs">{t(`${key}.context`)}</p>
        <h3 className="font-heading mt-1 text-xl font-semibold">{t(`${key}.title`)}</h3>
      </div>
      <p className="max-w-prose">{t(`${key}.summary`)}</p>
      <p className="text-muted max-w-prose">{t(`${key}.contribution`)}</p>
      <TagList items={project.stack} label={t("stackLabel")} />
      <ProjectLinks project={project} t={t} />
    </div>
  );
}

function ProjectImageFrame({
  project,
  index,
  sizes,
  t,
}: {
  project: Project;
  index: number;
  sizes: string;
  t: Translate;
}): React.ReactElement {
  const image = project.images[index];

  return (
    <div className="border-border bg-surface aspect-video overflow-hidden rounded-xl border">
      <Image
        src={image.src}
        alt={t(`items.${project.id}.images.${image.id}`)}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className="size-full object-cover object-top"
      />
    </div>
  );
}

export async function Projects(): Promise<React.ReactElement> {
  const t = await getTranslations("Projects");
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" title={t("title")}>
      <div className="flex flex-col gap-6">
        {featured.map((project) => (
          <article
            key={project.id}
            className="border-border bg-surface grid gap-8 rounded-3xl border p-5 md:p-8 lg:grid-cols-[1fr_1.2fr]"
          >
            <ProjectText project={project} t={t} />
            <div className="grid grid-cols-2 gap-3">
              {project.images.map((image, index) => (
                <div key={image.id} className={index === 0 ? "col-span-2" : undefined}>
                  <ProjectImageFrame
                    project={project}
                    index={index}
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 600px, calc(100vw - 82px)"
                        : "(min-width: 1024px) 300px, calc(50vw - 46px)"
                    }
                    t={t}
                  />
                </div>
              ))}
            </div>
          </article>
        ))}

        <ul className="grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.id}>
              <article className="border-border bg-surface flex h-full flex-col gap-6 rounded-3xl border p-5 md:p-6">
                <ProjectImageFrame
                  project={project}
                  index={0}
                  sizes="(min-width: 768px) 540px, calc(100vw - 82px)"
                  t={t}
                />
                <ProjectText project={project} t={t} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
