type TagListProps = {
  items: readonly string[];
  label: string;
};

export function TagList({ items, label }: TagListProps): React.ReactElement {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border-border text-muted rounded-full border px-2.5 py-0.5 font-mono text-xs"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
