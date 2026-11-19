export type ExperienceItem = {
  id: string;
  start: string;
  end: string;
  points: readonly string[];
  stack: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    id: "humanApps",
    start: "2026-07",
    end: "2026-10",
    points: ["anonymousView", "landings", "analytics", "ai"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "RTK Query",
      "Strapi",
      "Amplitude",
      "MSW",
      "Claude Code",
    ],
  },
  {
    id: "aston",
    start: "2025-11",
    end: "2026-03",
    points: ["sqlApp", "auth", "performance", "quality"],
    stack: ["React", "TypeScript", "Vite", "Material UI", "Redux Toolkit", "Keycloak", "Storybook"],
  },
  {
    id: "freelance",
    start: "2023-12",
    end: "2025-10",
    points: ["apps", "refactoring", "tests"],
    stack: [
      "React",
      "TypeScript",
      "SCSS",
      "HTML",
      "CSS Modules",
      "JavaScript",
      "Styled Components",
      "REST API",
      "Jest",
    ],
  },
];
