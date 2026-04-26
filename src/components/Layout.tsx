import { NavLink, Outlet } from "react-router-dom";

import { footerLinks, navLinks, primaryCta, siteMeta } from "../content/siteContent";
import { IdentifierPill, InlineLink, LinkButton, TextBlock } from "./ContentBlocks";

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-top">
          <div className="header-chip">
            <TextBlock token={siteMeta.badge} as="span" />
          </div>
          <div className="header-chip">
            <span>{siteMeta.phone.value}</span>
            <IdentifierPill id={siteMeta.phone.id} />
          </div>
        </div>
        <div className="header-main">
          <NavLink className="site-logo" to="/">
            <span>{siteMeta.siteName}</span>
            <IdentifierPill id={siteMeta.siteId} />
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`}
                to={item.href}
              >
                <span>{item.label}</span>
                <IdentifierPill id={item.id} />
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <LinkButton item={primaryCta} />
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__grid">
          <div>
            <span className="section-label">Footer block</span>
            <h2>Internal placeholder links for future external destinations</h2>
          </div>
          <div className="site-footer__links">
            {footerLinks.map((item) => (
              <InlineLink key={item.id} item={item} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
