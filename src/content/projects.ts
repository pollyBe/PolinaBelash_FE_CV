export type ProjectImage = {
  id: string;
  src: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  featured?: boolean;
  stack: readonly string[];
  links: { live?: string; repo?: string };
  images: readonly ProjectImage[];
};

export const projects: readonly Project[] = [
  {
    id: "sqlTrainee",
    featured: true,
    stack: ["React", "TypeScript", "Vite", "Material UI", "Redux Toolkit", "Keycloak", "Storybook"],
    links: {},
    images: [
      { id: "home", src: "/projects/sql-trainee/home.webp", width: 716, height: 401 },
      { id: "tasks", src: "/projects/sql-trainee/tasks.webp", width: 717, height: 400 },
      { id: "editor", src: "/projects/sql-trainee/editor.webp", width: 1208, height: 681 },
    ],
  },
  {
    id: "kinopoisk",
    stack: ["React", "TypeScript", "Vite", "RTK Query", "React Router", "SCSS", "FSD"],
    links: {
      live: "https://kinopoisk-clone-orpin.vercel.app",
      repo: "https://github.com/pollyBe/Kinopoisk-clone",
    },
    images: [{ id: "home", src: "/projects/kinopoisk/home.webp", width: 1280, height: 800 }],
  },
  {
    id: "signlore",
    stack: ["Next.js", "React", "TypeScript"],
    links: { live: "https://signlore.com" },
    images: [{ id: "home", src: "/projects/signlore/home.webp", width: 1440, height: 780 }],
  },
  {
    id: "proboostica",
    stack: ["Next.js", "React", "TypeScript"],
    links: { live: "https://proboostica.com" },
    images: [{ id: "home", src: "/projects/proboostica/home.webp", width: 1440, height: 760 }],
  },
  {
    id: "subtica",
    stack: ["Next.js", "React", "TypeScript"],
    links: { live: "https://subtica.com" },
    images: [{ id: "home", src: "/projects/subtica/home.webp", width: 1440, height: 780 }],
  },
];
