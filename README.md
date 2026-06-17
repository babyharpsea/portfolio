# madebysergio.tech — Portfolio (React)

Migración del portfolio de **Sergio Ortuño Galvañ** a una SPA moderna con
React + Vite + TypeScript + Tailwind + shadcn/ui, conservando el diseño y los
textos bilingües (ES/EN) del sitio estático original.

Esta versión añade animaciones (framer-motion), incluido el botón magnético
(`MagnetizeButton`) en el CTA principal del hero.

> ⚠️ Esta rama (`dev`) es de desarrollo. **No** mezclar a `main` sin revisión.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3** + **shadcn/ui** (Button) + **framer-motion**
- **lucide-react** para iconos
- Despliegue pensado para **Cloudflare Pages**

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción -> dist/
npm run preview  # sirve el build localmente
npm run typecheck
```

## Despliegue en Cloudflare Pages

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Branch:** `dev` (preview) — producción sigue en `main` (sitio estático)

## Estructura

```
index.html
src/
  main.tsx            # punto de entrada, monta <App/> dentro de <LangProvider/>
  App.tsx             # layout + IntersectionObserver para reveals
  i18n.tsx            # diccionario ES/EN + LangProvider/useLang
  index.css           # tokens + estilos portados 1:1 del sitio original
  lib/utils.ts        # helper cn()
  components/
    Nav.tsx Hero.tsx About.tsx Skills.tsx
    Projects.tsx Experience.tsx Contact.tsx Footer.tsx
    ui/
      button.tsx              # shadcn Button
      magnetize-button.tsx    # botón con partículas magnéticas
      magnetize-button-demo.tsx
public/
  favicon.svg og-image.svg og-image.png robots.txt _headers cv.pdf
```

## Notas

- El botón magnético se usa **solo** en el CTA principal del hero, re-tematizado
  a los colores de marca (tinta → azul acento). El resto de botones se mantienen
  como enlaces `.btn ghost`.
- Los binarios `og-image.png` y `cv.pdf` viven en `public/`.
- El idioma se detecta del navegador y se guarda en `localStorage`.
