# MonliTravel

Minimalist, clean single-page business website for **MonliTravel**, a bespoke travel services company. Goal: attract new customers via destination showcases and a lead-capture contact form.

## Structure
| File | Purpose |
|---|---|
| `index.html` | Full landing page: Header, Hero, Destinations (with region filter), Services, About, Testimonials, CTA banner, Contact form, Footer |
| `styles.css` | Design system (CSS variables: ivory/ink/sage/sand palette, Fraunces + Inter typography) and responsive layout |
| `script.js` | Sticky header, mobile nav, destination filtering, scroll-reveal animations, contact-form validation |
| `site.md` | Site plan & design tokens |

## Run locally
```bash
python3 -m http.server 8099
# open http://localhost:8099
```

## Notes
- Images load from Unsplash CDN; fonts from Google Fonts (internet required).
- The contact form is a front-end demo — wire it to a backend or a form service (e.g., Formspree) before production.
