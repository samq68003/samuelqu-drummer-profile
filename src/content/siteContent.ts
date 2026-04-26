import type {
  ContactField,
  EventCard,
  ImageToken,
  LessonCard,
  LinkToken,
  StatToken,
  StoryCard,
  TestimonialCard,
  TextToken,
  VideoToken,
} from "../types/content";

const text = (
  id: string,
  value: string,
  kind?: TextToken["kind"],
): TextToken => ({ id, value, kind });

const image = (
  id: string,
  alt: string,
  ratio: ImageToken["ratio"] = "landscape",
): ImageToken => ({ id, alt, ratio });

const link = (
  id: string,
  label: string,
  href: string,
  externalUrl?: string,
  note?: string,
): LinkToken => ({ id, label, href, externalUrl, note });

const video = (id: string, title: string, posterImageId?: string): VideoToken => ({
  id,
  title,
  posterImageId,
});

export const siteMeta = {
  siteName: "Site Replica Placeholder System",
  siteId: "site.meta.name",
  badge: text("site.meta.badge", "Replica with editable identifiers", "label"),
  phone: text("site.meta.phone", "[placeholder phone number]", "label"),
  logo: text("site.meta.logo", "[site logo placeholder]", "label"),
};

export const navLinks: LinkToken[] = [
  link("nav.home", "Home placeholder", "/"),
  link("nav.lessons", "Lessons placeholder", "/lessons"),
  link("nav.about", "About placeholder", "/about-me"),
  link("nav.reviews", "Testimonials placeholder", "/reviews"),
  link("nav.live", "Live placeholder", "/live"),
  link("nav.contact", "Contact placeholder", "/get-in-touch"),
];

export const primaryCta = link(
  "global.cta.primary",
  "Primary CTA placeholder",
  "/get-in-touch",
);

export const footerLinks: LinkToken[] = [
  link(
    "footer.social.instagram",
    "Instagram placeholder",
    "/connect/instagram",
    "https://instagram.com/your-account",
    "Replace `href` with `externalUrl` when you want a live outbound social link.",
  ),
  link(
    "footer.social.facebook",
    "Facebook placeholder",
    "/connect/facebook",
    "https://facebook.com/your-page",
    "Replace `href` with `externalUrl` when you want a live outbound social link.",
  ),
  link(
    "footer.resource.drive",
    "Media drive placeholder",
    "/connect/media-library",
    "https://drive.google.com/drive/folders/placeholder-folder-id",
    "Use this pattern for any future external resources or booking links.",
  ),
];

