## Cursor Cloud specific instructions

This is a **static HTML template** project (TMAX / Mighty) — a creative agency portfolio website. There is no build system, no package manager, no backend, and no database.

### Project structure

- `mighty-html/` — Main site: 84+ static HTML pages with CSS, JS, fonts, images, and SCSS source files.
- `mighty-documentation/` — Single-page HTML documentation for the template.

### Running the site

Serve the static files over HTTP (do not use `file://` — JS features require HTTP):

```
serve mighty-html -l 3000
serve mighty-documentation -l 3001
```

`serve` is installed globally via npm. Any static file server works (e.g., `python3 -m http.server`).

### LIFF Quiz (`liff-quiz/`)

A standalone single-page app for a LINE LIFF psychological quiz (scalp care × sleep wellness). Serve on any port:

```
serve liff-quiz -l 3002
```

**Configuration before production deployment** — edit `CONFIG` at the top of `liff-quiz/js/app.js`:
- `LIFF_ID`: Your LINE LIFF app ID from the LINE Developers console.
- `SALES_URL`: The destination sales page URL.
- `TRACKING_ENDPOINT` (optional): A webhook URL for server-side event tracking.
- `GA_MEASUREMENT_ID` (optional): Google Analytics 4 measurement ID.

Tracking is implemented via UTM parameters on the CTA link (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`), plus optional beacon to a webhook endpoint and localStorage event logging.

### Key notes

- **No lint/test/build tooling exists.** There is no `package.json`, no test framework, no linter config. The pre-compiled `style.css` is checked in alongside SCSS sources, but no build pipeline (Gulp/Webpack/etc.) is configured.
- **Contact form** (`contact.html`) uses jQuery AJAX to POST, but the form action is `#` (placeholder) — it will not submit without a backend.
- **Dark/light mode** is toggled via the moon icon on the right side of each page (`meta name="theme-style-mode"`).
- **SCSS sources** live in `mighty-html/assets/scss/` but modifying them requires installing `sass` (dart-sass) separately.
