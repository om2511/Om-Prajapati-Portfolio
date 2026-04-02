import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section className="section section--grid" id="about">
      <SectionHeading
        eyebrow="About"
        title="Engineer first, portfolio second."
        description="This portfolio is being rebuilt around a proper frontend and backend structure because presentation alone is not enough."
      />

      <div className="about-grid">
        <article className="card about-card">
          <p>{profile.about}</p>
        </article>

        <article className="card skills-card">
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
    </section>
  );
}
