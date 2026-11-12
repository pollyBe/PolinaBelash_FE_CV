# Project rules

Bilingual (ru/en) personal portfolio site. Next.js App Router, TypeScript, Tailwind CSS v4, next-intl, next-themes.

## Content

- All user-facing text lives in `messages/ru.json` and `messages/en.json`. No hardcoded strings in components.
- Every new key is added to both languages in the same change.
- Project card data lives in `content/projects.ts`. Adding a project must not require markup changes.

## Structure

- One section = one component in `src/components/sections/`.
- Shared UI pieces live in `src/components/ui/`; layout pieces in `src/components/layout/`.
- No FSD layers: this is a single-page site. Do not add abstractions without a concrete reason.

## Styling

- Colors, fonts and radii come only from design tokens in `src/styles/globals.css`. No raw hex values in components.
- Mobile-first. Text width is capped at about 65 characters.
- Light and dark themes must both work. Every text color needs at least 4.5:1 contrast on its background.

## Accessibility and motion

- Semantic HTML. Every interactive element has a visible focus state and works with the keyboard.
- Animations are subtle and disabled under `prefers-reduced-motion`.

## Code

- No comments in code. Do not touch existing comments.
- Explicit return types on exported functions.
- Server components by default. Add `"use client"` only where state or browser APIs are needed.
- Run `npm run typecheck` and `npm run lint` before finishing a task.
