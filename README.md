# Portfolio — Sergio Ortuño Galvañ

Portfolio personal con un diseño **profesional y sobrio** (editorial, mucho aire, un solo color de acento) orientado a un objetivo profesional en **DevOps / cloud / backend**.
Sitio estático y ligero, sin paso de build: se despliega soltando los archivos en cualquier hosting.

---

## Estructura

```
portfolio/
├─ index.html              # Página principal (todas las secciones)
├─ favicon.svg
├─ og-image.png            # Imagen para redes (1200×630)
├─ og-image.svg            # Fuente vectorial de la imagen social
├─ robots.txt
├─ _headers                # Cabeceras de seguridad/caché (Cloudflare/Netlify)
├─ cv.pdf                  # (REEMPLAZA) tu CV descargable
└─ assets/
   ├─ css/styles.css       # Design system + estilos
   └─ js/main.js           # Nav, menú móvil y reveal sutil al hacer scroll
```

No usa librerías externas: solo HTML, CSS y un poco de JavaScript. Tipografías de Google Fonts (Fraunces + Inter + IBM Plex Mono).

---

## Qué personalizar (todo en `index.html`)

1. **Sobre mí** — ajusta los párrafos a tu historia real.
2. **Stack** — revisa las herramientas y los niveles (Avanzado / Intermedio / Básico / Aprendiendo) para que reflejen tu realidad.
3. **Proyectos** — sustituye los ejemplos por los tuyos (título, descripción, tags y enlace).
4. **Trayectoria** — actualiza experiencia, formación y certificaciones.
5. **CV** — reemplaza `cv.pdf` (ahora hay un marcador) por tu CV real.

Colores y tipografías viven en las variables `:root` de `assets/css/styles.css` (cambia `--accent` para otro color de acento).

---

## Despliegue

### Opción A — Cloudflare Pages (recomendada)
Ideal porque ya usas Cloudflare como proxy y tu dominio es `madebysergio.tech`.

1. Sube esta carpeta a un repositorio de GitHub.
2. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** y elige el repo.
3. Build: **Framework preset** `None`, **Build command** vacío, **Output directory** `/`.
4. Deploy → obtienes una URL `*.pages.dev`.
5. **Custom domains** → añade `madebysergio.tech` (y `www`). Como el DNS ya está en Cloudflare, el SSL se configura solo.

### Opción B — GitHub Pages
1. Sube la carpeta a un repo.
2. **Settings → Pages → Source: Deploy from a branch →** `main` / root.
3. (Opcional) **Custom domain:** `madebysergio.tech` + registro CNAME en Cloudflare.

### Opción C — VPS + Nginx
```nginx
server {
    listen 80;
    server_name madebysergio.tech;
    root /var/www/portfolio;
    index index.html;
    location / { try_files $uri $uri/ =404; }
}
```

> Para previsualizar en local sin instalar nada: `python3 -m http.server 8080` y abre `http://localhost:8080`.

---

© Sergio Ortuño Galvañ.
