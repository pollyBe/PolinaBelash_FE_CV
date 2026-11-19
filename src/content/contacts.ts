export const contacts = {
  telegram: "https://t.me/PolinaBelash",
  email: "belashpolinaserg@gmail.com",
  github: "https://github.com/pollyBe",
  linkedin: "https://www.linkedin.com/in/polina-belash",
} as const;

export const contactLinks = [
  { id: "email", href: `mailto:${contacts.email}`, value: contacts.email, external: false },
  { id: "telegram", href: contacts.telegram, value: "@PolinaBelash", external: true },
  { id: "linkedin", href: contacts.linkedin, value: "in/polina-belash", external: true },
  { id: "github", href: contacts.github, value: "pollyBe", external: true },
] as const;
