import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/portfolio";

export default function ApproachSection() {
  return (
    <section className="section" id="approach">
      <SectionHeading
        eyebrow="Approach"
        title="How I take work from vague idea to usable product."
        description="My process is direct: clarify the problem, shape the interface, and build the system without unnecessary complexity."
      />

      <div className="approach-grid">
        {processSteps.map((item) => (
          <article key={item.step} className="approach-card reveal">
            <span className="approach-card__step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
