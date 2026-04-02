import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar({ activeSection, isDarkTheme, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#home">
          <span className="site-brand__mark" aria-hidden="true">
            <img src={profile.image} alt="" />
          </span>
          <span className="site-brand__text">{profile.name}</span>
        </a>

        <nav className={`site-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label="Toggle color theme"
          >
            <i className={isDarkTheme ? "ri-sun-line" : "ri-moon-line"} />
          </button>

          <button
            type="button"
            className="site-nav__toggle"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-4-line"} />
          </button>
        </div>
      </div>
    </header>
  );
}
