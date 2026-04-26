import { Link } from "react-router-dom";

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

export function IdentifierPill({ id }: { id: string }) {
  return <span className="identifier-pill">{id}</span>;
}

export function TextBlock({
  token,
  as = "p",
}: {
  token: TextToken;
  as?: "p" | "h1" | "h2" | "h3" | "span";
}) {
  const Tag = as;
  return (
    <div className={`text-token text-token--${token.kind ?? "body"}`}>
      <IdentifierPill id={token.id} />
      <Tag>{token.value}</Tag>
    </div>
  );
}

export function LinkButton({
  item,
  variant = "primary",
}: {
  item: LinkToken;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link className={`button button--${variant}`} to={item.href}>
      <span>{item.label}</span>
      <IdentifierPill id={item.id} />
    </Link>
  );
}

export function InlineLink({ item }: { item: LinkToken }) {
  return (
    <Link className="inline-link" to={item.href}>
      <span>{item.label}</span>
      <IdentifierPill id={item.id} />
    </Link>
  );
}

const ratioClassMap: Record<NonNullable<ImageToken["ratio"]>, string> = {
  square: "ratio-square",
  portrait: "ratio-portrait",
  landscape: "ratio-landscape",
  wide: "ratio-wide",
  tall: "ratio-tall",
};

export function MediaPlaceholder({ item }: { item: ImageToken }) {
  return (
    <figure className={`media-card ${ratioClassMap[item.ratio ?? "landscape"]}`}>
      {item.src ? (
        <img src={item.src} alt={item.alt} />
      ) : (
        <div className="media-card__placeholder">
          <span className="media-card__label">{item.alt}</span>
          <IdentifierPill id={item.id} />
        </div>
      )}
    </figure>
  );
}

export function StatGrid({ items }: { items: StatToken[] }) {
  return (
    <div className="stat-grid">
      {items.map((item) => (
        <article key={item.id} className="stat-card">
          <IdentifierPill id={item.id} />
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}

export function LessonGrid({ items }: { items: LessonCard[] }) {
  return (
    <div className="card-grid card-grid--three">
      {items.map((item) => (
        <article key={item.id} className="glass-card">
          <TextBlock token={item.iconLabel} as="span" />
          <TextBlock token={item.title} as="h3" />
          <TextBlock token={item.body} />
        </article>
      ))}
    </div>
  );
}

export function StoryRows({ items }: { items: StoryCard[] }) {
  return (
    <div className="story-rows">
      {items.map((item, index) => (
        <section
          key={item.id}
          className={`split-section ${index % 2 === 1 ? "split-section--reverse" : ""}`}
        >
          <div className="split-section__copy">
            {item.eyebrow ? <TextBlock token={item.eyebrow} as="span" /> : null}
            <TextBlock token={item.title} as="h2" />
            <TextBlock token={item.body} />
          </div>
          <MediaPlaceholder item={item.image} />
        </section>
      ))}
    </div>
  );
}

export function TestimonialGrid({ items }: { items: TestimonialCard[] }) {
  return (
    <div className="card-grid card-grid--three">
      {items.map((item) => (
        <article key={item.id} className="testimonial-card">
          <TextBlock token={item.quote} />
          <TextBlock token={item.author} as="h3" />
          <TextBlock token={item.detail} />
        </article>
      ))}
    </div>
  );
}

export function EventList({ items }: { items: EventCard[] }) {
  return (
    <div className="event-list">
      {items.map((item) => (
        <article key={item.id} className="event-card">
          <TextBlock token={item.name} as="h3" />
          <div className="event-meta">
            <TextBlock token={item.date} as="span" />
            <TextBlock token={item.venue} as="span" />
          </div>
          <TextBlock token={item.address} />
        </article>
      ))}
    </div>
  );
}

export function VideoGrid({ items }: { items: VideoToken[] }) {
  return (
    <div className="card-grid card-grid--two">
      {items.map((item) => (
        <article key={item.id} className="video-card">
          <div className="video-card__frame">
            <span className="video-card__play">Play</span>
            <IdentifierPill id={item.id} />
          </div>
          <TextBlock
            token={{ id: `${item.id}.title`, value: item.title, kind: "title" }}
            as="h3"
          />
          <p className="video-card__hint">
            Future YouTube URL: <code>{item.youtubeUrl ?? "[paste youtube link later]"}</code>
          </p>
        </article>
      ))}
    </div>
  );
}

export function FormCard({
  fields,
  submitLabel,
}: {
  fields: ContactField[];
  submitLabel: TextToken;
}) {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      {fields.map((field) => (
        <label key={field.id} className="field">
          <TextBlock token={field.label} as="span" />
          {field.type === "textarea" ? (
            <textarea placeholder={field.placeholder} rows={5} />
          ) : (
            <input type={field.type ?? "text"} placeholder={field.placeholder} />
          )}
          <IdentifierPill id={field.id} />
        </label>
      ))}
      <button className="button button--primary" type="submit">
        <span>{submitLabel.value}</span>
        <IdentifierPill id={submitLabel.id} />
      </button>
    </form>
  );
}
