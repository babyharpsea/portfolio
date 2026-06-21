import { useLang } from "@/i18n";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="band">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num">04</span>
          <h2>{t("sec.experience")}</h2>
          <span className="rule" />
        </div>
        <div className="exp reveal">
          <div className="when">{t("exp1.when")}</div>
          <div>
            <h3>{t("exp1.title")}</h3>
            <div className="org">{t("exp1.org")}</div>
            <p>{t("exp1.desc")}</p>
          </div>
        </div>
        <div className="exp reveal">
          <div className="when">2020 — 2023</div>
          <div>
            <h3>{t("exp2.title")}</h3>
            <div className="org">{t("exp2.org")}</div>
            <p>{t("exp2.desc")}</p>
          </div>
        </div>
        <div className="exp reveal">
          <div className="when">2024 — 2026</div>
          <div>
            <h3>{t("exp3.title")}</h3>
            <div className="org">IES Nit de l'Albà</div>
            <p>{t("exp3.desc")}</p>
          </div>
        </div>
        <div className="exp reveal">
          <div className="when">{t("exp4.when")}</div>
          <div>
            <h3>Cambridge B2 First — 176/190</h3>
            <div className="org">{t("exp4.org")}</div>
            <p>{t("exp4.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
