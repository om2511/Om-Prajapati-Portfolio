import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar({ activeSection, isDarkTheme, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav)]/90 backdrop-blur-xl">
      <div className="mx-auto grid min-h-[82px] w-[min(1180px,calc(100%-2rem))] grid-cols-[auto_1fr_auto] items-center gap-3">
        <a className="flex items-center gap-3 text-[var(--headline)]" href="#home">
          <span
            className="block h-11 w-11 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-md)]"
            aria-hidden="true"
          >
            <img src={profile.image} alt="" className="h-full w-full object-cover object-top" />
          </span>
          <div className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-[-0.03em] sm:text-base">
              {profile.name}
            </span>
            <span className="hidden text-xs font-medium text-[var(--muted)] sm:block">
              Full-stack developer
            </span>
          </div>
        </a>

        <nav
          className={`mobile-nav absolute left-4 right-4 top-[calc(100%+0.8rem)] flex flex-col gap-1 rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-2 shadow-[var(--shadow-lg)] transition duration-200 md:static md:left-auto md:right-auto md:top-auto md:flex-row md:items-center md:justify-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-3 text-sm font-semibold transition duration-200 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-[var(--accent)] after:to-[var(--accent-alt)] after:transition after:duration-200 ${
                  isActive
                    ? "text-[var(--headline)] after:scale-100 after:opacity-100"
                    : "text-[var(--muted)] after:scale-0 after:opacity-0 hover:text-[var(--headline)]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            className="icon-button"
            onClick={onThemeToggle}
            aria-label="Toggle color theme"
          >
            <i className={isDarkTheme ? "ri-sun-line text-lg" : "ri-moon-line text-lg"} />
          </button>

          <button
            type="button"
            className="icon-button md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <i className={isMenuOpen ? "ri-close-line text-lg" : "ri-menu-4-line text-lg"} />
          </button>
        </div>
      </div>
    </header>
  );
}
