import { useLang } from "@/i18n";

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num">03</span>
          <h2>{t("sec.projects")}</h2>
          <span className="rule" />
        </div>
        <div className="proj-list">
          <article className="proj reveal">
            <div className="idx">01</div>
            <div className="body">
              <h3>Homelab</h3>
              <div className="meta">{t("proj1.meta")}</div>
              <p>{t("proj1.desc")}</p>
              <div className="tags">
                <span>Docker</span>
                <span>Linux</span>
                <span>Cloudflare Tunnel</span>
                <span>Grafana</span>
              </div>
            </div>
            <a
              className="go"
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="Ver proyecto"
            >
              ↗
            </a>
          </article>
          <article className="proj reveal">
            <div className="idx">02</div>
            <div className="body">
              <h3>{t("proj2.title")}</h3>
              <div className="meta">{t("proj2.meta")}</div>
              <p>{t("proj2.desc")}</p>
              <div className="tags">
                <span>GitHub Actions</span>
                <span>Docker</span>
                <span>Bash</span>
              </div>
            </div>
            <a
              className="go"
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="Ver proyecto"
            >
              ↗
            </a>
          </article>
          <article className="proj reveal">
            <div className="idx">03</div>
            <div className="body">
              <h3>madebysergio.tech</h3>
              <div className="meta">{t("proj3.meta")}</div>
              <p>{t("proj3.desc")}</p>
              <div className="tags">
                <span>React / Vite / TS</span>
                <span>Cloudflare Pages</span>
              </div>
            </div>
            <a
              className="go"
              href="https://madebysergio.tech"
              target="_blank"
              rel="noopener"
              aria-label="Ver proyecto"
            >
              ↗
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
