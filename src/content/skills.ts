export type SkillGroup = {
  id: string;
  items: readonly string[];
};

export const skills: readonly SkillGroup[] = [
  {
    id: "frontend",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML5", "CSS3", "SCSS"],
  },
  { id: "state", items: ["Redux Toolkit", "RTK Query", "TanStack Query"] },
  { id: "styling", items: ["Tailwind CSS", "Material UI", "Styled Components", "Emotion"] },
  { id: "forms", items: ["React Hook Form", "Zod", "React Router"] },
  {
    id: "testing",
    items: ["Jest", "Vitest", "React Testing Library", "MSW", "Storybook"],
  },
  { id: "analytics", items: ["Amplitude", "i18next", "Recharts"] },
  { id: "ai", items: ["Claude", "Claude Code"] },
  { id: "tools", items: ["Vite", "Webpack", "Git", "Figma", "REST API", "Agile"] },
];
