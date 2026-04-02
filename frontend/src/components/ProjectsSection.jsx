import { useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, 3)),
    [showAll]
  );

  useEffect(() => {
    if (!showAll) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document
        .querySelectorAll("#projects .reveal")
        .forEach((element) => element.classList.add("is-visible"));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [showAll]);

  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects built to solve specific product problems."
        description="These projects show how I approach frontend polish, full-stack flow, and practical feature implementation."
      />

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article key={project.title} className="project-card reveal">
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-card__content">
              <span className="project-card__category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-card__highlights">
                {project.highlights.map((item) => (
                  <span key={item} className="project-card__pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-card__actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--small button--ghost"
                >
                  GitHub
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--small button--primary"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="project-card__status">Live link not published</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {projects.length > 3 ? (
        <div className="section-actions reveal">
          <button
            type="button"
            className="button button--ghost"
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
