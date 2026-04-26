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
import { ButtonLink, PlaceholderImage, TokenText } from "./components/ContentBlocks";
import { SiteLayout } from "./components/Layout";

function Banner({
  title,
  className,
}: {
  title: { id: string; value: string };
  className?: string;
}) {
  return (
    <section className={`page-banner ${className ?? ""}`.trim()}>
      <div className="container">
        <TokenText token={title} as="h1" className="page-banner__title" />
      </div>
    </section>
  );
}

function HomeRoute() {
  return (
    <>
      <section className="home-hero container">
        <div className="home-hero__grid">
          <div className="home-hero__media">
            <PlaceholderImage item={homePage.heroImages[0]} className="home-media home-media--a" />
            <PlaceholderImage item={homePage.heroImages[1]} className="home-media home-media--b" />
            <PlaceholderImage item={homePage.heroImages[2]} className="home-media home-media--c" />
            <PlaceholderImage item={homePage.heroImages[3]} className="home-media home-media--d" />
          </div>
          <div className="home-hero__copy">
            <TokenText token={homePage.heroTitle} as="h1" className="home-hero__title" />
            <TokenText token={homePage.heroBody} as="p" className="home-hero__body" />
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-features__wave" />
        <div className="container feature-grid">
          {homePage.features.map((feature) => (
            <article key={feature.id} className="feature-item">
              <span className="feature-icon" />
              <div className="feature-copy">
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container story-panel">
        <div className="story-panel__copy">
          <TokenText token={homePage.storyTitle} as="h2" />
          <TokenText token={homePage.storyBody} as="p" />
          <ButtonLink item={homePage.storyLink} className="site-button--secondary" />
        </div>
        <PlaceholderImage item={homePage.storyImage} />
      </section>

      <section className="container quote-panel">
        <PlaceholderImage item={homePage.quoteImage} />
        <div className="quote-panel__copy">
          <TokenText token={homePage.quote} as="p" className="quote-panel__body" />
          <TokenText token={homePage.quoteAuthor} as="p" className="quote-panel__author" />
          <ButtonLink item={homePage.quoteLink} className="site-button--ghost" />
          <div className="quote-panel__controls">
            <button aria-label="Previous" type="button">
              Prev
            </button>
            <button aria-label="Next" type="button">
              Next
            </button>
            <span className="quote-dot is-active" />
            <span className="quote-dot" />
          </div>
        </div>
      </section>

      <section className="container centered-cta">
        <ButtonLink item={homePage.cta} className="site-button site-button--large" />
      </section>
    </>
  );
}

function LessonsRoute() {
  return (
    <>
      <Banner title={lessonsPage.bannerTitle} className="page-banner--lessons" />
      <section className="container narrow-section lesson-intro">
        <TokenText token={lessonsPage.introTitle} as="h3" />
        {lessonsPage.introSections.map((section) => (
          <div key={section.id} className="lesson-intro__block">
            <h4>{section.title}</h4>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
        <TokenText token={lessonsPage.introClosing} as="p" />
        <div className="lesson-intro__link">
          <ButtonLink item={lessonsPage.introLink} />
        </div>
      </section>

      <section className="lesson-offers">
        <div className="container lesson-offers__grid">
          {lessonsPage.offerCards.map((card) => (
            <article key={card.id} className="offer-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <strong>{card.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="container split-copy split-copy--goals">
        <PlaceholderImage item={lessonsPage.goalsImage} />
        <div className="split-copy__text">
          <TokenText token={lessonsPage.goalsTitle} as="h2" />
          <TokenText token={lessonsPage.goalsBody} as="p" />
        </div>
      </section>

      <section className="container split-copy split-copy--experience">
        <div className="split-copy__text">
          <TokenText token={lessonsPage.experienceTitle} as="h2" />
          <TokenText token={lessonsPage.experienceBody} as="p" />
          <ButtonLink item={lessonsPage.experienceLink} className="site-button--secondary" />
        </div>
        <PlaceholderImage item={lessonsPage.experienceImage} />
      </section>

      <section className="container centered-cta">
        <ButtonLink item={lessonsPage.cta} className="site-button site-button--large" />
      </section>
    </>
  );
}

function AboutRoute() {
  return (
    <>
      <Banner title={aboutPage.bannerTitle} className="page-banner--about" />
      <section className="container about-stories">
        {aboutPage.stories.map((story, index) => (
          <article
            key={story.id}
            className={`about-story ${index % 2 === 1 ? "about-story--reverse" : ""}`}
          >
            <div className="about-story__text">
              {story.eyebrow ? <div className="about-story__eyebrow">{story.eyebrow}</div> : null}
              <h2>{story.title}</h2>
              <p>{story.body}</p>
            </div>
            <PlaceholderImage item={story.image} />
          </article>
        ))}
      </section>
      <section className="container centered-cta">
        <ButtonLink item={aboutPage.cta} className="site-button site-button--large" />
      </section>
    </>
  );
}

function ReviewsRoute() {
  return (
    <>
      <Banner title={reviewsPage.bannerTitle} className="page-banner--reviews" />
      <section className="reviews-wall">
        <div className="container reviews-wall__inner">
          <TokenText token={reviewsPage.sectionTitle} as="h3" className="reviews-wall__title" />
          <div className="reviews-wall__grid">
            {reviewsPage.quotes.map((quote, index) => (
              <article
                key={quote.id}
                className={`review-quote review-quote--${(index % 3) + 1}`}
              >
                <h4>{quote.author}</h4>
                <p>{quote.body}</p>
              </article>
            ))}
          </div>
          <div className="reviews-wall__cta">
            <ButtonLink item={reviewsPage.cta} className="site-button site-button--large" />
          </div>
        </div>
      </section>
    </>
  );
}

function LiveRoute() {
  return (
    <>
      <section className="container live-heading">
        <TokenText token={livePage.heading} as="h1" />
      </section>
      <section className="container live-table">
        <table>
          <thead>
            <tr>
              <th>Event name</th>
              <th>Event date</th>
              <th>Event venue</th>
              <th>Venue address</th>
            </tr>
          </thead>
          <tbody>
            {livePage.events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>{event.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="container live-highlights">
        <TokenText token={livePage.highlightsTitle} as="h1" className="live-highlights__title" />
        <div className="live-video-grid">
          {livePage.videos.map((video) => (
            <article key={video.id} className="live-video-card">
              <div className="live-video-card__frame">
                <span>{video.title}</span>
              </div>
              <p>{video.youtubeUrl}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactRoute() {
  return (
    <>
      <Banner title={contactPage.bannerTitle} className="page-banner--contact" />
      <section className="container contact-layout">
        <div className="contact-form-panel">
          {contactPage.intro.map((line) => (
            <TokenText key={line.id} token={line} as="p" />
          ))}
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form__row">
              {contactPage.formFields.slice(0, 2).map((field) => (
                <label key={field.id} className="contact-field">
                  <span>{field.label}</span>
                  <input placeholder={field.placeholder} />
                </label>
              ))}
            </div>
            <div className="contact-form__row contact-form__row--single">
              <label className="contact-field">
                <span>{contactPage.formFields[2].label}</span>
                <input placeholder={contactPage.formFields[2].placeholder} />
              </label>
            </div>
            <div className="contact-form__row contact-form__row--single">
              <label className="contact-field">
                <span>{contactPage.formFields[3].label}</span>
                <select defaultValue="">
                  <option value="" disabled>
                    {contactPage.formFields[3].placeholder}
                  </option>
                </select>
              </label>
            </div>
            <button className="site-button" type="submit">
              <span>{contactPage.submit.value}</span>
            </button>
          </form>
        </div>
        <aside className="contact-side-panel">
          <TokenText token={contactPage.infoTitle} as="h3" />
          <TokenText token={contactPage.infoPhone} as="p" />
          <TokenText token={contactPage.infoEmail} as="p" />
          <div className="contact-side-panel__links">
            <ButtonLink item={contactPage.infoFacebook} className="site-button--icon" />
            <ButtonLink item={contactPage.infoInstagram} className="site-button--icon" />
          </div>
          <PlaceholderImage item={contactPage.portrait} />
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
    <section className="container connect-route">
      <TokenText token={page.title} as="h1" />
      <TokenText token={page.body} as="p" />
      <ButtonLink item={page.link} className="site-button--secondary" />
      <p className="connect-route__hint">
        Future external URL: <code>{page.link.externalUrl ?? "[external url pending]"}</code>
      </p>
    </section>
  );
}

function NotFoundRoute() {
  return (
    <section className="container connect-route">
      <h1>Route placeholder</h1>
      <p>Add a new route when you need another internal placeholder destination.</p>
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
