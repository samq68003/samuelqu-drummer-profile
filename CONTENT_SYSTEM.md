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
heroTitle: text("home.hero.title", "[home.hero.title]")
```

Replace the second argument with your real text.

## How to replace an image later

Each image token currently uses a rendered placeholder card.

1. Add your real file into `public/uploads/` or another versioned public folder
2. Set `src` on the corresponding image token

Example:

```ts
image("home.hero.media.01", "[home.hero.media.01]", "wide")
```

can become:

```ts
{
  id: "home.hero.media.01",
  label: "[home.hero.media.01]",
  shape: "wide",
  src: "/uploads/home-hero-01.jpg",
}
```

If `src` is absent, the app shows the styled placeholder with the identifier.

## How to replace a YouTube placeholder later

Video placeholders are defined in `livePage.videos`.

1. Paste the real YouTube URL into `youtubeUrl`
2. If you want to upgrade the UI later, we can switch the placeholder card to a real embed component

Example:

```ts
{
  id: "live.videos.01",
  title: "[live.videos.01.title]",
  youtubeUrl: "[live.videos.01.youtube_url]",
}
```

can become:

```ts
{
  id: "live.videos.01",
  title: "Live session clip",
  youtubeUrl: "https://www.youtube.com/watch?v=example",
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
link("footer.social.instagram", "Instagram", "/connect/instagram", "https://instagram.com/your-account")
```

Change to:

```ts
link("footer.social.instagram", "Instagram", "https://instagram.com/your-account")
```

If you want, I can also convert the current button and footer link rendering so external URLs automatically open with a normal `<a>` tag instead of using an internal placeholder route.
