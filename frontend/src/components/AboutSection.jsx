import SectionHeading from "./SectionHeading";
import { focusCards, profile, stackGroups } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section className="section section--grid" id="about">
      <SectionHeading
        eyebrow="About"
        title="I care about product quality, not just code completion."
        description="The strongest work happens when the interface feels intentional, the content is clear, and the backend is boring in the best possible way."
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
