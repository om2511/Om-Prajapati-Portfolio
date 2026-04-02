import { profile, socialLinks, youtubeLinks } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__copy">
          <span className="site-footer__eyebrow">Portfolio</span>
          <h3>{profile.name}</h3>
          <p>
            Full stack developer focused on responsive UI, clean product execution,
            and maintainable backend systems.
          </p>
        </div>

        <div className="site-footer__links">
          <span>Social</span>
          <div className="site-footer__stack">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__links">
          <span>YouTube</span>
          <div className="site-footer__stack">
            {youtubeLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {currentYear} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
