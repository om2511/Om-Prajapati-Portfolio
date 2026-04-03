import { profile, socialLinks, youtubeLinks } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-2 md:pb-10 md:pt-4">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))] rounded-[32px] border border-[var(--border)] bg-[var(--card)] px-6 py-8 shadow-[var(--shadow-md)] backdrop-blur-xl md:px-8 md:py-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <span className="section-kicker">Portfolio</span>
            <h3 className="mt-5 text-2xl font-bold tracking-[-0.05em] text-[var(--headline)]">
              {profile.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
              Full-stack developer focused on strong interface quality, dependable backend flow,
              and product work that is built to ship cleanly.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-end sm:gap-14 lg:min-w-[360px]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Social
              </span>
              <div className="mt-5 space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm font-medium text-[var(--muted)] transition hover:text-[var(--headline)] md:text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                YouTube
              </span>
              <div className="mt-5 space-y-3">
                {youtubeLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm font-medium text-[var(--muted)] transition hover:text-[var(--headline)] md:text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-[var(--border)] pt-5">
          <p className="text-sm text-[var(--muted)]">© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
