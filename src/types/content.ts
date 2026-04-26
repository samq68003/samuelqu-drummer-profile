export type TextToken = {
  id: string;
  value: string;
  kind?: "eyebrow" | "title" | "body" | "label" | "quote" | "button";
};

export type LinkToken = {
  id: string;
  label: string;
  href: string;
  externalUrl?: string;
  note?: string;
};

export type ImageToken = {
  id: string;
  alt: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "tall";
  src?: string;
};

export type VideoToken = {
  id: string;
  title: string;
  youtubeUrl?: string;
  posterImageId?: string;
};

export type StatToken = {
  id: string;
  value: string;
  label: string;
};

export type StoryCard = {
  id: string;
  eyebrow?: TextToken;
  title: TextToken;
  body: TextToken;
  image: ImageToken;
};

export type TestimonialCard = {
  id: string;
  quote: TextToken;
  author: TextToken;
  detail: TextToken;
};

export type LessonCard = {
  id: string;
  title: TextToken;
  body: TextToken;
  iconLabel: TextToken;
};

export type EventCard = {
  id: string;
  name: TextToken;
  date: TextToken;
  venue: TextToken;
  address: TextToken;
};

export type ContactField = {
  id: string;
  label: TextToken;
  placeholder: string;
  type?: "text" | "email" | "tel" | "textarea";
};
