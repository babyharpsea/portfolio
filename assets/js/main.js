/* Minimal, unobtrusive interactions: i18n, year, nav state, mobile menu, reveal, scrollspy. */
(function () {
  /* ===== i18n ===== */
  var I18N = {
    es: {
      "meta.title": "Sergio Ortu\u00f1o Galva\u00f1 \u2014 Desarrollo de software y DevOps",
      "nav.about": "Sobre m\u00ed", "nav.skills": "Stack", "nav.projects": "Proyectos",
      "nav.experience": "Trayectoria", "nav.contact": "Contacto",
      "hero.status": "Disponible para pr\u00e1cticas, becas o primer empleo",
      "hero.h1": "Desarrollo software y me aseguro de que <em>funcione fuera de mi port\u00e1til</em>.",
      "hero.lead": "Soy Sergio. Disfruto programando, pero tambi\u00e9n con lo que viene despu\u00e9s: dejar las cosas funcionando, automatizar lo repetitivo y poder actualizar sin cruzar los dedos. Ahora me atrae m\u00e1s el DevOps y ma\u00f1ana quiz\u00e1 el desarrollo; me gustan las dos.",
      "hero.where.k": "D\u00f3nde", "hero.where.v": "Espa\u00f1a \u00b7 trabajo en remoto",
      "hero.areas.k": "\u00c1reas", "hero.areas.v": "Desarrollo \u00b7 DevOps \u00b7 Cloud \u00b7 Backend",
      "hero.now.k": "Ahora", "hero.now.v": "Terminando bachillerato y cacharreando",
      "cta.contact": "Escr\u00edbeme", "cta.cv": "P\u00eddeme el CV",
      "sec.about": "Sobre m\u00ed",
      "about.p1": "Llevo desde cr\u00edo trasteando con ordenadores. Pas\u00e9 de romper el m\u00edo a montar un homelab donde puedo cacharrear sin miedo a liarla, y as\u00ed es como aprendo: construyendo. Lo que monto intento dejarlo apuntado, m\u00e1s que nada para no perderme yo mismo unos meses despu\u00e9s.",
      "about.p2": "Estoy acabando el Bachillerato Cient\u00edfico-Tecnol\u00f3gico, pero llevo un par de a\u00f1os metido en serio con Linux, Docker y automatizaci\u00f3n. Lo que me engancha del DevOps es la mentalidad: que algo funcione en cualquier sitio y no solo en mi m\u00e1quina, enterarme de los fallos antes que el usuario y poder arreglar las cosas r\u00e1pido. Aun as\u00ed, programar me sigue gustando, as\u00ed que prefiero no casarme con una sola etiqueta.",
      "about.note": "Fuera de las pantallas me tira la aviaci\u00f3n. Echo ratos en el simulador, sobre todo con el A320, y sin darme cuenta se me ha pegado su man\u00eda por las checklists y por no dejar nada al azar.",
      "side.edu.t": "Formaci\u00f3n", "side.edu.d": "Bachillerato Cient\u00edfico-Tecnol\u00f3gico<br>IES Nit de l'Alb\u00e0 \u00b7 2024\u20132026",
      "side.lang.t": "Idiomas", "side.lang.d": "Espa\u00f1ol nativo<br>Ingl\u00e9s \u2014 Cambridge B2 First (176/190)",
      "side.off.t": "Fuera de pantalla", "side.off.d": "Homelab, automatizar lo que se deje y aviaci\u00f3n",
      "sec.skills": "Stack",
      "skill.infra": "Infraestructura", "skill.cicd": "Integraci\u00f3n y entrega",
      "skill.obs": "Monitorizaci\u00f3n y nube", "skill.code": "C\u00f3digo",
      "lvl.daily": "A diario", "lvl.ok": "Me defiendo", "lvl.learning": "Aprendiendo", "lvl.basic": "Lo justo",
      "sec.projects": "Proyectos",
      "proj1.meta": "2025 \u00b7 infraestructura personal",
      "proj1.desc": "Un servidor en casa donde lo tengo todo en contenedores y pruebo (y reviento) lo que voy aprendiendo. Entro desde fuera con un t\u00fanel de Cloudflare y vigilo que siga vivo con un par de paneles en Grafana.",
      "proj2.title": "Pipeline de entrega continua", "proj2.meta": "2025 \u00b7 automatizaci\u00f3n",
      "proj2.desc": "Cada vez que subo un commit, se construye solo, pasa los tests y publica la imagen de Docker sin que yo toque nada. Lo mont\u00e9 para no tener que volver a desplegar a mano.",
      "proj3.meta": "2026 \u00b7 este sitio",
      "proj3.desc": "Esta misma p\u00e1gina. Sin frameworks pesados y servida por Cloudflare, as\u00ed que no hay servidor que mantener y carga al instante.",
      "sec.experience": "Trayectoria",
      "exp1.when": "2024 \u2014 hoy", "exp1.title": "Desarrollo y cacharreo por mi cuenta", "exp1.org": "Aut\u00f3nomo \u00b7 proyectos propios",
      "exp1.desc": "Proyectos propios, automatizaciones y el mantenimiento de mi homelab. Es donde m\u00e1s aprendo, casi siempre equivoc\u00e1ndome primero y arregl\u00e1ndolo yo despu\u00e9s.",
      "exp2.title": "Hosting VPS y p\u00e1ginas web", "exp2.org": "Proyecto propio",
      "exp2.desc": "Mont\u00e9 y llev\u00e9 un peque\u00f1o servicio de hosting con VPS y p\u00e1ginas web. Ah\u00ed me pele\u00e9 por primera vez con DNS, con la administraci\u00f3n de servidores y con dejar funcionando herramientas como WHMCS o Grafana. Fue mi primera toma de contacto seria con los sistemas.",
      "exp3.title": "Bachillerato Cient\u00edfico-Tecnol\u00f3gico",
      "exp3.desc": "Base de matem\u00e1ticas, f\u00edsica y tecnolog\u00eda, que es justo por donde quiero seguir: ingenier\u00eda y sistemas.",
      "exp4.when": "Certificaci\u00f3n", "exp4.org": "Equivale a un C1",
      "exp4.desc": "Me sirve para manejarme en ingl\u00e9s t\u00e9cnico sin pararme a pensar: leer documentaci\u00f3n o seguir una conversaci\u00f3n de trabajo. (Speaking 190/190, Listening 181/190.)",
      "sec.contact": "Contacto", "contact.h2": "\u00bfHablamos?",
      "contact.lead": "Si buscas a alguien con base t\u00e9cnica y muchas ganas de aprender, escr\u00edbeme. Leo todos los correos y contesto.",
      "footer.made": "Hecho a mano con HTML, CSS y el JavaScript justo"
    },
    en: {
      "meta.title": "Sergio Ortu\u00f1o Galva\u00f1 \u2014 Software development & DevOps",
      "nav.about": "About", "nav.skills": "Stack", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.contact": "Contact",
      "hero.status": "Open to internships, traineeships or a first job",
      "hero.h1": "I build software and make sure it <em>runs beyond my laptop</em>.",
      "hero.lead": "I'm Sergio. I enjoy programming, but also everything that comes after: keeping things running, automating the repetitive parts and being able to ship updates without crossing my fingers. Right now I'm drawn more to DevOps and tomorrow maybe to development; I like them both.",
      "hero.where.k": "Where", "hero.where.v": "Spain \u00b7 remote-friendly",
      "hero.areas.k": "Areas", "hero.areas.v": "Development \u00b7 DevOps \u00b7 Cloud \u00b7 Backend",
      "hero.now.k": "Now", "hero.now.v": "Finishing high school and tinkering",
      "cta.contact": "Get in touch", "cta.cv": "Ask me for my CV",
      "sec.about": "About",
      "about.p1": "I've been messing around with computers since I was a kid. I went from breaking my own machine to running a homelab where I can tinker without fear of breaking anything important, and that's how I learn: by building. I try to write down whatever I set up, mostly so I don't get lost myself a few months later.",
      "about.p2": "I'm finishing my Science & Technology Baccalaureate, but I've spent a couple of years getting serious with Linux, Docker and automation. What hooks me about DevOps is the mindset: making something work anywhere and not just on my machine, finding out about failures before the user does, and being able to fix things fast. Even so, I still enjoy programming, so I'd rather not box myself into a single label.",
      "about.note": "Away from screens I'm into aviation. I spend time in the simulator, mostly with the A320, and without realizing it I've picked up its obsession with checklists and leaving nothing to chance.",
      "side.edu.t": "Education", "side.edu.d": "Science & Technology Baccalaureate<br>IES Nit de l'Alb\u00e0 \u00b7 2024\u20132026",
      "side.lang.t": "Languages", "side.lang.d": "Native Spanish<br>English \u2014 Cambridge B2 First (176/190)",
      "side.off.t": "Off-screen", "side.off.d": "Homelab, automating whatever I can, and aviation",
      "sec.skills": "Stack",
      "skill.infra": "Infrastructure", "skill.cicd": "Integration & delivery",
      "skill.obs": "Monitoring & cloud", "skill.code": "Code",
      "lvl.daily": "Daily", "lvl.ok": "Comfortable", "lvl.learning": "Learning", "lvl.basic": "Basics",
      "sec.projects": "Projects",
      "proj1.meta": "2025 \u00b7 personal infrastructure",
      "proj1.desc": "A server at home where everything runs in containers and I test (and break) whatever I'm learning. I reach it from outside through a Cloudflare tunnel and keep an eye on it with a couple of Grafana dashboards.",
      "proj2.title": "Continuous delivery pipeline", "proj2.meta": "2025 \u00b7 automation",
      "proj2.desc": "Every time I push a commit it builds itself, runs the tests and publishes the Docker image without me touching anything. I set it up so I'd never have to deploy by hand again.",
      "proj3.meta": "2026 \u00b7 this site",
      "proj3.desc": "This very page. No heavy frameworks and served by Cloudflare, so there's no server to maintain and it loads instantly.",
      "sec.experience": "Experience",
      "exp1.when": "2024 \u2014 present", "exp1.title": "Building and tinkering on my own", "exp1.org": "Freelance \u00b7 personal projects",
      "exp1.desc": "My own projects, automations and keeping my homelab alive. It's where I learn the most, usually by getting it wrong first and fixing it myself afterwards.",
      "exp2.title": "VPS hosting and websites", "exp2.org": "Own venture",
      "exp2.desc": "I built and ran a small hosting service with VPS and websites. That's where I first wrestled with DNS, server administration and keeping tools like WHMCS or Grafana running. It was my first serious contact with systems.",
      "exp3.title": "Science & Technology Baccalaureate",
      "exp3.desc": "A foundation in maths, physics and technology, which is exactly where I want to keep going: engineering and systems.",
      "exp4.when": "Certification", "exp4.org": "C1-equivalent",
      "exp4.desc": "It lets me handle technical English without stopping to think: reading documentation or following a work conversation. (Speaking 190/190, Listening 181/190.)",
      "sec.contact": "Contact", "contact.h2": "Let's talk",
      "contact.lead": "If you're looking for someone with a technical base and a real drive to learn, drop me a line. I read every email and I reply.",
      "footer.made": "Handmade with HTML, CSS and just enough JavaScript"
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];
    var opts = document.querySelectorAll(".lang-opt");
    opts.forEach(function (o) {
      var on = o.getAttribute("data-lang") === lang;
      o.classList.toggle("active", on);
      o.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var lt = document.getElementById("langToggle");
    if (lt) lt.setAttribute("data-active", lang);
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    var lang = saved;
    if (lang !== "es" && lang !== "en") {
      var nav = (navigator.language || navigator.userLanguage || "es").toLowerCase();
      lang = nav.indexOf("es") === 0 ? "es" : "en";
    }
    applyLang(lang);
    document.querySelectorAll(".lang-opt").forEach(function (o) {
      o.addEventListener("click", function () {
        applyLang(o.getAttribute("data-lang"));
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          document.body.classList.remove("lang-anim");
          void document.body.offsetWidth;
          document.body.classList.add("lang-anim");
        }
      });
    });
  }
  initLang();

  // current year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // nav hairline on scroll
  var navEl = document.getElementById("nav");
  if (navEl) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        navEl.classList.toggle("scrolled", window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // mobile menu
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lowEnd = (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
               (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  if (!reduce && !lowEnd) document.body.classList.add("fx");

  // subtle reveal-on-scroll, with a gentle Apple-style stagger per section
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var sec = el.closest("section, header") || document.body;
        var group = Array.prototype.slice.call(sec.querySelectorAll(".reveal"));
        var i = group.indexOf(el);
        el.style.transitionDelay = (i > 0 ? Math.min(i, 6) * 70 : 0) + "ms";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // scrollspy: highlight current section in the nav
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navAnchors
    .map(function (a) {
      var id = a.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = "#" + en.target.id;
        navAnchors.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
