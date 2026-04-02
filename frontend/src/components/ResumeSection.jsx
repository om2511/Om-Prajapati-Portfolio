import SectionHeading from "./SectionHeading";
import { profile, resumeHighlights } from "../data/portfolio";

export default function ResumeSection() {
  return (
    <section className="section section--split" id="resume">
      <div>
        <SectionHeading
          eyebrow="Resume"
          title="A direct view of the work, tools, and delivery focus behind this portfolio."
          description="The resume is still a static downloadable file, which is the correct level of complexity for this project."
        />
      </div>

      <article className="resume-panel reveal">
        <p>
          Download the resume for a compact summary of experience, technical stack,
          and the kind of product work I am best suited to ship.
        </p>

        <ul className="resume-highlights">
          {resumeHighlights.map((item) => (
            <li key={item}>
              <i className="ri-checkbox-circle-fill" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="resume-panel__actions">
          <a href={profile.resume} download className="button button--primary">
            Download Resume
          </a>
        </div>
      </article>
    </section>
  );
}
