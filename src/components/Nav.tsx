import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n";
import { useTheme } from "@/theme";

const LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projects", key: "nav.projects" },
  { href: "#experience", key: "nav.experience" },
  { href: "#contact", key: "nav.contact" },
];

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    ) as Element[];
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          setActive("#" + (en.target as HTMLElement).id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <nav className={cn("nav", scrolled && "scrolled")} id="nav">
      <div className="wrap inner">
        <a href="#top" className="name">
          Sergio Ortuño<span className="dot">.</span>
        </a>
        <div className="nav-right">
          <div
            className={cn("nav-links", open && "open")}
            id="navLinks"
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName === "A") setOpen(false);
            }}
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(active === l.href && "active")}
              >
                {t(l.key)}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={
              theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            }
            title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <span className="ic sun" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </span>
            <span className="ic moon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </button>
          <div
            className="lang"
            id="langToggle"
            role="group"
            aria-label="Idioma / Language"
            data-active={lang}
          >
            <button
              type="button"
              className={cn("lang-opt", lang === "es" && "active")}
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              type="button"
              className={cn("lang-opt", lang === "en" && "active")}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Menú"
            onClick={() => setOpen((o) => !o)}
          >
            ≡
          </button>
        </div>
      </div>
    </nav>
  );
}
