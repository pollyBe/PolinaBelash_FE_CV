"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
};

export function CopyButton({ value, label, copiedLabel }: CopyButtonProps): React.ReactElement {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleClick(): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="border-border hover:border-accent hover:text-accent rounded-full border px-3 py-1 font-mono text-xs transition-colors"
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
