import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/portfolio";

export default function ApproachSection() {
  return (
    <section className="section" id="approach">
      <SectionHeading
        eyebrow="Approach"
        title="A delivery process built to keep product work clear from first pass to launch."
        description="I work through scope, interface quality, and backend structure in a deliberate sequence so the final result feels intentional instead of patched together."
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
