import SectionHeading from "./SectionHeading";
import { navItems, socialLinks, youtubeLinks } from "../data/portfolio";

export default function LinksSection() {
  return (
    <section className="section" id="links">
      <SectionHeading
        eyebrow="Links"
        title="Everything important in one place."
        description="The original link section is kept, but structured as reusable data instead of repeated static markup."
      />

      <div className="links-grid">
        <article className="links-panel">
          <h3>Quick Navigation</h3>
          <div className="links-list">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                <i className="ri-arrow-right-up-line" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="links-panel">
          <h3>Social Profiles</h3>
          <div className="links-list">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <i className={item.icon} />
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="links-panel">
          <h3>YouTube</h3>
          <div className="links-list">
            {youtubeLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <i className={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
