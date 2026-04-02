import SectionHeading from "./SectionHeading";
import { focusCards, profile, stackGroups } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="About"
        title="Product-focused development with frontend discipline and backend accountability."
        description="I work best on products that need clean visual execution, strong responsiveness, and a backend that stays simple enough to maintain after launch."
      />

      <div className="about-grid">
        <article className="card about-card reveal">
          <p>{profile.about}</p>
        </article>

        <article className="card skills-card reveal">
          <h3>Core Skills</h3>
          <div className="tag-list">
            {profile.skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="focus-grid">
        {focusCards.map((item) => (
          <article key={item.title} className="focus-card reveal">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article key={group.title} className="stack-card reveal">
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
