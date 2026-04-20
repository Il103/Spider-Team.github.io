# Spider Team Reforged Site

Static multi-page GitHub Pages site for Spider Team.

## Why this build is better
- No `node_modules`
- No `package-lock.json`
- No build step required
- Multi-page layout with shared CSS + JS
- Config-driven content so Marco can edit one file instead of touching every page
- Lightweight placeholders for device cards, with support for **real images if they already exist** in the repo

## Main files to edit
- `assets/js/config.js` → all team members, devices, releases, projects, links, docs, credits
- `assets/css/app.css` → theme and layout
- `assets/img/brand/spider-mark.svg` → logo mark

## If you already have real device images in the repo
This site tries to load these first:
- `./devices/gta4l/gta4l.png`
- `./devices/a36xq/a36xq.png`
- `./devices/oppo-a5s/oppo-a5s.png`
- `./devices/x6886/x6886.png`
- `./devices/redmi-13c/redmi-13c.png`
- `./devices/a34x/a34x.png`

If they are missing, the site automatically falls back to the lightweight SVG placeholders in `assets/img/placeholders/`.

## Deploy on GitHub Pages
1. Push everything to `Spider-Team.github.io`
2. In **Settings → Pages**, choose **GitHub Actions**
3. Keep only the workflow inside `.github/workflows/deploy.yml`

## Add a new member
Open `assets/js/config.js`, then add one object to `site.team`.

## Add a new device
Open `assets/js/config.js`, then add one object to `site.devices`.
