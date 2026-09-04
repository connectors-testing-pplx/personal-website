# Arnoldo Alonso — Personal Website

A fast, **screen-reader-first**, **bilingual (English / Español)** personal website for Arnoldo Alonso — U.S. Army combat veteran, former Deputy Sheriff, and neurointelligent-systems architect. Built with semantic HTML, hand-written CSS, and zero frameworks. Deployed to GitHub Pages with an automated CI/CD pipeline.

**Live site:** <https://connectors-testing-pplx.github.io/personal-website/>

---

## Accessibility & Inclusion

This site is engineered to be inclusive to **blind and low-vision users** and to **language**. Accessibility is a first-class requirement, not an add-on — consistent with Arnoldo's own work in accessibility engineering for visually and cognitively impaired users.

### Inclusive to the blind and low-vision

- **Semantic HTML landmarks** (`header`, `nav`, `main`, `section`, `footer`) so screen readers can navigate by region.
- **A "Skip to main content" link** that appears on first Tab focus, letting keyboard and screen-reader users bypass the header.
- **One `<h1>`** per page and a correct heading hierarchy (`h1` → `h2` → `h3`) for structured navigation by heading.
- **Every section is labelled** with `aria-labelledby`/`aria-label` so landmarks announce their purpose.
- **Decorative SVGs and icons are marked `aria-hidden="true"`**; meaningful controls have descriptive `aria-label`s that update with state and language.
- **Visible focus styles** (`:focus-visible`) with a 2px outline and offset so keyboard users always know where they are.
- **High-contrast colour palette** in both light and dark themes, with `<meta name="color-scheme" content="light dark">` and `prefers-color-scheme` support.
- **Respects `prefers-reduced-motion`** — animations and transitions are reduced to near-zero for users who need them off.
- **Keyboard-only operable** — the theme and language toggles are real `<button>` elements, fully reachable and activatable without a mouse.
- **No content hidden behind hover-only interactions.**

### Inclusive to language

- **Bilingual content (English / Español)** via a lightweight in-page translation system (`js/i18n.js`).
- The active language is detected from the browser (`navigator.language`), remembered via `localStorage`, and toggled with a visible **EN / ES** button.
- The `<html lang>` attribute updates **dynamically** when the language changes, so screen readers pronounce each language correctly instead of misreading one as the other.
- `og:locale` and `og:locale:alternate` declare both supported locales.
- Plain, inclusive language throughout — no jargon that excludes non-technical readers, and person-first phrasing ("users with visual and cognitive impairments").

---

## Features

- Single-page profile: hero, about, mission, engineering portfolio, principles, and contact
- Light / dark mode with system-preference detection and manual toggle (label is bilingual)
- English / Spanish language toggle with browser-language detection and persistence
- Fully responsive, mobile-first layout
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Semantic HTML, one `<h1>`, proper heading hierarchy, skip-link, visible focus styles
- ~0 JavaScript frameworks; the bundle is a few kilobytes

## Content note

This site presents Arnoldo Alonso's professional profile, including the patented **Ayala** neurointelligent claims-preparation engine and additional architectures focused on ethical command, sovereign intelligence, and dual-use manufacturing. Contact is via [Telegram](https://t.me/alonsobrx).

## Deployment

This site is deployed automatically by a GitHub Actions workflow (`.github/workflows/deploy.yml`) on every push to `main`. It uses the official Pages deployment actions:

- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

The Pages source is set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## Custom domain (CNAME)

A `CNAME` file is included for custom-domain support. By default it contains the placeholder `your-custom-domain.com` and is **not** activated, so the default `*.github.io` URL stays live.

To use your own domain:

1. Replace the contents of `CNAME` with your domain (e.g. `arnoldo.example.com`).
2. In your DNS provider, add a record pointing to GitHub Pages:
   - Apex domain → `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Subdomain → `CNAME` record pointing to `connectors-testing-pplx.github.io`
3. Push to `main`. The workflow now detects a real domain and activates the CNAME.
4. In **Settings → Pages → Custom domain**, confirm the domain, then enable **Enforce HTTPS** (it may take a few minutes to issue the certificate).

## HTTPS

HTTPS is enforced on the Pages site. When a custom domain is active, enable **Enforce HTTPS** in the repository's Pages settings; GitHub provisions a TLS certificate automatically. For the default `*.github.io` URL, HTTPS is enforced automatically.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

## Adding or editing translations

All user-facing strings live in the `STRINGS` dictionary inside `js/i18n.js`, keyed by language (`en`, `es`) and a stable key. HTML elements opt into translation with a `data-i18n="key"` attribute; the `<title>` and `<meta description>` are translated the same way. To add a third language, add a new object under that language code and extend the `LANG_LABELS` map and the toggle UI.

## Project structure

```
.
├── index.html              # Single-page site (semantic, bilingual-ready markup)
├── css/style.css           # Design tokens, accessibility styles, all layout
├── js/i18n.js              # English / Spanish translation system + language toggle
├── js/app.js               # Theme toggle (bilingual labels), scroll header, reveal
├── CNAME                   # Custom domain (placeholder by default)
├── .github/workflows/
│   └── deploy.yml          # Automated GitHub Pages deployment
└── README.md
```

## Accessibility checklist

- [x] Skip-to-content link
- [x] Single `<h1>`, logical heading order
- [x] Landmark regions with ARIA labels
- [x] Decorative graphics hidden from assistive tech
- [x] Visible, high-contrast focus indicators
- [x] Keyboard-operable controls (theme + language)
- [x] `prefers-reduced-motion` respected
- [x] `prefers-color-scheme` respected (light/dark)
- [x] Dynamic `<html lang>` for correct screen-reader pronunciation
- [x] Bilingual content (EN / ES) with persistence
- [x] Sufficient colour contrast in both themes
