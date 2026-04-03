import { useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(() => (showAll ? projects : projects.slice(0, 3)), [showAll]);

  useEffect(() => {
    if (!showAll) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.querySelectorAll("#projects .reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [showAll]);

  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that show product thinking, UI discipline, and full-stack execution."
        description="Each project here represents practical work. The goal is not to fill space but to show clear interfaces, usable flows, and deliberate technical delivery."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.title} className="surface-card reveal overflow-hidden">
            <div className="overflow-hidden border-b border-[var(--border)] bg-[var(--bg-secondary)] p-3">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full rounded-[22px] object-cover object-[center_18%] transition duration-500 hover:scale-[1.02] md:h-72"
              />
            </div>

            <div className="px-6 py-7 md:px-7 md:py-8">
              <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {project.category}
              </span>
              <h3 className="mt-4 text-[1.7rem] font-bold tracking-[-0.05em] text-[var(--headline)]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.highlights.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary btn-small"
                >
                  GitHub
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary btn-small"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm font-medium text-[var(--muted)]">Live link not published</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {projects.length > 3 ? (
        <div className="mt-8 flex justify-center">
          <button type="button" className="btn-secondary reveal" onClick={() => setShowAll((value) => !value)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
