import { useLang } from "@/i18n";
import type { CSSProperties } from "react";
import { TECH_ICONS } from "./techIcons";
import "./skills-icons.css";

type Skill = { name: string; lvl: string };
type Col = { titleKey: string; items: Skill[] };

const COLUMNS: Col[] = [
  {
    titleKey: "skill.infra",
    items: [
      { name: "Linux", lvl: "lvl.daily" },
      { name: "Docker", lvl: "lvl.daily" },
      { name: "Kubernetes", lvl: "lvl.ok" },
      { name: "Terraform", lvl: "lvl.learning" },
    ],
  },
  {
    titleKey: "skill.cicd",
    items: [
      { name: "Git", lvl: "lvl.daily" },
      { name: "GitHub Actions", lvl: "lvl.ok" },
      { name: "GitLab CI", lvl: "lvl.ok" },
    ],
  },
  {
    titleKey: "skill.obs",
    items: [
      { name: "Prometheus", lvl: "lvl.ok" },
      { name: "Grafana", lvl: "lvl.ok" },
      { name: "Cloudflare", lvl: "lvl.ok" },
      { name: "AWS", lvl: "lvl.basic" },
    ],
  },
  {
    titleKey: "skill.code",
    items: [
      { name: "Bash", lvl: "lvl.daily" },
      { name: "Python", lvl: "lvl.ok" },
      { name: "JavaScript", lvl: "lvl.ok" },
      { name: "SQL", lvl: "lvl.basic" },
    ],
  },
];

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="band">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num">02</span>
          <h2>{t("sec.skills")}</h2>
          <span className="rule" />
        </div>
        <div className="skills-grid">
          {COLUMNS.map((col) => (
            <div className="skill-col reveal" key={col.titleKey}>
              <h3>{t(col.titleKey)}</h3>
              <ul>
                {col.items.map((s) => {
                  const ic = TECH_ICONS[s.name];
                  const icoStyle = ic
                    ? ({ "--brand": ic.color } as CSSProperties)
                    : undefined;
                  return (
                    <li key={s.name}>
                      <span className="tech">
                        {ic ? (
                          <span className="ico" style={icoStyle}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path d={ic.d} />
                            </svg>
                          </span>
                        ) : null}
                        <span>{s.name}</span>
                      </span>
                      <span className="lvl">{t(s.lvl)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
