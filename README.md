# The Plan D — React Website

Production-grade marketing site for **The Plan D** digital marketing agency, rebuilt from the
original static HTML/CSS/JS into a modern React application.

## Stack
- **Vite + React 18** — fast dev server and lean production build
- **Tailwind CSS** — all styling (brand palette sampled from the logo: royal→azure blue, steel/navy)
- **React Router** — Home, Services, per-service pages, Team, Contact, 404
- **Framer Motion** — subtle, tasteful scroll/entrance animations
- **lucide-react** — icons (only the ones used are imported, so the bundle stays small)
- **EmailJS** — contact form delivery (reuses the original service/template/keys)

## Structure
```
src/
  data/site.js        # single source of truth: company info, services, team, stats
  components/         # Navbar, Footer, ServiceCard, PageHero, Reveal, CountUp, Icon...
  pages/              # Home, ServicesPage, ServiceDetail, Team, Contact, NotFound
public/               # logo, team photos, CNAME, robots.txt, sitemap.xml, 404.html
```
All site content (services, team members, copy) lives in `src/data/site.js` — edit there to update the site.

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages, custom domain www.thepland.in)
The `dist/` folder is a static site. Publish its contents to your Pages branch.
`public/CNAME` keeps the custom domain, and `public/404.html` + the redirect in `src/main.jsx`
make deep links (e.g. `/services/seo`) work on direct load and refresh.

## Notes
- EmailJS keys live in `src/data/site.js` (`emailjs` export). The public key is safe to expose
  (it's client-side by design); to use a different account, swap those three values.
