import { Outlet } from "react-router-dom";

import { footerContent, navLinks, siteMeta } from "../content/siteContent";
import { ButtonLink, IdentifierPill, NavItem, TokenText } from "./ContentBlocks";

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__top container">
          <div className="site-header__phone">
            <span>{siteMeta.phone.value}</span>
            <IdentifierPill id={siteMeta.phone.id} />
          </div>
          <div className="site-header__logo">
            <div className="logo-box">
              <span>{siteMeta.siteName.value}</span>
              <IdentifierPill id={siteMeta.siteName.id} />
            </div>
          </div>
          <div className="site-header__actions">
            <div className="language-chip">
              <span>{siteMeta.language.value}</span>
              <IdentifierPill id={siteMeta.language.id} />
            </div>
            <ButtonLink item={siteMeta.cta} />
          </div>
        </div>
        <div className="site-header__nav container">
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__intro">
            <TokenText token={footerContent.intro} as="p" />
            <TokenText token={footerContent.location} as="p" />
          </div>
          <div className="site-footer__credits">
            <TokenText token={footerContent.acknowledgment} as="p" />
          </div>
          <div className="site-footer__contact">
            <TokenText token={footerContent.phone} as="p" />
            <TokenText token={footerContent.email} as="p" />
            <div className="site-footer__social">
              <a className="social-link" href={footerContent.instagram.href}>
                <span>{footerContent.instagram.label}</span>
                <IdentifierPill id={footerContent.instagram.id} />
              </a>
              <a className="social-link" href={footerContent.drive.href}>
                <span>{footerContent.drive.label}</span>
                <IdentifierPill id={footerContent.drive.id} />
              </a>
              <a className="social-link" href={footerContent.facebook.href}>
                <span>{footerContent.facebook.label}</span>
                <IdentifierPill id={footerContent.facebook.id} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
