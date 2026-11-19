type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps): React.ReactElement {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h2 id={headingId} className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
