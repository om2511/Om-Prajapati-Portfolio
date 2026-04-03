import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/portfolio";

export default function ApproachSection() {
  return (
    <section className="section-shell" id="approach">
      <SectionHeading
        eyebrow="Approach"
        title="A delivery process designed to keep scope, UI quality, and implementation aligned."
        description="I move from product clarity to interface execution to technical delivery in a sequence that keeps the work clean instead of patched together late."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {processSteps.map((item) => (
          <article key={item.step} className="surface-card reveal px-6 py-7 md:px-7 md:py-8">
            <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Step {item.step}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
