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
    <section
      className="section-shell grid items-center gap-10 pt-4 md:min-h-[calc(100vh-6rem)] md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] md:gap-12 md:pt-6"
      id="home"
    >
      <div className="reveal max-w-3xl">
        <span className="section-kicker">Full Stack Portfolio</span>
        <p className="mt-5 inline-flex max-w-2xl items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-secondary)] px-5 py-3 text-sm font-medium text-[var(--muted)] md:text-base">
          <i className="ri-sparkling-2-line text-[var(--success)]" />
          {profile.availability}
        </p>
        <h1 className="mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.07em] text-[var(--headline)] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
          {profile.name}
        </h1>
        <div className="hero-role-shell mt-4" aria-live="polite">
          <span
            className={`hero-role block text-2xl font-semibold tracking-[-0.04em] md:text-[2rem] ${
              isVisible ? "is-visible" : ""
            }`}
          >
            {role}
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-[var(--headline)]/90 md:text-[1.28rem] md:leading-9">
          {profile.title}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Start a Conversation
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="surface-card reveal px-5 py-5 sm:px-6">
              <strong className="block text-3xl font-bold tracking-[-0.05em] text-[var(--headline)]">
                {item.value}
              </strong>
              <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal relative">
        <div className="hero-orbit absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.28),_transparent_70%)] blur-xl md:block" />
        <div className="hero-orbit absolute -right-8 bottom-12 hidden h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.22),_transparent_70%)] blur-2xl md:block" />
        <div className="surface-card-strong relative overflow-hidden p-4 sm:p-5">
          <div className="absolute -left-8 top-4 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.34),_transparent_72%)] blur-2xl" />
          <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.28),_transparent_72%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--bg-secondary)] p-2">
            <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent)]" />
            <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(37,99,235,0.16),transparent)]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(15,23,42,0.18),transparent)]" />
            <img
              src={profile.image}
              alt={profile.name}
              className="relative h-[420px] w-full rounded-[22px] object-cover object-top sm:h-[520px]"
            />
          </div>
          <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Stack
              </span>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                React, Tailwind CSS, Node.js, Express, MongoDB, Render.
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Focus
              </span>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Product UI, clean architecture, and reliable shipping workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