export const homePage = {
  routeId: "page.home",
  hero: {
    eyebrow: text("home.hero.eyebrow", "Placeholder eyebrow for hero section", "eyebrow"),
    title: text("home.hero.title", "Placeholder hero title with editable identifier", "title"),
    body: text(
      "home.hero.body",
      "Placeholder supporting copy for the hero area. Replace this token later with real positioning text.",
      "body",
    ),
    primaryLink: link("home.hero.primary_link", "Hero CTA placeholder", "/get-in-touch"),
    secondaryLink: link("home.hero.secondary_link", "Hero secondary CTA placeholder", "/lessons"),
    mediaPrimary: image("home.hero.media.primary", "Primary hero image placeholder", "portrait"),
    mediaSecondary: image("home.hero.media.secondary", "Secondary hero image placeholder", "square"),
    mediaAccent: image("home.hero.media.accent", "Accent hero image placeholder", "landscape"),
  },
  stats: [
    { id: "home.stats.01", value: "[value 01]", label: "[home stat label 01]" },
    { id: "home.stats.02", value: "[value 02]", label: "[home stat label 02]" },
    { id: "home.stats.03", value: "[value 03]", label: "[home stat label 03]" },
    { id: "home.stats.04", value: "[value 04]", label: "[home stat label 04]" },
  ] satisfies StatToken[],
  story: {
    eyebrow: text("home.story.eyebrow", "Placeholder section eyebrow", "eyebrow"),
    title: text("home.story.title", "Placeholder story section title", "title"),
    body: text(
      "home.story.body",
      "Placeholder narrative copy describing the promise, experience, or method shown on the original site.",
      "body",
    ),
    imageLeft: image("home.story.media.left", "Left story image placeholder", "portrait"),
    imageRight: image("home.story.media.right", "Right story image placeholder", "portrait"),
  },
  highlightCards: [
    {
      id: "home.highlights.01",
      title: text("home.highlights.01.title", "Placeholder highlight title 01", "title"),
      body: text(
        "home.highlights.01.body",
        "Placeholder paragraph for highlight card 01.",
        "body",
      ),
      iconLabel: text("home.highlights.01.icon", "Icon placeholder 01", "label"),
    },
    {
      id: "home.highlights.02",
      title: text("home.highlights.02.title", "Placeholder highlight title 02", "title"),
      body: text(
        "home.highlights.02.body",
        "Placeholder paragraph for highlight card 02.",
        "body",
      ),
      iconLabel: text("home.highlights.02.icon", "Icon placeholder 02", "label"),
    },
    {
      id: "home.highlights.03",
      title: text("home.highlights.03.title", "Placeholder highlight title 03", "title"),
      body: text(
        "home.highlights.03.body",
        "Placeholder paragraph for highlight card 03.",
        "body",
      ),
      iconLabel: text("home.highlights.03.icon", "Icon placeholder 03", "label"),
    },
  ] satisfies LessonCard[],
  gallery: [
    image("home.gallery.01", "Gallery image placeholder 01", "landscape"),
    image("home.gallery.02", "Gallery image placeholder 02", "wide"),
    image("home.gallery.03", "Gallery image placeholder 03", "square"),
  ],
};

export const lessonsPage = {
  routeId: "page.lessons",
  hero: {
    title: text("lessons.hero.title", "Placeholder lessons page title", "title"),
    body: text(
      "lessons.hero.body",
      "Placeholder overview for lesson format, location, schedule, or teaching model.",
      "body",
    ),
    image: image("lessons.hero.media", "Lessons hero media placeholder", "wide"),
  },
  cards: [
    {
      id: "lessons.cards.01",
      title: text("lessons.cards.01.title", "Placeholder lesson card title 01", "title"),
      body: text(
        "lessons.cards.01.body",
        "Placeholder explanation for lesson card 01.",
        "body",
      ),
      iconLabel: text("lessons.cards.01.icon", "Badge placeholder 01", "label"),
    },
    {
      id: "lessons.cards.02",
      title: text("lessons.cards.02.title", "Placeholder lesson card title 02", "title"),
      body: text(
        "lessons.cards.02.body",
        "Placeholder explanation for lesson card 02.",
        "body",
      ),
      iconLabel: text("lessons.cards.02.icon", "Badge placeholder 02", "label"),
    },
    {
      id: "lessons.cards.03",
      title: text("lessons.cards.03.title", "Placeholder lesson card title 03", "title"),
      body: text(
        "lessons.cards.03.body",
        "Placeholder explanation for lesson card 03.",
        "body",
      ),
      iconLabel: text("lessons.cards.03.icon", "Badge placeholder 03", "label"),
    },
  ] satisfies LessonCard[],
  splitStories: [
    {
      id: "lessons.story.01",
      eyebrow: text("lessons.story.01.eyebrow", "Placeholder story eyebrow 01", "eyebrow"),
      title: text("lessons.story.01.title", "Placeholder story title 01", "title"),
      body: text("lessons.story.01.body", "Placeholder body copy for story block 01.", "body"),
      image: image("lessons.story.01.media", "Story image placeholder 01", "portrait"),
    },
    {
      id: "lessons.story.02",
      eyebrow: text("lessons.story.02.eyebrow", "Placeholder story eyebrow 02", "eyebrow"),
      title: text("lessons.story.02.title", "Placeholder story title 02", "title"),
      body: text("lessons.story.02.body", "Placeholder body copy for story block 02.", "body"),
      image: image("lessons.story.02.media", "Story image placeholder 02", "portrait"),
    },
  ] satisfies StoryCard[],
  cta: {
    title: text("lessons.cta.title", "Placeholder lesson CTA title", "title"),
    body: text("lessons.cta.body", "Placeholder lesson CTA body text.", "body"),
    link: link("lessons.cta.link", "Lesson CTA button placeholder", "/get-in-touch"),
  },
};

