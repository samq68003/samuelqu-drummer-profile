import { Link, NavLink } from "react-router-dom";

import type { ImageToken, LinkToken, TextToken } from "../types/content";

export function IdentifierPill({ id }: { id: string }) {
  return <span className="identifier-pill">{id}</span>;
}

export function TokenText({
  token,
  as = "p",
  className,
}: {
  token: TextToken;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  className?: string;
}) {
  const Tag = as;
  return (
    <div className={`token-block ${className ?? ""}`.trim()}>
      <IdentifierPill id={token.id} />
      <Tag>{token.value}</Tag>
    </div>
  );
}

export function PlaceholderImage({
  item,
  className,
}: {
  item: ImageToken;
  className?: string;
}) {
  return (
    <figure className={`placeholder-image ${item.shape ?? "wide"} ${className ?? ""}`.trim()}>
      {item.src ? <img src={item.src} alt={item.label} /> : null}
      {!item.src ? (
        <div className="placeholder-image__inner">
          <span>{item.label}</span>
          <IdentifierPill id={item.id} />
        </div>
      ) : null}
    </figure>
  );
}

export function ButtonLink({
  item,
  className,
}: {
  item: LinkToken;
  className?: string;
}) {
  return (
    <Link className={`site-button ${className ?? ""}`.trim()} to={item.href}>
      <span>{item.label}</span>
      <IdentifierPill id={item.id} />
    </Link>
  );
}

export function NavItem({ item }: { item: LinkToken }) {
  return (
    <NavLink className={({ isActive }) => `site-nav__item${isActive ? " is-active" : ""}`} to={item.href}>
      <span>{item.label}</span>
      <IdentifierPill id={item.id} />
    </NavLink>
  );
}
