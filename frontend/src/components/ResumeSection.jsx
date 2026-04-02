import SectionHeading from "./SectionHeading";
import { profile, resumeHighlights } from "../data/portfolio";

export default function ResumeSection() {
  return (
    <section className="section section--split" id="resume">
      <div>
        <SectionHeading
          eyebrow="Resume"
          title="Download the full background, experience, and project summary."
          description="If you want the compact version of my work, stack, and project experience, the resume is the fastest path."
        />
      </div>

      <article className="resume-panel reveal">
        <ul className="resume-highlights">
          {resumeHighlights.map((item) => (
            <li key={item}>
              <i className="ri-check-line" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="resume-panel__actions">
          <a href={profile.resume} download className="button button--primary">
            Download Resume
          </a>
          <a href="#contact" className="button button--ghost">
            Discuss a Project
          </a>
        </div>
      </article>
    </section>
  );
}
