import type { ImageToken, LinkToken, TextToken } from "../types/content";

const text = (id: string, value: string): TextToken => ({ id, value });
const image = (
  id: string,
  label: string,
  shape: ImageToken["shape"] = "wide",
): ImageToken => ({ id, label, shape });
const link = (
  id: string,
  label: string,
  href: string,
  externalUrl?: string,
): LinkToken => ({ id, label, href, externalUrl });

export const siteMeta = {
  siteName: text("site.meta.name", "[site.meta.name]"),
  phone: text("site.meta.phone", "[site.meta.phone]"),
  cta: link("site.meta.cta", "[site.meta.cta]", "/get-in-touch"),
  language: text("site.meta.language", "EN"),
};

export const navLinks: LinkToken[] = [
  link("nav.home", "Home", "/"),
  link("nav.lessons", "Lessons", "/lessons"),
  link("nav.about", "About Me", "/about-me"),
  link("nav.reviews", "Testimonials", "/reviews"),
  link("nav.live", "Live", "/live"),
];

export const footerContent = {
  intro: text("footer.intro", "[footer.intro]"),
  location: text("footer.location", "[footer.location]"),
  acknowledgment: text("footer.acknowledgment", "[footer.acknowledgment]"),
  phone: text("footer.phone", "[footer.phone]"),
  email: text("footer.email", "[footer.email]"),
  instagram: link(
    "footer.social.instagram",
    "Instagram",
    "/connect/instagram",
    "https://instagram.com/placeholder",
  ),
  drive: link(
    "footer.social.drive",
    "Drive",
    "/connect/media-library",
    "https://drive.google.com/drive/folders/placeholder",
  ),
  facebook: link(
    "footer.social.facebook",
    "Facebook",
    "/connect/facebook",
    "https://facebook.com/placeholder",
  ),
};

export const homePage = {
  heroTitle: text("home.hero.title", "[home.hero.title]"),
  heroBody: text("home.hero.body", "[home.hero.body]"),
  heroImages: [
    image("home.hero.media.01", "[home.hero.media.01]", "wide"),
    { ...image("home.hero.media.02", "[home.hero.media.02]", "portrait"), src: "/uploads/home-hero-media-02.jpg" },
    image("home.hero.media.03", "[home.hero.media.03]", "square"),
    image("home.hero.media.04", "[home.hero.media.04]", "hero-wide"),
  ],
  features: [
    {
      id: "home.features.01",
      title: "[home.features.01.title]",
      body: "[home.features.01.body]",
    },
    {
      id: "home.features.02",
      title: "[home.features.02.title]",
      body: "[home.features.02.body]",
    },
    {
      id: "home.features.03",
      title: "[home.features.03.title]",
      body: "[home.features.03.body]",
    },
    {
      id: "home.features.04",
      title: "[home.features.04.title]",
      body: "[home.features.04.body]",
    },
    {
      id: "home.features.05",
      title: "[home.features.05.title]",
      body: "[home.features.05.body]",
    },
    {
      id: "home.features.06",
      title: "[home.features.06.title]",
      body: "[home.features.06.body]",
    },
  ],
  storyTitle: text("home.story.title", "[home.story.title]"),
  storyBody: text("home.story.body", "[home.story.body]"),
  storyLink: link("home.story.link", "[home.story.link]", "/lessons"),
  storyImage: image("home.story.media", "[home.story.media]", "blob-right"),
  quote: text("home.quote.body", "[home.quote.body]"),
  quoteAuthor: text("home.quote.author", "[home.quote.author]"),
  quoteLink: link("home.quote.link", "[home.quote.link]", "/reviews"),
  quoteImage: image("home.quote.media", "[home.quote.media]", "square"),
  cta: link("home.cta.link", "[home.cta.link]", "/get-in-touch"),
};

