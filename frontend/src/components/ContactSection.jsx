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
    <section className="section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Start with a clear message."
        description="This form is wired for backend submission instead of client-side email hacks."
      />

      <div className="contact-grid">
        <article className="contact-panel">
          <h3>Direct Contact</h3>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </li>
          </ul>

          <div className="social-stack">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <i className={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </article>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="button button--primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status.message ? (
            <p className={`form-status form-status--${status.type}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
