import { useLang } from "@/i18n";

export default function Hero() {
  const { t } = useLang();
  const heroHtml = { __html: t("hero.h1") };

  const goContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <span className="status">
          <span className="pulse" />
          <span>{t("hero.status")}</span>
        </span>
        <h1 dangerouslySetInnerHTML={heroHtml} />
        <p className="lead">{t("hero.lead")}</p>
        <div className="hero-meta">
          <div>
            <span className="k">{t("hero.where.k")}</span>
            <span>{t("hero.where.v")}</span>
          </div>
          <div>
            <span className="k">{t("hero.areas.k")}</span>
            <span>{t("hero.areas.v")}</span>
          </div>
          <div>
            <span className="k">{t("hero.now.k")}</span>
            <span>{t("hero.now.v")}</span>
          </div>
        </div>
        <div className="hero-cta">
          <button
            type="button"
            className="btn primary"
            onClick={goContact}
            aria-label={t("cta.contact")}
          >
            {t("cta.contact")}
          </button>
          <a
            href="mailto:sergio@madebysergio.tech?subject=Solicitud%20de%20CV%20-%20Sergio%20Ortuño&body=Hola%20Sergio,%0A%0AMe%20gustaría%20ver%20tu%20CV.%20Soy%20___%20y%20te%20escribo%20por%20___.%0A%0AGracias."
            className="btn ghost"
          >
            {t("cta.cv")}
          </a>
          <a
            href="https://www.linkedin.com/in/serortgal/"
            target="_blank"
            rel="noopener"
            className="btn ghost"
          >
            LinkedIn
          </a>
        </div>
        <div className="horizon" aria-hidden="true">
          <span className="line" />
          <svg
            className="plane"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
          >
            <g transform="rotate(90 12 12)">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </g>
          </svg>
          <span className="line" />
        </div>
      </div>
    </header>
  );
}