export const lessonsPage = {
  bannerTitle: text("lessons.banner.title", "[lessons.banner.title]"),
  introTitle: text("lessons.intro.title", "[lessons.intro.title]"),
  introSections: [
    {
      id: "lessons.intro.block.01",
      title: "[lessons.intro.block.01.title]",
      bullets: [
        "[lessons.intro.block.01.bullet.01]",
        "[lessons.intro.block.01.bullet.02]",
        "[lessons.intro.block.01.bullet.03]",
      ],
    },
    {
      id: "lessons.intro.block.02",
      title: "[lessons.intro.block.02.title]",
      bullets: [
        "[lessons.intro.block.02.bullet.01]",
        "[lessons.intro.block.02.bullet.02]",
      ],
    },
    {
      id: "lessons.intro.block.03",
      title: "[lessons.intro.block.03.title]",
      bullets: ["[lessons.intro.block.03.bullet.01]"],
    },
    {
      id: "lessons.intro.block.04",
      title: "[lessons.intro.block.04.title]",
      bullets: [
        "[lessons.intro.block.04.bullet.01]",
        "[lessons.intro.block.04.bullet.02]",
      ],
    },
  ],
  introClosing: text("lessons.intro.closing", "[lessons.intro.closing]"),
  introLink: link("lessons.intro.link", "[lessons.intro.link]", "/reviews"),
  offerCards: [
    {
      id: "lessons.offers.01",
      title: "[lessons.offers.01.title]",
      body: "[lessons.offers.01.body]",
      price: "[lessons.offers.01.price]",
    },
    {
      id: "lessons.offers.02",
      title: "[lessons.offers.02.title]",
      body: "[lessons.offers.02.body]",
      price: "[lessons.offers.02.price]",
    },
    {
      id: "lessons.offers.03",
      title: "[lessons.offers.03.title]",
      body: "[lessons.offers.03.body]",
      price: "[lessons.offers.03.price]",
    },
  ],
  goalsTitle: text("lessons.goals.title", "[lessons.goals.title]"),
  goalsBody: text("lessons.goals.body", "[lessons.goals.body]"),
  goalsImage: image("lessons.goals.media", "[lessons.goals.media]", "blob-left"),
  experienceTitle: text("lessons.experience.title", "[lessons.experience.title]"),
  experienceBody: text("lessons.experience.body", "[lessons.experience.body]"),
  experienceImage: image("lessons.experience.media", "[lessons.experience.media]", "wide"),
  experienceLink: link("lessons.experience.link", "[lessons.experience.link]", "/about-me"),
  cta: link("lessons.cta.link", "[lessons.cta.link]", "/get-in-touch"),
};

export const aboutPage = {
  bannerTitle: text("about.banner.title", "[about.banner.title]"),
  stories: [
    {
      id: "about.stories.01",
      eyebrow: "[about.stories.01.eyebrow]",
      title: "[about.stories.01.title]",
      body: "[about.stories.01.body]",
      image: image("about.stories.01.media", "[about.stories.01.media]", "blob-right"),
    },
    {
      id: "about.stories.02",
      eyebrow: "",
      title: "[about.stories.02.title]",
      body: "[about.stories.02.body]",
      image: image("about.stories.02.media", "[about.stories.02.media]", "square"),
    },
    {
      id: "about.stories.03",
      eyebrow: "",
      title: "[about.stories.03.title]",
      body: "[about.stories.03.body]",
      image: image("about.stories.03.media", "[about.stories.03.media]", "blob-right"),
    },
    {
      id: "about.stories.04",
      eyebrow: "",
      title: "[about.stories.04.title]",
      body: "[about.stories.04.body]",
      image: image("about.stories.04.media", "[about.stories.04.media]", "blob-left"),
    },
  ],
  cta: link("about.cta.link", "[about.cta.link]", "/get-in-touch"),
};

