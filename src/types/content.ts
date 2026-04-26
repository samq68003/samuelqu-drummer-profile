export type TextToken = {
  id: string;
  value: string;
};

export type LinkToken = {
  id: string;
  label: string;
  href: string;
  externalUrl?: string;
};

export type ImageToken = {
  id: string;
  label: string;
  shape?:
    | "square"
    | "portrait"
    | "wide"
    | "hero-wide"
    | "blob-right"
    | "blob-left"
    | "contact-tall";
  src?: string;
};
