import SectionHeading from "./SectionHeading";
import { profile, resumeHighlights } from "../data/portfolio";

export default function ResumeSection() {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" id="resume">
      <div>
        <SectionHeading
          eyebrow="Resume"
          title="A direct summary of the tools, product work, and delivery focus behind this portfolio."
          description="The resume stays as a simple downloadable asset, which is the correct level of complexity for this project."
        />
      </div>

      <article className="surface-card reveal px-6 py-7 md:px-8 md:py-9">
        <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
          Download the resume for a compact view of technical strengths, project direction,
          and the kind of product work I am prepared to ship.
        </p>

        <ul className="mt-6 space-y-4">
          {resumeHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--muted)] md:text-base">
              <i className="ri-checkbox-circle-fill mt-1 text-[var(--success)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a href={profile.resume} download className="btn-primary">
            Download Resume
          </a>
        </div>
      </article>
    </section>
  );
}