export const reviewsPage = {
  bannerTitle: text("reviews.banner.title", "[reviews.banner.title]"),
  sectionTitle: text("reviews.section.title", "[reviews.section.title]"),
  quotes: [
    {
      id: "reviews.quotes.01",
      author: "[reviews.quotes.01.author]",
      body: "[reviews.quotes.01.body]",
    },
    {
      id: "reviews.quotes.02",
      author: "[reviews.quotes.02.author]",
      body: "[reviews.quotes.02.body]",
    },
    {
      id: "reviews.quotes.03",
      author: "[reviews.quotes.03.author]",
      body: "[reviews.quotes.03.body]",
    },
    {
      id: "reviews.quotes.04",
      author: "[reviews.quotes.04.author]",
      body: "[reviews.quotes.04.body]",
    },
    {
      id: "reviews.quotes.05",
      author: "[reviews.quotes.05.author]",
      body: "[reviews.quotes.05.body]",
    },
    {
      id: "reviews.quotes.06",
      author: "[reviews.quotes.06.author]",
      body: "[reviews.quotes.06.body]",
    },
  ],
  cta: link("reviews.cta.link", "[reviews.cta.link]", "/get-in-touch"),
};

export const livePage = {
  heading: text("live.heading", "[live.heading]"),
  events: [
    {
      id: "live.events.01",
      name: "[live.events.01.name]",
      date: "[live.events.01.date]",
      venue: "[live.events.01.venue]",
      address: "[live.events.01.address]",
    },
    {
      id: "live.events.02",
      name: "[live.events.02.name]",
      date: "[live.events.02.date]",
      venue: "[live.events.02.venue]",
      address: "[live.events.02.address]",
    },
    {
      id: "live.events.03",
      name: "[live.events.03.name]",
      date: "[live.events.03.date]",
      venue: "[live.events.03.venue]",
      address: "[live.events.03.address]",
    },
  ],
  highlightsTitle: text("live.highlights.title", "[live.highlights.title]"),
  videos: [
    {
      id: "live.videos.01",
      title: "[live.videos.01.title]",
      youtubeUrl: "[live.videos.01.youtube_url]",
    },
    {
      id: "live.videos.02",
      title: "[live.videos.02.title]",
      youtubeUrl: "[live.videos.02.youtube_url]",
    },
  ],
};

export const contactPage = {
  bannerTitle: text("contact.banner.title", "[contact.banner.title]"),
  intro: [
    text("contact.intro.01", "[contact.intro.01]"),
    text("contact.intro.02", "[contact.intro.02]"),
    text("contact.intro.03", "[contact.intro.03]"),
  ],
  formFields: [
    { id: "contact.form.name", label: "Name *", placeholder: "[contact.form.name]" },
    { id: "contact.form.phone", label: "Phone Number", placeholder: "[contact.form.phone]" },
    { id: "contact.form.email", label: "Email *", placeholder: "[contact.form.email]" },
    {
      id: "contact.form.topic",
      label: "What would you like to do?",
      placeholder: "[contact.form.topic]",
    },
  ],
  submit: text("contact.form.submit", "[contact.form.submit]"),
  infoTitle: text("contact.info.title", "[contact.info.title]"),
  infoPhone: text("contact.info.phone", "[contact.info.phone]"),
  infoEmail: text("contact.info.email", "[contact.info.email]"),
  infoInstagram: link("contact.info.instagram", "Instagram", "/connect/instagram"),
  infoFacebook: link("contact.info.facebook", "Facebook", "/connect/facebook"),
  portrait: image("contact.info.media", "[contact.info.media]", "contact-tall"),
};

export const connectPages = {
  instagram: {
    title: text("connect.instagram.title", "[connect.instagram.title]"),
    body: text("connect.instagram.body", "[connect.instagram.body]"),
    link: footerContent.instagram,
  },
  facebook: {
    title: text("connect.facebook.title", "[connect.facebook.title]"),
    body: text("connect.facebook.body", "[connect.facebook.body]"),
    link: footerContent.facebook,
  },
  "media-library": {
    title: text("connect.media_library.title", "[connect.media_library.title]"),
    body: text("connect.media_library.body", "[connect.media_library.body]"),
    link: footerContent.drive,
  },
};
