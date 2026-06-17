import { useLang } from "@/i18n";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num">05</span>
          <h2>{t("sec.contact")}</h2>
          <span className="rule" />
        </div>
        <div className="contact-grid reveal">
          <div>
            <h2>{t("contact.h2")}</h2>
            <p className="lead">{t("contact.lead")}</p>
          </div>
          <div className="contact-links">
            <a href="mailto:sergio@madebysergio.tech">
              <span className="k">Email</span>sergio@madebysergio.tech
            </a>
            <a
              href="https://www.linkedin.com/in/serortgal/"
              target="_blank"
              rel="noopener"
            >
              <span className="k">LinkedIn</span>/in/serortgal
            </a>
            <a href="https://madebysergio.tech" target="_blank" rel="noopener">
              <span className="k">Web</span>madebysergio.tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
