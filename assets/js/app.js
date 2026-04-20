import { site, i18n } from "./config.js";

const page = document.body.dataset.page || "home";
const langStoreKey = "spiderTeamLang";
const ui = () => i18n[getLang()] || i18n.en;

function getLang() {
  return localStorage.getItem(langStoreKey) || "en";
}

function setLang(lang) {
  localStorage.setItem(langStoreKey, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

setLang(getLang());

const app = document.getElementById("app");

const pageMeta = {
  home: { title: "Home", desc: "Official Spider Team front page." },
  devices: { title: "Devices", desc: "Supported devices and current status." },
  releases: { title: "Releases", desc: "Tracked releases and package status." },
  projects: { title: "Projects", desc: "Public builders, tools, and experiments." },
  team: { title: "Team", desc: "Spider Team members and official profiles." },
  status: { title: "Status", desc: "Build progress and current work." },
  changelog: { title: "Changelog", desc: "Mini news feed and recent updates." },
  downloads: { title: "Downloads", desc: "Official download center." },
  bugs: { title: "Known Bugs", desc: "Current issues and what still needs work." },
  credits: { title: "Credits", desc: "Team and contributor acknowledgements." },
  docs: { title: "Docs", desc: "Guides and reporting basics." },
  join: { title: "Join", desc: "Open roles and community contribution." },
  gallery: { title: "Gallery", desc: "Visual preview for the project." },
  contact: { title: "Contact", desc: "Official links and communication channels." }
};

document.title = `Spider Team • ${pageMeta[page]?.title || "Hub"}`;
document.querySelector('meta[name="description"]')?.setAttribute("content", pageMeta[page]?.desc || site.brand.subtagline);

function header() {
  const links = site.navigation.map(item => {
    const active = item.key === page ? "is-active" : "";
    return `<a class="${active}" href="${item.href}">${item.label}</a>`;
  }).join("");

  const mobileLinks = site.navigation.map(item => `<a href="${item.href}">${item.label}</a>`).join("");

  return `
    <header class="site-header">
      <div class="container topbar">
        <a class="brand" href="./index.html" aria-label="${site.brand.name}">
          <span class="brand-mark"><img src="${site.brand.brandMark}" alt="${site.brand.name}"></span>
          <span class="brand-copy">
            <strong>${site.brand.name}</strong>
            <span>${site.brand.tagline}</span>
          </span>
        </a>

        <nav class="nav" aria-label="${ui().navLabel}">
          ${links}
        </nav>

        <div class="controls">
          <select class="lang" id="langSelect" aria-label="language">
            <option value="en"${getLang()==="en" ? " selected":""}>EN</option>
            <option value="ar"${getLang()==="ar" ? " selected":""}>AR</option>
          </select>
          <button class="burger" id="burgerBtn" aria-label="menu">☰</button>
        </div>
      </div>

      <div class="mobile-drawer container" id="mobileDrawer">
        ${mobileLinks}
        <select class="lang" id="langSelectMobile" aria-label="language">
          <option value="en"${getLang()==="en" ? " selected":""}>English</option>
          <option value="ar"${getLang()==="ar" ? " selected":""}>العربية</option>
        </select>
      </div>
    </header>
  `;
}

function footer() {
  const groups = site.footerGroups.map(group => `
    <section>
      <h4>${group.title}</h4>
      <ul>
        ${group.links.map(link => `<li><a href="${link.href}" ${isExternal(link.href) ? 'target="_blank" rel="noreferrer"' : ""}>${link.label}</a></li>`).join("")}
      </ul>
    </section>
  `).join("");

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <section>
            <div class="brand" style="align-items:flex-start">
              <span class="brand-mark"><img src="${site.brand.brandMark}" alt="${site.brand.name}"></span>
              <span class="brand-copy">
                <strong>${site.brand.name}</strong>
                <span>${site.brand.tagline}</span>
              </span>
            </div>
            <p style="margin-top:14px">${site.brand.subtagline}</p>
          </section>
          ${groups}
        </div>

        <div class="footer-bottom">
          <span>© 2026 ${site.brand.name}</span>
          <span>${ui().footerNote}</span>
        </div>
      </div>
    </footer>
  `;
}

function isExternal(href) {
  return /^https?:\/\//.test(href);
}

function button(label, href, tone = "primary", external = false) {
  if (!href) return `<span class="btn" aria-disabled="true">${ui().noDownload}</span>`;
  return `<a class="btn ${tone}" href="${href}" ${external || isExternal(href) ? 'target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
}

function statusDotClass(value) {
  const map = {
    good: "good",
    warn: "warn",
    info: "info",
    muted: "muted"
  };
  return map[value] || "muted";
}

function hero() {
  const latest = site.releases[0];
  return `
    <section class="hero">
      <div class="container hero-grid">
        <article class="hero-copy-card reveal">
          <span class="kicker">${ui().heroKicker}</span>
          <h1>
            ${ui().heroTitle1}<br>
            <span class="accent">${ui().heroTitle2}</span><br>
            ${ui().heroTitle3}
          </h1>
          <p>${ui().heroBody}</p>

          <div class="hero-actions">
            ${button(ui().ctaDevices, "./devices.html", "primary")}
            ${button(ui().ctaDownloads, "./downloads.html", "secondary")}
          </div>

          <div class="badge-row">
            <span class="pill">${site.brand.tagline}</span>
            <span class="pill">${ui().officialLinks}</span>
            <span class="pill">GitHub Pages</span>
          </div>
        </article>

        <aside class="hero-side reveal">
          <section class="matrix-card">
            <div class="matrix-title">
              <strong>${ui().supportMatrix}</strong>
              <span class="mini">${site.devices.length} devices</span>
            </div>
            <div class="matrix-grid">
              ${site.stats.map(item => `
                <article class="stat">
                  <div class="value">${item.value}</div>
                  <div class="label">${item.label}</div>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="matrix-card">
            <div class="matrix-title">
              <strong>${ui().latestRelease}</strong>
              <span class="mini">${latest.status}</span>
            </div>
            <h3 style="margin:0">${latest.title}</h3>
            <p style="margin-top:8px">${latest.device} • ${latest.android}</p>
            <div class="meta-row">
              <span class="mini">${latest.date}</span>
              <span class="mini">${latest.status}</span>
            </div>
            <div style="margin-top:14px">${button(latest.downloadUrl ? "Open source / download" : ui().noDownload, latest.downloadUrl || "", "primary", true)}</div>
          </section>

          <section class="matrix-card">
            <div class="matrix-title">
              <strong>${ui().statusBoard}</strong>
              <span class="mini">${site.statuses.length} items</span>
            </div>
            <div class="status-list">
              ${site.statuses.slice(0,4).map(item => `
                <div class="status-item">
                  <i class="dot ${statusDotClass(item.tone)}"></i>
                  <div><strong>${item.label}</strong><span>${item.value}</span></div>
                </div>
              `).join("")}
            </div>
          </section>
        </aside>
      </div>
    </section>
  `;
}

function quickLinks() {
  return section(
    ui().morePages,
    "Extra pages that turn the site into a real team hub instead of a one-screen profile.",
    `<div class="grid cols-3 reveal">
      ${site.quickLinks.map(link => `
        <a class="card quick-link" href="${link.href}">
          <div class="accent-badge blue">${link.title}</div>
          <h3>${link.title}</h3>
          <p>${link.desc}</p>
          <span class="arrow">→</span>
        </a>
      `).join("")}
    </div>`
  );
}

function deviceCard(device) {
  return `
    <article class="card device-card reveal" data-status="${device.status.toLowerCase()}" data-name="${escapeAttr(device.name)} ${escapeAttr(device.codename)} ${escapeAttr(device.work.join(" "))}">
      <div class="device-shot">
        <img src="${device.image}" alt="${device.name}" onerror="this.onerror=null;this.src='${device.fallbackImage}'">
      </div>
      <div class="tag-row">
        <span class="tag" data-tone="red">${device.status}</span>
        <span class="tag">${device.category}</span>
        <span class="tag">${device.codename}</span>
      </div>
      <div>
        <h3>${device.name}</h3>
        <p>${device.notes}</p>
      </div>
      <div class="meta-list">
        <div><span>Maintainer</span><strong>${device.maintainer}</strong></div>
        <div><span>Work</span><strong>${device.work.join(" • ")}</strong></div>
      </div>
      <div class="progress"><i style="width:${device.progress}%"></i></div>
      <div class="meta-row">
        ${device.links.map(link => `<a class="mini" href="${link.href}">${link.label}</a>`).join("")}
      </div>
    </article>
  `;
}

function teamCard(member) {
  const discord = member.discord ? `<span class="tag">${member.discord}</span>` : "";
  return `
    <article class="card team-card reveal" data-accent="${member.accent}">
      <div class="team-top">
        <div class="avatar-wrap"><img class="avatar" src="${member.avatar}" alt="${member.name}" onerror="this.onerror=null;this.src='${site.brand.brandMark}'"></div>
        <div>
          <span class="accent-badge ${member.accent}">${member.badge}</span>
          <h3 style="margin-top:10px">${member.name}</h3>
          <p>${member.role}</p>
        </div>
      </div>
      <p>${member.bio}</p>
      <div class="tag-row">
        ${member.profileFacts.map(fact => `<span class="tag">${fact}</span>`).join("")}
        ${discord}
      </div>
      <div class="socials">
        <a href="${member.github}" target="_blank" rel="noreferrer">GitHub</a>
        ${member.telegram ? `<a href="${member.telegram}" target="_blank" rel="noreferrer">Telegram</a>` : ""}
        ${member.discord ? `<span class="tag">${member.discord}</span>` : ""}
      </div>
    </article>
  `;
}

function releaseCard(entry) {
  return `
    <article class="card reveal">
      <div class="tag-row">
        <span class="tag" data-tone="red">${entry.status}</span>
        <span class="tag">${entry.date}</span>
        <span class="tag">${entry.android}</span>
      </div>
      <h3 style="margin-top:12px">${entry.title}</h3>
      <p>${entry.device}</p>

      <div class="dual" style="margin-top:16px">
        <section class="surface" style="padding:14px">
          <strong>Changelog</strong>
          <ul style="margin:10px 0 0; padding-inline-start:18px; color:var(--muted); line-height:1.7">
            ${entry.changelog.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </section>
        <section class="surface" style="padding:14px">
          <strong>Known bugs</strong>
          <ul style="margin:10px 0 0; padding-inline-start:18px; color:var(--muted); line-height:1.7">
            ${entry.bugs.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      </div>

      <div style="margin-top:16px">
        ${button(entry.downloadUrl ? "Open source / download" : ui().noDownload, entry.downloadUrl, "primary", true)}
      </div>
    </article>
  `;
}

function projectCard(project) {
  return `
    <article class="card reveal">
      <div class="tag-row">
        <span class="tag" data-tone="cyan">${project.kind}</span>
        <span class="tag">${project.owner}</span>
      </div>
      <h3 style="margin-top:12px">${project.name}</h3>
      <p>${project.summary}</p>
      <div class="tag-row" style="margin-top:14px">${project.stack.map(item => `<span class="tag">${item}</span>`).join("")}</div>
      <div style="margin-top:16px">${button("Open project", project.href, "secondary", true)}</div>
    </article>
  `;
}

function section(title, desc, inner, id = "") {
  return `
    <section class="section"${id ? ` id="${id}"` : ""}>
      <div class="container">
        <div class="section-header">
          <div>
            <h2>${title}</h2>
            <p>${desc}</p>
          </div>
        </div>
        ${inner}
      </div>
    </section>
  `;
}

function homePage() {
  const founder = site.team[0];
  return `
    ${hero()}

    ${section(ui().devicesTitle, "The main device page is filterable and designed to stay fast even on lower-end devices.", `
      <div class="grid cols-3">
        ${site.devices.slice(0, 3).map(deviceCard).join("")}
      </div>
      <div style="margin-top:16px">${button("Open full device page", "./devices.html", "secondary")}</div>
    `)}

    ${section(ui().releasesTitle, "Show the latest tracked package or milestone with changelog and known bugs.", `
      <div class="latest-release reveal">
        <article class="card">
          <h3>${site.releases[0].title}</h3>
          <p>${site.releases[0].device}</p>
          <div class="meta-row">
            <span class="mini">${site.releases[0].date}</span>
            <span class="mini">${site.releases[0].status}</span>
            <span class="mini">${site.releases[0].android}</span>
          </div>
          <ul style="margin:16px 0 0; padding-inline-start:18px; color:var(--muted); line-height:1.7">
            ${site.releases[0].changelog.map(item => `<li>${item}</li>`).join("")}
          </ul>
          <div style="margin-top:16px">${button(site.releases[0].downloadUrl ? "Open source / download" : ui().noDownload, site.releases[0].downloadUrl, "primary", true)}</div>
        </article>
        <article class="card">
          <h3>${ui().teamLead}</h3>
          <div style="margin-top:16px">${teamCard(founder)}</div>
        </article>
      </div>
    `)}

    ${section(ui().projectsTitle, "Public builders, recovery tooling, ROM experiments, and internal hub work.", `
      <div class="grid cols-3">
        ${site.projects.slice(0,6).map(projectCard).join("")}
      </div>
    `)}

    ${quickLinks()}
  `;
}

function devicesPage() {
  return `
    ${pageHero(ui().devicesTitle, "Every device gets its own card, codename, work type, status, maintainer, and progress bar.")}
    <section class="section">
      <div class="container">
        <div class="filters reveal">
          <input id="deviceSearch" type="search" placeholder="${ui().searchLabel}...">
          <select id="deviceStatus">
            <option value="all">${ui().deviceFilterAll}</option>
            <option value="active">${ui().deviceFilterActive}</option>
            <option value="testing">Testing</option>
            <option value="in progress">In Progress</option>
            <option value="planned">${ui().deviceFilterPlanned}</option>
            <option value="research">Research</option>
          </select>
        </div>
        <div class="grid cols-3" id="deviceGrid">
          ${site.devices.map(deviceCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function releasesPage() {
  return `
    ${pageHero(ui().releasesTitle, "Use real mirrors when you have them. Until then, the site still looks organized without pretending the links exist.")}
    ${section("Tracked release cards", "Status, date, Android base, changelog, bugs, and a clear mirror button.", `
      <div class="grid cols-2">
        ${site.releases.map(releaseCard).join("")}
      </div>
    `)}
  `;
}

function projectsPage() {
  return `
    ${pageHero(ui().projectsTitle, "Public builders, forks, experiments, and utilities that shape Spider Team work.")}
    ${section("Project grid", "These entries live in config.js so Marco can add, remove, or rename them in one place.", `
      <div class="grid cols-3">
        ${site.projects.map(projectCard).join("")}
      </div>
    `)}
  `;
}

function teamPage() {
  return `
    ${pageHero(ui().teamTitle, "Founder, maintainers, developers, social links, and profile facts in a single clean layout.")}
    ${section(ui().teamTitle, "Core members pulled into a single data file. Add more members in assets/js/config.js without touching layout code.", `
      <div class="grid cols-2">
        ${site.team.map(teamCard).join("")}
      </div>
    `)}
  `;
}

function statusPage() {
  return `
    ${pageHero(ui().statusBoard, "A simple board to tell people whether a target is building, testing, fixing bugs, or already out.")}
    ${section(ui().statusBoard, "This is the page that reduces repeated user questions in Telegram and Discord.", `
      <div class="grid cols-2">
        ${site.statuses.map(item => `
          <article class="card reveal">
            <div class="status-item" style="background:none;border:none;padding:0">
              <i class="dot ${statusDotClass(item.tone)}"></i>
              <div><strong>${item.label}</strong><span>${item.value}</span></div>
            </div>
          </article>
        `).join("")}
      </div>
    `)}
    ${section("Roadmap", "A good team site shows what is happening now and what is next.", `
      <div class="notice reveal">
        Current roadmap: keep Tab A7 visible as the flagship target, stabilize A36 recovery work, document Hot 60 Pro Plus research, and prepare clearer onboarding for testers and maintainers.
      </div>
    `)}
  `;
}

function changelogPage() {
  return `
    ${pageHero(ui().changelogTitle, "Mini news feed. Enough to keep the site alive without building a full blog engine.")}
    ${section(ui().changelogTitle, "Update this page whenever a build changes, a bug is fixed, or a new target enters testing.", `
      <div class="timeline">
        ${site.changelog.map(item => `
          <article class="timeline-item reveal">
            <div class="timeline-date">${item.date}</div>
            <div>
              <strong>${item.title}</strong>
              <p style="margin-top:8px">${item.text}</p>
            </div>
          </article>
        `).join("")}
      </div>
    `)}
  `;
}

function downloadsPage() {
  return `
    ${pageHero(ui().downloadsTitle, "A clean download center keeps users away from random mirrors and broken links.")}
    ${section(ui().downloadsTitle, "Recoveries, tools, guides, and official resources in one place.", `
      <div class="grid cols-3">
        ${site.downloads.map(group => `
          <article class="card reveal">
            <h3>${group.category}</h3>
            <div class="meta-list" style="margin-top:14px">
              ${group.items.map(item => `
                <div style="display:block">
                  <strong style="display:block; margin-bottom:6px">${item.name}</strong>
                  <span style="display:block; margin-bottom:10px">${item.note}</span>
                  ${button("Open", item.href, "secondary", isExternal(item.href))}
                </div>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    `)}
  `;
}

function bugsPage() {
  return `
    ${pageHero(ui().bugsTitle, "Be honest. Show what works and what still needs logs. It saves time and makes the team look more serious.")}
    ${section(ui().bugsTitle, "Known issues list for users and testers.", `
      <div class="card reveal">
        <table class="table">
          <thead>
            <tr><th>Area</th><th>Issue</th><th>What works</th><th>Severity</th></tr>
          </thead>
          <tbody>
            ${site.bugs.map(item => `
              <tr>
                <td>${item.area}</td>
                <td>${item.issue}</td>
                <td>${item.works}</td>
                <td>${item.severity}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `)}
  `;
}

function creditsPage() {
  return `
    ${pageHero(ui().creditsTitle, "Credits matter in the Android community. Source trees, testers, donors, and contributors should always be visible.")}
    ${section(ui().creditsTitle, "Keep this page accurate. It makes the project look cleaner and more trustworthy.", `
      <div class="grid cols-3">
        ${site.credits.map(group => `
          <article class="card reveal">
            <h3>${group.group}</h3>
            <ul style="margin:12px 0 0; padding-inline-start:18px; color:var(--muted); line-height:1.8">
              ${group.entries.map(entry => `<li>${entry}</li>`).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    `)}
  `;
}

function docsPage() {
  return `
    ${pageHero(ui().docsTitle, "Guides are where the site stops being a portfolio and becomes genuinely useful to the community.")}
    ${section(ui().docsTitle, "Short docs now, expand later with per-device guides or markdown exports.", `
      <div class="grid cols-2" id="flashing">
        ${site.docs.map(doc => `
          <article class="card reveal">
            <h3>${doc.title}</h3>
            <ul style="margin:12px 0 0; padding-inline-start:18px; color:var(--muted); line-height:1.8">
              ${doc.bullets.map(line => `<li>${line}</li>`).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    `)}
  `;
}

function joinPage() {
  return `
    ${pageHero(ui().joinTitle, "A good team site should help new people understand how they can actually help.")}
    ${section(ui().joinTitle, "You can replace this later with a form or issue template, but even a simple page like this helps a lot.", `
      <div class="grid cols-2">
        ${site.join.map(item => `
          <article class="card reveal">
            <h3>${item.role}</h3>
            <p>${item.details}</p>
          </article>
        `).join("")}
      </div>
      <div style="margin-top:16px">${button("Contact the team", "./contact.html", "primary")}</div>
    `)}
  `;
}

function galleryPage() {
  return `
    ${pageHero(ui().galleryTitle, "Simple preview blocks for devices, avatars, and brand visuals.")}
    ${section(ui().galleryTitle, "Drop real screenshots into the existing paths later. The layout is already ready for them.", `
      <div class="gallery">
        ${site.gallery.map(item => `
          <figure class="card reveal shot" style="margin:0">
            <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null;this.src='${item.fallbackImage}'">
            <figcaption style="margin-top:12px; color:var(--muted)">${item.title}</figcaption>
          </figure>
        `).join("")}
      </div>
    `)}
  `;
}

function contactPage() {
  return `
    ${pageHero(ui().contactTitle, "Official links only. This protects the team and keeps users away from fake mirrors or dead posts.")}
    ${section(ui().contactTitle, "The exact links below should stay current at all times.", `
      <div class="grid cols-2">
        <article class="card reveal">
          <h3>Official links</h3>
          <div class="socials" style="margin-top:14px">
            <a href="${site.brand.github}" target="_blank" rel="noreferrer">GitHub</a>
            <a href="${site.brand.telegramUpdates}" target="_blank" rel="noreferrer">Telegram Updates</a>
            <a href="${site.brand.telegramChat}" target="_blank" rel="noreferrer">Telegram Chat</a>
            <a href="${site.brand.discordInvite}" target="_blank" rel="noreferrer">Discord</a>
            <a href="mailto:${site.brand.email}">${site.brand.email}</a>
          </div>
        </article>
        <article class="card reveal">
          <h3>Why this page matters</h3>
          <p>When downloads, updates, and contact points are scattered across chats, people lose trust fast. A clean official-links page fixes that.</p>
          <div class="meta-row" style="margin-top:14px">
            <span class="mini">${ui().officialLinks}</span>
            <span class="mini">GitHub Pages</span>
            <span class="mini">Static and fast</span>
          </div>
        </article>
      </div>
    `)}
  `;
}

function pageHero(title, body) {
  return `
    <section class="hero" style="padding-bottom:10px">
      <div class="container">
        <article class="hero-copy-card reveal">
          <span class="kicker">${site.brand.name}</span>
          <h1 style="max-width:14ch">${title}</h1>
          <p>${body}</p>
        </article>
      </div>
    </section>
  `;
}

function pageContent() {
  switch (page) {
    case "devices": return devicesPage();
    case "releases": return releasesPage();
    case "projects": return projectsPage();
    case "team": return teamPage();
    case "status": return statusPage();
    case "changelog": return changelogPage();
    case "downloads": return downloadsPage();
    case "bugs": return bugsPage();
    case "credits": return creditsPage();
    case "docs": return docsPage();
    case "join": return joinPage();
    case "gallery": return galleryPage();
    case "contact": return contactPage();
    case "home":
    default: return homePage();
  }
}

function escapeAttr(str) {
  return String(str).replaceAll('"', "&quot;");
}

function mount() {
  app.innerHTML = `${header()}<main>${pageContent()}</main>${footer()}`;
  bindGlobal();
  runReveal();
  if (page === "devices") bindDeviceFilters();
}

function bindGlobal() {
  const langEl = document.getElementById("langSelect");
  const langElMobile = document.getElementById("langSelectMobile");
  const burger = document.getElementById("burgerBtn");
  const drawer = document.getElementById("mobileDrawer");
  [langEl, langElMobile].forEach(el => {
    if (el) {
      el.addEventListener("change", e => {
        setLang(e.target.value);
        mount();
      });
    }
  });
  burger?.addEventListener("click", () => drawer?.classList.toggle("is-open"));
}

function runReveal() {
  const nodes = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  nodes.forEach(node => observer.observe(node));
}

function bindDeviceFilters() {
  const search = document.getElementById("deviceSearch");
  const status = document.getElementById("deviceStatus");
  const cards = [...document.querySelectorAll("#deviceGrid [data-status]")];

  const apply = () => {
    const term = (search?.value || "").trim().toLowerCase();
    const chosen = (status?.value || "all").toLowerCase();

    cards.forEach(card => {
      const hay = (card.dataset.name || "").toLowerCase();
      const state = (card.dataset.status || "").toLowerCase();
      const matchText = !term || hay.includes(term);
      const matchStatus = chosen === "all" || state.includes(chosen);
      card.style.display = matchText && matchStatus ? "" : "none";
    });
  };

  search?.addEventListener("input", apply);
  status?.addEventListener("change", apply);
}

mount();
