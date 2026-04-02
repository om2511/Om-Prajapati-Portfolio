import { navItems } from "../data/portfolio";

export default function Navbar({ activeSection, isDarkTheme, onThemeToggle }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#home">
          <span className="site-brand__mark">OP</span>
          <span className="site-brand__text">Om Prajapati</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label="Toggle color theme"
        >
          <i className={isDarkTheme ? "ri-sun-line" : "ri-moon-line"} />
        </button>
      </div>
    </header>
  );
}
