import SectionHeading from "./SectionHeading";
import { services } from "../data/portfolio";

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="What I can build and improve for you."
        description="I focus on work where design quality and engineering quality are both visible in the final result."
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
