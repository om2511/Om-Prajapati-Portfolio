import { useEffect, useState } from "react";
import { heroRoles, profile, stats } from "../data/portfolio";

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = charIndex === currentWord.length;
    const isWordCleared = charIndex === 0;
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (isWordComplete) {
            setIsDeleting(true);
            return;
          }

          setCharIndex((value) => value + 1);
          return;
        }

        if (isWordCleared) {
          setIsDeleting(false);
          setWordIndex((value) => (value + 1) % words.length);
          return;
        }

        setCharIndex((value) => value - 1);
      },
      isDeleting ? 45 : isWordComplete ? 1400 : 90
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return words[wordIndex].slice(0, charIndex);
}

export default function HomeSection() {
  const typedRole = useTypewriter(heroRoles);

  return (
    <section className="hero section" id="home">
      <div className="hero__copy">
        <span className="hero__eyebrow">Professional Portfolio</span>
        <h1>
          <span>Om Prajapati</span>
          <span className="hero__role">
            {typedRole}
            <span className="hero__cursor" />
          </span>
        </h1>
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

      <div className="hero__visual">
        <div className="hero__image-frame">
          <img src={profile.image} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
