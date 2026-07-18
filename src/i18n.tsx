import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";
type Dict = Record<string, string>;

export const I18N: Record<Lang, Dict> = {
  es: {
    "meta.title": "Sergio Ortuño Galvañ — Desarrollo de software y DevOps",
    "nav.about": "Sobre mí",
    "nav.skills": "Stack",
    "nav.projects": "Proyectos",
    "nav.experience": "Trayectoria",
    "nav.contact": "Contacto",
    "hero.status": "Disponible para prácticas y oportunidades junior",
    "hero.h1":
      "Desarrollo software y contribuyo a que <em>funcione de forma fiable fuera del entorno local</em>.",
    "hero.lead":
      "Soy Sergio, desarrollador interesado en DevOps, cloud y backend. Me gusta combinar la programación con la automatización, la observabilidad y los despliegues fiables para construir soluciones que puedan mantenerse y evolucionar con confianza.",
    "hero.where.k": "Dónde",
    "hero.where.v": "España · trabajo en remoto",
    "hero.areas.k": "Áreas",
    "hero.areas.v": "Desarrollo · DevOps · Cloud · Backend",
    "hero.now.k": "Ahora",
    "hero.now.v": "Formación científico-tecnológica y proyectos personales",
    "cta.contact": "Escríbeme",
    "cta.cv": "Pídeme el CV",
    "sec.about": "Sobre mí",
    "about.p1":
      "Me interesan la tecnología y los sistemas desde una edad temprana. Ese interés me llevó a crear un homelab en el que experimento con infraestructura, servicios y automatizaciones. Aprendo construyendo y documento los entornos que configuro para que resulten reproducibles y fáciles de mantener.",
    "about.p2":
      "Durante los últimos años he profundizado en Linux, Docker y automatización. Me atrae especialmente el enfoque DevOps: diseñar sistemas reproducibles, detectar incidencias de forma proactiva y mejorar continuamente los procesos de entrega. También disfruto del desarrollo de software, por lo que mantengo una visión amplia entre desarrollo y operaciones.",
    "about.note":
      "Fuera del ámbito tecnológico, me interesa la aviación y la simulación de vuelo. La disciplina de los procedimientos y las listas de comprobación es una perspectiva que aplico también a mi trabajo técnico.",
    "side.edu.t": "Formación",
    "side.edu.d":
      "Bachillerato Científico-Tecnológico<br>IES Nit de l'Albà · 2024–2026",
    "side.lang.t": "Idiomas",
    "side.lang.d": "Español nativo<br>Inglés — Cambridge B2 First (176/190)",
    "side.off.t": "Fuera de pantalla",
    "side.off.d": "Homelab, automatización y aviación",
    "sec.skills": "Stack",
    "skill.infra": "Infraestructura",
    "skill.cicd": "Integración y entrega",
    "skill.obs": "Monitorización y nube",
    "skill.code": "Código",
    "lvl.daily": "A diario",
    "lvl.ok": "Me defiendo",
    "lvl.learning": "Aprendiendo",
    "lvl.basic": "Lo justo",
    "sec.projects": "Proyectos",
    "proj1.meta": "2025 · infraestructura personal",
    "proj1.desc":
      "Infraestructura personal basada en contenedores para experimentar con servicios y herramientas. Incluye acceso remoto mediante Cloudflare Tunnel y monitorización con paneles de Grafana.",
    "proj2.title": "Pipeline de entrega continua",
    "proj2.meta": "2025 · automatización",
    "proj2.desc":
      "Pipeline que, tras cada commit, compila el proyecto, ejecuta las pruebas y publica la imagen de Docker. Reduce las tareas manuales y aporta consistencia al proceso de despliegue.",
    "proj3.meta": "2026 · este sitio",
    "proj3.desc":
      "Portfolio personal desarrollado con una arquitectura ligera y desplegado en Cloudflare. No requiere mantenimiento de servidores y ofrece una carga rápida.",
    "sec.experience": "Trayectoria",
    "exp1.when": "2024 — hoy",
    "exp1.title": "Desarrollo y sistemas en proyectos propios",
    "exp1.org": "Proyectos personales",
    "exp1.desc":
      "Desarrollo de proyectos propios, automatizaciones y administración de un homelab. Estos proyectos me permiten aplicar de forma práctica conceptos de infraestructura, despliegue y monitorización.",
    "exp2.title": "Hosting VPS y páginas web",
    "exp2.org": "Proyecto propio",
    "exp2.desc":
      "Desarrollé y gestioné un pequeño servicio de hosting con VPS y sitios web. Esta experiencia me permitió trabajar con DNS, administración de servidores y herramientas como WHMCS y Grafana.",
    "exp3.title": "Bachillerato Científico-Tecnológico",
    "exp3.desc":
      "Formación en matemáticas, física y tecnología, con especial interés en continuar mi trayectoria en ingeniería y sistemas.",
    "exp4.when": "Certificación",
    "exp4.org": "Nivel B2 del MCER",
    "exp4.desc":
      "Certificación que acredita un nivel B2 de inglés y capacidad para consultar documentación técnica y participar en conversaciones profesionales. (Speaking 190/190, Listening 181/190.)",
    "sec.contact": "Contacto",
    "contact.h2": "¿Hablamos?",
    "contact.lead":
      "Estoy disponible para colaborar en prácticas y oportunidades junior relacionadas con desarrollo de software, DevOps o sistemas. Puedes escribirme para conocer mejor mi perfil.",
    "footer.made": "Hecho a mano con HTML, CSS y el JavaScript justo",
  },
  en: {
    "meta.title": "Sergio Ortuño Galvañ — Software development & DevOps",
    "nav.about": "About",
    "nav.skills": "Stack",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.status": "Open to internships and junior opportunities",
    "hero.h1":
      "I build software and help ensure it <em>runs reliably beyond the local environment</em>.",
    "hero.lead":
      "I'm Sergio, a developer interested in DevOps, cloud and backend. I enjoy combining software development with automation, observability and reliable deployments to build solutions that can be maintained and evolved with confidence.",
    "hero.where.k": "Where",
    "hero.where.v": "Spain · remote-friendly",
    "hero.areas.k": "Areas",
    "hero.areas.v": "Development · DevOps · Cloud · Backend",
    "hero.now.k": "Now",
    "hero.now.v": "Science and technology education and personal projects",
    "cta.contact": "Get in touch",
    "cta.cv": "Ask me for my CV",
    "sec.about": "About",
    "about.p1":
      "I have been interested in technology and systems from an early age. That interest led me to build a homelab where I experiment with infrastructure, services and automation. I learn by building and document the environments I configure to keep them reproducible and maintainable.",
    "about.p2":
      "Over the past few years, I have focused on Linux, Docker and automation. I am particularly drawn to the DevOps approach: designing reproducible systems, detecting incidents proactively and continuously improving delivery processes. I also enjoy software development, which gives me a broad perspective across development and operations.",
    "about.note":
      "Outside technology, I am interested in aviation and flight simulation. The discipline of procedures and checklists is a perspective I also bring to technical work.",
    "side.edu.t": "Education",
    "side.edu.d":
      "Science & Technology Baccalaureate<br>IES Nit de l'Albà · 2024–2026",
    "side.lang.t": "Languages",
    "side.lang.d": "Native Spanish<br>English — Cambridge B2 First (176/190)",
    "side.off.t": "Off-screen",
    "side.off.d": "Homelab, automation and aviation",
    "sec.skills": "Stack",
    "skill.infra": "Infrastructure",
    "skill.cicd": "Integration & delivery",
    "skill.obs": "Monitoring & cloud",
    "skill.code": "Code",
    "lvl.daily": "Daily",
    "lvl.ok": "Comfortable",
    "lvl.learning": "Learning",
    "lvl.basic": "Basics",
    "sec.projects": "Projects",
    "proj1.meta": "2025 · personal infrastructure",
    "proj1.desc":
      "Personal container-based infrastructure used to experiment with services and tools. It includes remote access through Cloudflare Tunnel and monitoring with Grafana dashboards.",
    "proj2.title": "Continuous delivery pipeline",
    "proj2.meta": "2025 · automation",
    "proj2.desc":
      "A pipeline that builds the project, runs tests and publishes the Docker image after every commit. It reduces manual work and brings consistency to the deployment process.",
    "proj3.meta": "2026 · this site",
    "proj3.desc":
      "Personal portfolio built with a lightweight architecture and deployed on Cloudflare. It requires no server maintenance and delivers fast loading times.",
    "sec.experience": "Experience",
    "exp1.when": "2024 — present",
    "exp1.title": "Development and systems in personal projects",
    "exp1.org": "Personal projects",
    "exp1.desc":
      "Development of personal projects, automations and homelab administration. These projects let me apply infrastructure, deployment and monitoring concepts in a practical setting.",
    "exp2.title": "VPS hosting and websites",
    "exp2.org": "Own venture",
    "exp2.desc":
      "I developed and managed a small hosting service with VPS instances and websites. This experience gave me hands-on exposure to DNS, server administration and tools such as WHMCS and Grafana.",
    "exp3.title": "Science & Technology Baccalaureate",
    "exp3.desc":
      "Education in mathematics, physics and technology, with a particular interest in continuing my path in engineering and systems.",
    "exp4.when": "Certification",
    "exp4.org": "CEFR B2 level",
    "exp4.desc":
      "Certification that demonstrates B2-level English proficiency and the ability to consult technical documentation and participate in professional conversations. (Speaking 190/190, Listening 181/190.)",
    "sec.contact": "Contact",
    "contact.h2": "Let's talk",
    "contact.lead":
      "I am available for internships and junior opportunities in software development, DevOps or systems. Please get in touch to learn more about my profile.",
    "footer.made": "Handmade with HTML, CSS and just enough JavaScript",
  },
};

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || "es").toLowerCase();
  return nav.indexOf("es") === 0 ? "es" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);
  const firstRun = useRef(true);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    const title = I18N[lang]["meta.title"];
    if (title) document.title = title;

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.remove("lang-anim");
      void document.body.offsetWidth;
      document.body.classList.add("lang-anim");
    }
  }, [lang]);

  const t = (key: string) => I18N[lang][key] ?? key;
  const value = { lang, setLang, t };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
