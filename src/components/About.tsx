import { useLang } from "@/i18n";

export default function About() {
  const { t } = useLang();
  const eduHtml = { __html: t("side.edu.d") };
  const langHtml = { __html: t("side.lang.d") };
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num">01</span>
          <h2>{t("sec.about")}</h2>
          <span className="rule" />
        </div>
        <div className="about-grid">
          <div className="about-body reveal">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p className="note">{t("about.note")}</p>
          </div>
          <aside className="sidecard reveal">
            <dl>
              <div>
                <dt>{t("side.edu.t")}</dt>
                <dd dangerouslySetInnerHTML={eduHtml} />
              </div>
              <div>
                <dt>{t("side.lang.t")}</dt>
                <dd dangerouslySetInnerHTML={langHtml} />
              </div>
              <div>
                <dt>{t("side.off.t")}</dt>
                <dd>{t("side.off.d")}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
