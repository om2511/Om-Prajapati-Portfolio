import SectionHeading from "./SectionHeading";
import { services } from "../data/portfolio";

export default function ServicesSection() {
  return (
    <section className="section-shell" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Work built around shipping strong product outcomes, not inflated service language."
        description="I focus on the parts that actually matter: interface quality, backend structure, responsive behavior, and maintainable implementation."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="surface-card reveal px-6 py-7 md:px-7 md:py-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-xl text-[var(--accent)]">
              <i className={service.icon} />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
