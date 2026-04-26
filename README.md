# Placeholder Website Replica

This project recreates the structure and visual rhythm of [tomyanez.ca](https://www.tomyanez.ca/) while replacing the original text, images, and outbound destinations with editable placeholders plus stable identifiers.

## Stack

- `Vite`
- `React`
- `TypeScript`
- `React Router`
- `pnpm`

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Content workflow

All editable content lives in `src/content/siteContent.ts`.

- Text tokens use stable ids like `home.hero.title`
- Image tokens use stable ids like `home.hero.media.primary`
- Video placeholders use stable ids like `live.videos.01`
- External resources currently route internally through `/connect/*`

See `CONTENT_SYSTEM.md` for the full editing workflow.

## Cloudflare Pages

The project includes `public/_redirects` with:

```txt
/* /index.html 200
```

That keeps direct route visits working for this SPA on Cloudflare Pages.
