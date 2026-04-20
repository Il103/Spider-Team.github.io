# Spider Team Reforged Static Site

This package is a static GitHub Pages-ready rebuild for Spider Team.

## What changed
- Shared CSS + JS instead of repeated inline code.
- Same Spider Team logo files already used in Marco's current site.
- Real device images included for the device catalog.
- Multi-page structure: Home, Devices, Releases, Projects, Team, Status, Changelog, Downloads, Bugs, Credits, Docs, Join, Gallery, Contact.
- Live Marco Board powered by the public GitHub API.
- Easy customization through `assets/js/config.js`.

## Most important file
- `assets/js/config.js`

Edit that file to:
- add or remove team members
- add devices and change statuses
- update download links
- edit docs, credits, join roles, changelog
- change official links and contact info

## Deploy to GitHub Pages
1. Upload everything to `Spider-Team.github.io`
2. Go to `Settings > Pages`
3. Choose `GitHub Actions`
4. Keep `.github/workflows/deploy.yml`

## Notes
- The site is static: no node_modules, no build step required.
- Live data sections use the public GitHub API and cache in localStorage.
- Arabic mode switches the whole layout to RTL with Cairo styling.
