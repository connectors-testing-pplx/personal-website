# Alex Morgan — Personal Website

A fast, accessible, single-page personal website built from a résumé — semantic HTML, hand-written CSS, and zero frameworks. Deployed to GitHub Pages with an automated CI/CD pipeline.

**Live site:** https://connectors-testing-pplx.github.io/personal-website/

## Features

- Single-page résumé: hero, about, experience timeline, projects, skills, education, contact
- Light / dark mode with system-preference detection and manual toggle
- Fully responsive, mobile-first layout
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Semantic HTML, one `<h1>`, proper heading hierarchy, skip-link, focus styles
- ~0 JavaScript frameworks; the bundle is a few hundred bytes

## Deployment

This site is deployed automatically by a GitHub Actions workflow (`.github/workflows/deploy.yml`) on every push to `main`. It uses the official Pages deployment actions:

- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

The Pages source is set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## Custom domain (CNAME)

A `CNAME` file is included for custom-domain support. By default it contains the placeholder `your-custom-domain.com` and is **not** activated, so the default `*.github.io` URL stays live.

To use your own domain:

1. Replace the contents of `CNAME` with your domain (e.g. `alex.example.com`).
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

## Project structure

```
.
├── index.html              # Single-page site
├── css/style.css           # Design tokens + all styles
├── js/app.js               # Theme toggle, scroll header, reveal
├── Alex-Morgan-Resume.pdf  # Downloadable résumé
├── CNAME                   # Custom domain (placeholder by default)
├── .github/workflows/
│   └── deploy.yml          # Automated GitHub Pages deployment
└── README.md
```
