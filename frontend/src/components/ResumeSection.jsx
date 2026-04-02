import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function ResumeSection() {
  return (
    <section className="section section--split" id="resume">
      <div>
        <SectionHeading
          eyebrow="Resume"
          title="Direct access to my experience and project background."
          description="The resume stays as a static downloadable document in this phase because that is the correct level of complexity."
        />
      </div>

      <article className="resume-panel">
        <p>
          Download the resume for a compact view of experience, technical stack,
          and project history.
        </p>
        <a href={profile.resume} download className="button button--primary">
          Download Resume
        </a>
      </article>
    </section>
  );
}
