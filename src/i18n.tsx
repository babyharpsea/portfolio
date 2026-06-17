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
    "hero.status": "Disponible para prácticas, becas o primer empleo",
    "hero.h1":
      "Desarrollo software y me aseguro de que <em>funcione fuera de mi portátil</em>.",
    "hero.lead":
      "Soy Sergio. Disfruto programando, pero también con lo que viene después: dejar las cosas funcionando, automatizar lo repetitivo y poder actualizar sin cruzar los dedos. Ahora me atrae más el DevOps y mañana quizá el desarrollo; me gustan las dos.",
    "hero.where.k": "Dónde",
    "hero.where.v": "España · trabajo en remoto",
    "hero.areas.k": "Áreas",
    "hero.areas.v": "Desarrollo · DevOps · Cloud · Backend",
    "hero.now.k": "Ahora",
    "hero.now.v": "Terminando bachillerato y cacharreando",
    "cta.contact": "Escríbeme",
    "cta.cv": "Pídeme el CV",
    "sec.about": "Sobre mí",
    "about.p1":
      "Llevo desde crío trasteando con ordenadores. Pasé de romper el mío a montar un homelab donde puedo cacharrear sin miedo a liarla, y así es como aprendo: construyendo. Lo que monto intento dejarlo apuntado, más que nada para no perderme yo mismo unos meses después.",
    "about.p2":
      "Estoy acabando el Bachillerato Científico-Tecnológico, pero llevo un par de años metido en serio con Linux, Docker y automatización. Lo que me engancha del DevOps es la mentalidad: que algo funcione en cualquier sitio y no solo en mi máquina, enterarme de los fallos antes que el usuario y poder arreglar las cosas rápido. Aun así, programar me sigue gustando, así que prefiero no casarme con una sola etiqueta.",
    "about.note":
      "Fuera de las pantallas me tira la aviación. Echo ratos en el simulador, sobre todo con el A320, y sin darme cuenta se me ha pegado su manía por las checklists y por no dejar nada al azar.",
    "side.edu.t": "Formación",
    "side.edu.d":
      "Bachillerato Científico-Tecnológico<br>IES Nit de l'Albà · 2024–2026",
    "side.lang.t": "Idiomas",
    "side.lang.d": "Español nativo<br>Inglés — Cambridge B2 First (176/190)",
    "side.off.t": "Fuera de pantalla",
    "side.off.d": "Homelab, automatizar lo que se deje y aviación",
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
      "Un servidor en casa donde lo tengo todo en contenedores y pruebo (y reviento) lo que voy aprendiendo. Entro desde fuera con un túnel de Cloudflare y vigilo que siga vivo con un par de paneles en Grafana.",
    "proj2.title": "Pipeline de entrega continua",
    "proj2.meta": "2025 · automatización",
    "proj2.desc":
      "Cada vez que subo un commit, se construye solo, pasa los tests y publica la imagen de Docker sin que yo toque nada. Lo monté para no tener que volver a desplegar a mano.",
    "proj3.meta": "2026 · este sitio",
    "proj3.desc":
      "Esta misma página. Sin frameworks pesados y servida por Cloudflare, así que no hay servidor que mantener y carga al instante.",
    "sec.experience": "Trayectoria",
    "exp1.when": "2024 — hoy",
    "exp1.title": "Desarrollo y cacharreo por mi cuenta",
    "exp1.org": "Autónomo · proyectos propios",
    "exp1.desc":
      "Proyectos propios, automatizaciones y el mantenimiento de mi homelab. Es donde más aprendo, casi siempre equivocándome primero y arreglándolo yo después.",
    "exp2.title": "Hosting VPS y páginas web",
    "exp2.org": "Proyecto propio",
    "exp2.desc":
      "Monté y llevé un pequeño servicio de hosting con VPS y páginas web. Ahí me peleé por primera vez con DNS, con la administración de servidores y con dejar funcionando herramientas como WHMCS o Grafana. Fue mi primera toma de contacto seria con los sistemas.",
    "exp3.title": "Bachillerato Científico-Tecnológico",
    "exp3.desc":
      "Base de matemáticas, física y tecnología, que es justo por donde quiero seguir: ingeniería y sistemas.",
    "exp4.when": "Certificación",
    "exp4.org": "Equivale a un C1",
    "exp4.desc":
      "Me sirve para manejarme en inglés técnico sin pararme a pensar: leer documentación o seguir una conversación de trabajo. (Speaking 190/190, Listening 181/190.)",
    "sec.contact": "Contacto",
    "contact.h2": "¿Hablamos?",
    "contact.lead":
      "Si buscas a alguien con base técnica y muchas ganas de aprender, escríbeme. Leo todos los correos y contesto.",
    "footer.made": "Hecho a mano con HTML, CSS y el JavaScript justo",
  },
  en: {
    "meta.title": "Sergio Ortuño Galvañ — Software development & DevOps",
    "nav.about": "About",
    "nav.skills": "Stack",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.status": "Open to internships, traineeships or a first job",
    "hero.h1":
      "I build software and make sure it <em>runs beyond my laptop</em>.",
    "hero.lead":
      "I'm Sergio. I enjoy programming, but also everything that comes after: keeping things running, automating the repetitive parts and being able to ship updates without crossing my fingers. Right now I'm drawn more to DevOps and tomorrow maybe to development; I like them both.",
    "hero.where.k": "Where",
    "hero.where.v": "Spain · remote-friendly",
    "hero.areas.k": "Areas",
    "hero.areas.v": "Development · DevOps · Cloud · Backend",
    "hero.now.k": "Now",
    "hero.now.v": "Finishing high school and tinkering",
    "cta.contact": "Get in touch",
    "cta.cv": "Ask me for my CV",
    "sec.about": "About",
    "about.p1":
      "I've been messing around with computers since I was a kid. I went from breaking my own machine to running a homelab where I can tinker without fear of breaking anything important, and that's how I learn: by building. I try to write down whatever I set up, mostly so I don't get lost myself a few months later.",
    "about.p2":
      "I'm finishing my Science & Technology Baccalaureate, but I've spent a couple of years getting serious with Linux, Docker and automation. What hooks me about DevOps is the mindset: making something work anywhere and not just on my machine, finding out about failures before the user does, and being able to fix things fast. Even so, I still enjoy programming, so I'd rather not box myself into a single label.",
    "about.note":
      "Away from screens I'm into aviation. I spend time in the simulator, mostly with the A320, and without realizing it I've picked up its obsession with checklists and leaving nothing to chance.",
    "side.edu.t": "Education",
    "side.edu.d":
      "Science & Technology Baccalaureate<br>IES Nit de l'Albà · 2024–2026",
    "side.lang.t": "Languages",
    "side.lang.d": "Native Spanish<br>English — Cambridge B2 First (176/190)",
    "side.off.t": "Off-screen",
    "side.off.d": "Homelab, automating whatever I can, and aviation",
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
      "A server at home where everything runs in containers and I test (and break) whatever I'm learning. I reach it from outside through a Cloudflare tunnel and keep an eye on it with a couple of Grafana dashboards.",
    "proj2.title": "Continuous delivery pipeline",
    "proj2.meta": "2025 · automation",
    "proj2.desc":
      "Every time I push a commit it builds itself, runs the tests and publishes the Docker image without me touching anything. I set it up so I'd never have to deploy by hand again.",
    "proj3.meta": "2026 · this site",
    "proj3.desc":
      "This very page. No heavy frameworks and served by Cloudflare, so there's no server to maintain and it loads instantly.",
    "sec.experience": "Experience",
    "exp1.when": "2024 — present",
    "exp1.title": "Building and tinkering on my own",
    "exp1.org": "Freelance · personal projects",
    "exp1.desc":
      "My own projects, automations and keeping my homelab alive. It's where I learn the most, usually by getting it wrong first and fixing it myself afterwards.",
    "exp2.title": "VPS hosting and websites",
    "exp2.org": "Own venture",
    "exp2.desc":
      "I built and ran a small hosting service with VPS and websites. That's where I first wrestled with DNS, server administration and keeping tools like WHMCS or Grafana running. It was my first serious contact with systems.",
    "exp3.title": "Science & Technology Baccalaureate",
    "exp3.desc":
      "A foundation in maths, physics and technology, which is exactly where I want to keep going: engineering and systems.",
    "exp4.when": "Certification",
    "exp4.org": "C1-equivalent",
    "exp4.desc":
      "It lets me handle technical English without stopping to think: reading documentation or following a work conversation. (Speaking 190/190, Listening 181/190.)",
    "sec.contact": "Contact",
    "contact.h2": "Let's talk",
    "contact.lead":
      "If you're looking for someone with a technical base and a real drive to learn, drop me a line. I read every email and I reply.",
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
