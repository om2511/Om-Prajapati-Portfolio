export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading-shell">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--headline)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
