import SectionHeading from "./SectionHeading";
import { services } from "../data/portfolio";

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Work that is practical, maintainable, and presentable."
        description="This phase keeps the offer set direct instead of padded with vague service language."
      />

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
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
