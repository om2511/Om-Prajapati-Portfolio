import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { profile, socialLinks } from "../data/portfolio";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  const contactEndpoint = configuredApiBaseUrl
    ? `${configuredApiBaseUrl.replace(/\/$/, "")}/api/contact`
    : "/api/contact";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Request failed");
      }

      setFormData(initialFormState);
      setStatus({
        type: "success",
        message: "Message saved successfully. I will review it from the backend inbox."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "The message could not be submitted. Check backend configuration and MongoDB connection."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Start with a clear message and I will take it forward from there."
        description="The contact flow is backend-driven and Mongo-backed, so this section behaves like a real application feature instead of a placeholder form."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="surface-card reveal px-6 py-7 md:px-8 md:py-9">
          <h3 className="text-xl font-semibold tracking-[-0.03em]">Direct Contact</h3>
          <ul className="mt-6 space-y-5">
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Email
              </span>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-sm text-[var(--headline)] md:text-base">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Phone
              </span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="mt-2 block text-sm text-[var(--headline)] md:text-base"
              >
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Location
              </span>
              <strong className="mt-2 block text-sm font-medium text-[var(--headline)] md:text-base">
                {profile.location}
              </strong>
            </li>
          </ul>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <i className={`${link.icon} text-lg text-[var(--accent)]`} />
                  <span className="text-sm font-semibold text-[var(--headline)]">{link.label}</span>
                </div>
                <span className="mt-2 block text-sm text-[var(--muted)]">{link.value}</span>
              </a>
            ))}
          </div>
        </article>

        <form className="surface-card reveal px-6 py-7 md:px-8 md:py-9" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[var(--headline)]">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[var(--headline)]">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-[var(--headline)]">Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
              required
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-[var(--headline)]">Message</span>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="form-control resize-none"
              required
            />
          </label>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            <p className="text-sm leading-6 text-[var(--muted)]">
              I usually respond with project direction, scope clarity, or next delivery steps.
            </p>
          </div>

          {status.message ? (
            <p
              className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700"
                  : "border border-rose-500/20 bg-rose-500/10 text-rose-700"
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