export const aboutPage = {
  routeId: "page.about",
  hero: {
    title: text("about.hero.title", "Placeholder about page title", "title"),
    body: text(
      "about.hero.body",
      "Placeholder biography introduction. Replace this later with the real founder or artist story.",
      "body",
    ),
    image: image("about.hero.media", "About hero media placeholder", "portrait"),
  },
  stories: [
    {
      id: "about.stories.01",
      eyebrow: text("about.stories.01.eyebrow", "Timeline placeholder 01", "eyebrow"),
      title: text("about.stories.01.title", "Placeholder chapter title 01", "title"),
      body: text("about.stories.01.body", "Placeholder biography chapter body 01.", "body"),
      image: image("about.stories.01.media", "Biography image placeholder 01", "landscape"),
    },
    {
      id: "about.stories.02",
      eyebrow: text("about.stories.02.eyebrow", "Timeline placeholder 02", "eyebrow"),
      title: text("about.stories.02.title", "Placeholder chapter title 02", "title"),
      body: text("about.stories.02.body", "Placeholder biography chapter body 02.", "body"),
      image: image("about.stories.02.media", "Biography image placeholder 02", "landscape"),
    },
    {
      id: "about.stories.03",
      eyebrow: text("about.stories.03.eyebrow", "Timeline placeholder 03", "eyebrow"),
      title: text("about.stories.03.title", "Placeholder chapter title 03", "title"),
      body: text("about.stories.03.body", "Placeholder biography chapter body 03.", "body"),
      image: image("about.stories.03.media", "Biography image placeholder 03", "landscape"),
    },
  ] satisfies StoryCard[],
};

export const reviewsPage = {
  routeId: "page.reviews",
  hero: {
    title: text("reviews.hero.title", "Placeholder reviews page title", "title"),
    body: text(
      "reviews.hero.body",
      "Placeholder introduction for social proof, testimonials, or review highlights.",
      "body",
    ),
    image: image("reviews.hero.media", "Reviews hero media placeholder", "wide"),
  },
  testimonials: [
    {
      id: "reviews.testimonials.01",
      quote: text("reviews.testimonials.01.quote", "Placeholder testimonial quote 01.", "quote"),
      author: text("reviews.testimonials.01.author", "Placeholder reviewer 01", "label"),
      detail: text(
        "reviews.testimonials.01.detail",
        "Placeholder reviewer detail 01",
        "body",
      ),
    },
    {
      id: "reviews.testimonials.02",
      quote: text("reviews.testimonials.02.quote", "Placeholder testimonial quote 02.", "quote"),
      author: text("reviews.testimonials.02.author", "Placeholder reviewer 02", "label"),
      detail: text(
        "reviews.testimonials.02.detail",
        "Placeholder reviewer detail 02",
        "body",
      ),
    },
    {
      id: "reviews.testimonials.03",
      quote: text("reviews.testimonials.03.quote", "Placeholder testimonial quote 03.", "quote"),
      author: text("reviews.testimonials.03.author", "Placeholder reviewer 03", "label"),
      detail: text(
        "reviews.testimonials.03.detail",
        "Placeholder reviewer detail 03",
        "body",
      ),
    },
  ] satisfies TestimonialCard[],
};

