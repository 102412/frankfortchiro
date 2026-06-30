# Frankfort Chiropractic Center

Static HTML/CSS/JS site for Frankfort Chiropractic Center (West & East, Frankfort KY). No build step, no framework, no backend dependency — deployable as-is to any static host.

## Structure

- `index.html` — Home
- `doctors.html` — Our Doctors (full bios)
- `services.html` — Services & conditions treated
- `locations.html` — Locations index
- `locations/west.html`, `locations/east.html` — Per-location pages
- `new-patients.html` — New patient info + intake form
- `contact.html` — Contact info, maps, hours
- `assets/css/style.css` — Design system (colors, type, components)
- `assets/js/main.js` — Mobile nav + intake form interaction
- `assets/img/` — Logo, doctor headshots, office photos

## Brand color

The entire color system is driven by `--brand-blue` in `assets/css/style.css:8`. Swap in the real hex picked from the logo source file and every derived shade (`--brand-blue-dark`, `--brand-blue-darker`, `--brand-blue-light`, `--brand-blue-tint`) follows.

## Known placeholders to revisit before launch

- `--brand-blue` is an estimated blue — replace with the exact hex picked from the logo.
- `assets/img/logo.png` was re-exported from a JPG with a baked-in white background; it is only used on light backgrounds. A true transparent logo file should replace it before using on any dark/colored surface.
- Doctor headshots are 300x300px source thumbnails — fine for the headshot-sized cards used here, but should not be scaled larger.
- Office exterior photos (`assets/img/locations/`) are carried over from the current site and are dated/lower-res; flagged for replacement with fresh photography.
- The new patient intake form (`new-patients.html`) is front-end only; `name` attributes are set up for easy wiring to a form handler or email service.

## Local preview

`.claude/serve.ps1` is a minimal PowerShell static file server used only for local development preview — not required for deployment.
