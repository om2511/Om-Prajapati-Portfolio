import { useEffect, useState } from "react";
import { heroRoles, profile, stats } from "../data/portfolio";

function useFadingRoles(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    const switchTimeout = setTimeout(() => {
      setWordIndex((value) => (value + 1) % words.length);
      setIsVisible(true);
    }, 2550);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(switchTimeout);
    };
  }, [wordIndex, words.length]);

  return {
    role: words[wordIndex],
    isVisible
  };
}

export default function HomeSection() {
  const { role, isVisible } = useFadingRoles(heroRoles);

  return (
    <section className="hero section" id="home">
      <div className="hero__copy reveal">
        <span className="hero__eyebrow">Full Stack Portfolio</span>
        <p className="hero__availability">
          <i className="ri-sparkling-2-line" /> {profile.availability}
        </p>
        <h1>
          <span className="hero__name">Om Prajapati</span>
        </h1>
        <div className="hero__role-shell" aria-live="polite">
          <span className={`hero__role ${isVisible ? "is-visible" : ""}`}>{role}</span>
        </div>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="button button--primary">
            View Projects
          </a>
          <a href="#contact" className="button button--ghost">
            Contact Me
          </a>
        </div>

        <div className="hero__stats">
          {stats.map((item) => (
            <div key={item.label} className="hero__stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__visual reveal">
        <div className="hero__image-frame">
          <img src={profile.image} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