export const livePage = {
  routeId: "page.live",
  hero: {
    title: text("live.hero.title", "Placeholder live page title", "title"),
    body: text(
      "live.hero.body",
      "Placeholder page copy for upcoming performances, sessions, classes, or live events.",
      "body",
    ),
  },
  events: [
    {
      id: "live.events.01",
      name: text("live.events.01.name", "Placeholder event name 01", "title"),
      date: text("live.events.01.date", "Placeholder event date 01", "label"),
      venue: text("live.events.01.venue", "Placeholder venue 01", "label"),
      address: text("live.events.01.address", "Placeholder address 01", "body"),
    },
    {
      id: "live.events.02",
      name: text("live.events.02.name", "Placeholder event name 02", "title"),
      date: text("live.events.02.date", "Placeholder event date 02", "label"),
      venue: text("live.events.02.venue", "Placeholder venue 02", "label"),
      address: text("live.events.02.address", "Placeholder address 02", "body"),
    },
  ] satisfies EventCard[],
  recapTitle: text("live.recap.title", "Placeholder archive or highlights title", "title"),
  videos: [
    video("live.videos.01", "Placeholder YouTube embed 01", "live.gallery.01"),
    video("live.videos.02", "Placeholder YouTube embed 02", "live.gallery.02"),
  ],
  gallery: [
    image("live.gallery.01", "Live gallery placeholder 01", "wide"),
    image("live.gallery.02", "Live gallery placeholder 02", "wide"),
  ],
};

export const contactPage = {
  routeId: "page.contact",
  hero: {
    title: text("contact.hero.title", "Placeholder contact page title", "title"),
    body: text(
      "contact.hero.body",
      "Placeholder booking or contact invitation copy.",
      "body",
    ),
    image: image("contact.hero.media", "Contact hero media placeholder", "portrait"),
  },
  fields: [
    {
      id: "contact.form.name",
      label: text("contact.form.name.label", "Placeholder field label: name", "label"),
      placeholder: "[contact.form.name.placeholder]",
      type: "text",
    },
    {
      id: "contact.form.email",
      label: text("contact.form.email.label", "Placeholder field label: email", "label"),
      placeholder: "[contact.form.email.placeholder]",
      type: "email",
    },
    {
      id: "contact.form.phone",
      label: text("contact.form.phone.label", "Placeholder field label: phone", "label"),
      placeholder: "[contact.form.phone.placeholder]",
      type: "tel",
    },
    {
      id: "contact.form.message",
      label: text("contact.form.message.label", "Placeholder field label: message", "label"),
      placeholder: "[contact.form.message.placeholder]",
      type: "textarea",
    },
  ] satisfies ContactField[],
  formSubmit: text("contact.form.submit", "Placeholder submit button", "button"),
  socialTitle: text("contact.social.title", "Placeholder social section title", "title"),
};

export const connectPages = {
  instagram: {
    routeId: "connect.instagram",
    title: text("connect.instagram.title", "Placeholder internal social destination", "title"),
    body: text(
      "connect.instagram.body",
      "This page currently stands in for an external social link. You can later replace it with a direct outbound URL in the content config.",
      "body",
    ),
    link: footerLinks[0],
  },
  facebook: {
    routeId: "connect.facebook",
    title: text("connect.facebook.title", "Placeholder internal social destination", "title"),
    body: text(
      "connect.facebook.body",
      "This page currently stands in for an external social link. You can later replace it with a direct outbound URL in the content config.",
      "body",
    ),
    link: footerLinks[1],
  },
  "media-library": {
    routeId: "connect.media_library",
    title: text("connect.media_library.title", "Placeholder internal resource destination", "title"),
    body: text(
      "connect.media_library.body",
      "This page currently stands in for a document, drive, or booking resource. Swap the link later when the real external destination is ready.",
      "body",
    ),
    link: footerLinks[2],
  },
};
