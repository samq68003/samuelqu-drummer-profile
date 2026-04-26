import { Navigate, Route, Routes } from "react-router-dom";

import {
  aboutPage,
  connectPages,
  contactPage,
  homePage,
  lessonsPage,
  livePage,
  reviewsPage,
} from "./content/siteContent";
import {
  EventList,
  FormCard,
  LessonGrid,
  LinkButton,
  MediaPlaceholder,
  StatGrid,
  StoryRows,
  TestimonialGrid,
  TextBlock,
  VideoGrid,
} from "./components/ContentBlocks";
import { SiteLayout } from "./components/Layout";

function HomeRoute() {
  return (
    <>
      <section className="hero hero--home page-section">
        <div className="hero__copy">
          <TextBlock token={homePage.hero.eyebrow} as="span" />
          <TextBlock token={homePage.hero.title} as="h1" />
          <TextBlock token={homePage.hero.body} />
          <div className="button-row">
            <LinkButton item={homePage.hero.primaryLink} />
            <LinkButton item={homePage.hero.secondaryLink} variant="secondary" />
          </div>
        </div>
        <div className="hero__media hero__media--stacked">
          <MediaPlaceholder item={homePage.hero.mediaPrimary} />
          <div className="hero__media-cluster">
            <MediaPlaceholder item={homePage.hero.mediaSecondary} />
            <MediaPlaceholder item={homePage.hero.mediaAccent} />
          </div>
        </div>
      </section>

      <section className="page-section">
        <StatGrid items={homePage.stats} />
      </section>

      <section className="split-section page-section">
        <div className="split-section__copy">
          <TextBlock token={homePage.story.eyebrow} as="span" />
          <TextBlock token={homePage.story.title} as="h2" />
          <TextBlock token={homePage.story.body} />
        </div>
        <div className="double-media">
          <MediaPlaceholder item={homePage.story.imageLeft} />
          <MediaPlaceholder item={homePage.story.imageRight} />
        </div>
      </section>

      <section className="page-section">
        <LessonGrid items={homePage.highlightCards} />
      </section>

      <section className="page-section">
        <div className="gallery-grid">
          {homePage.gallery.map((item) => (
            <MediaPlaceholder key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

function LessonsRoute() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero__copy">
          <TextBlock token={lessonsPage.hero.title} as="h1" />
          <TextBlock token={lessonsPage.hero.body} />
        </div>
        <MediaPlaceholder item={lessonsPage.hero.image} />
      </section>
      <section className="page-section">
        <LessonGrid items={lessonsPage.cards} />
      </section>
      <section className="page-section">
        <StoryRows items={lessonsPage.splitStories} />
      </section>
      <section className="page-section cta-panel">
        <TextBlock token={lessonsPage.cta.title} as="h2" />
        <TextBlock token={lessonsPage.cta.body} />
        <LinkButton item={lessonsPage.cta.link} />
      </section>
    </>
  );
}

function AboutRoute() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero__copy">
          <TextBlock token={aboutPage.hero.title} as="h1" />
          <TextBlock token={aboutPage.hero.body} />
        </div>
        <MediaPlaceholder item={aboutPage.hero.image} />
      </section>
      <section className="page-section">
        <StoryRows items={aboutPage.stories} />
      </section>
    </>
  );
}

function ReviewsRoute() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero__copy">
          <TextBlock token={reviewsPage.hero.title} as="h1" />
          <TextBlock token={reviewsPage.hero.body} />
        </div>
        <MediaPlaceholder item={reviewsPage.hero.image} />
      </section>
      <section className="page-section">
        <TestimonialGrid items={reviewsPage.testimonials} />
      </section>
    </>
  );
}

function LiveRoute() {
  return (
    <>
      <section className="page-section section-stack">
        <TextBlock token={livePage.hero.title} as="h1" />
        <TextBlock token={livePage.hero.body} />
      </section>
      <section className="page-section">
        <EventList items={livePage.events} />
      </section>
      <section className="page-section section-stack">
        <TextBlock token={livePage.recapTitle} as="h2" />
        <VideoGrid items={livePage.videos} />
      </section>
      <section className="page-section">
        <div className="gallery-grid">
          {livePage.gallery.map((item) => (
            <MediaPlaceholder key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

function ContactRoute() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero__copy">
          <TextBlock token={contactPage.hero.title} as="h1" />
          <TextBlock token={contactPage.hero.body} />
        </div>
        <MediaPlaceholder item={contactPage.hero.image} />
      </section>
      <section className="page-section contact-grid">
        <FormCard fields={contactPage.fields} submitLabel={contactPage.formSubmit} />
        <aside className="social-panel">
          <TextBlock token={contactPage.socialTitle} as="h2" />
          <p>
            All social and resource buttons below are routed internally for now so the site remains
            self-contained during staging.
          </p>
          <div className="social-panel__links">
            <LinkButton item={connectPages.instagram.link} variant="secondary" />
            <LinkButton item={connectPages.facebook.link} variant="secondary" />
            <LinkButton item={connectPages["media-library"].link} variant="secondary" />
          </div>
        </aside>
      </section>
    </>
  );
}

function ConnectRoute({
  page,
}: {
  page: (typeof connectPages)[keyof typeof connectPages];
}) {
  return (
    <section className="page-section connect-panel">
      <TextBlock token={page.title} as="h1" />
      <TextBlock token={page.body} />
      <div className="connect-panel__meta">
        <LinkButton item={page.link} variant="secondary" />
        <p>
          Future external URL: <code>{page.link.externalUrl ?? "[set externalUrl in siteContent.ts]"}</code>
        </p>
        {page.link.note ? <p>{page.link.note}</p> : null}
      </div>
    </section>
  );
}

function NotFoundRoute() {
  return (
    <section className="page-section connect-panel">
      <h1>Route placeholder</h1>
      <p>This project is configured as a SPA. Add a new route in the router and content config when needed.</p>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomeRoute />} />
        <Route path="/lessons" element={<LessonsRoute />} />
        <Route path="/about-me" element={<AboutRoute />} />
        <Route path="/reviews" element={<ReviewsRoute />} />
        <Route path="/live" element={<LiveRoute />} />
        <Route path="/get-in-touch" element={<ContactRoute />} />
        <Route path="/connect/instagram" element={<ConnectRoute page={connectPages.instagram} />} />
        <Route path="/connect/facebook" element={<ConnectRoute page={connectPages.facebook} />} />
        <Route
          path="/connect/media-library"
          element={<ConnectRoute page={connectPages["media-library"]} />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Route>
    </Routes>
  );
}
