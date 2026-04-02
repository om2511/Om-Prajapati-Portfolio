import SectionHeading from "./SectionHeading";
import { services } from "../data/portfolio";

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Work shaped around real product delivery, not generic service packaging."
        description="I focus on frontend execution, backend structure, and pragmatic product builds that stay maintainable after launch."
      />

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card reveal">
            <div className="service-card__icon">
              <i className={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
