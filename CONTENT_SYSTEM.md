# Content Identifier System

This project is built so text, images, video links, and outbound links can all be updated through stable identifiers.

## Where to edit

- Main content source: `src/content/siteContent.ts`
- Component rendering: `src/components/ContentBlocks.tsx`
- Routes and page composition: `src/App.tsx`
- Cloudflare Pages SPA fallback: `public/_redirects`

## How to replace text later

1. Find the identifier in the UI or in `src/content/siteContent.ts`
2. Update the `value` field for that token
3. Rebuild or let Cloudflare Pages redeploy after commit

Example:

```ts
title: text("home.hero.title", "Placeholder hero title with editable identifier", "title")
```

Replace the second argument with your real text.

## How to replace an image later

Each image token currently uses a rendered placeholder card.

1. Add your real file into `public/uploads/` or another versioned public folder
2. Set `src` on the corresponding image token

Example:

```ts
mediaPrimary: {
  id: "home.hero.media.primary",
  alt: "Primary hero image placeholder",
  ratio: "portrait",
  src: "/uploads/home-hero-primary.jpg",
}
```

If `src` is absent, the app shows the styled placeholder with the identifier.

## How to replace a YouTube placeholder later

Video placeholders are defined in `livePage.videos`.

1. Paste the real YouTube URL into `youtubeUrl`
2. If you want to upgrade the UI later, we can switch the placeholder card to a real embed component

Example:

```ts
video("live.videos.01", "Placeholder YouTube embed 01", "live.gallery.01")
```

can become a full object with:

```ts
{
  id: "live.videos.01",
  title: "Live session clip",
  youtubeUrl: "https://www.youtube.com/watch?v=example",
  posterImageId: "live.gallery.01",
}
```

## How to replace an internal placeholder link with a real external link

External destinations currently stay internal on purpose, using routes like `/connect/instagram`.

When you're ready to go live:

1. Find the corresponding `LinkToken` in `footerLinks` or another section
2. Change `href` from the internal route to the real external URL
3. Optionally keep `externalUrl` only as documentation, or remove it

Example:

```ts
link(
  "footer.social.instagram",
  "Instagram placeholder",
  "/connect/instagram",
  "https://instagram.com/your-account",
)
```

Change to:

```ts
link(
  "footer.social.instagram",
  "Instagram",
  "https://instagram.com/your-account",
)
```

If you want, I can also convert the `LinkButton` and `InlineLink` components later so they automatically detect external URLs and render `<a target=\"_blank\" rel=\"noreferrer\">`.
