import SectionHeading from "./SectionHeading";
import { focusCards, profile, stackGroups } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section className="section-shell" id="about">
      <SectionHeading
        eyebrow="About"
        title="Frontend polish and backend discipline working as one delivery system."
        description="I build products that need strong visual structure, responsive behavior, and backend decisions that stay maintainable after launch."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card reveal px-6 py-7 md:px-8 md:py-9">
          <p className="text-base leading-8 text-[var(--muted)] md:text-lg">{profile.about}</p>
        </article>

        <article className="surface-card reveal px-6 py-7 md:px-8 md:py-9">
          <h3 className="text-xl font-semibold tracking-[-0.03em]">Core Skills</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {focusCards.map((item) => (
          <article key={item.title} className="surface-card reveal px-6 py-7">
            <h3 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {stackGroups.map((group) => (
          <article key={group.title} className="surface-card reveal px-6 py-7">
            <h3 className="text-lg font-semibold tracking-[-0.03em]">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="pill">
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
