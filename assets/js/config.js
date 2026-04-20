export const site = {
  brand: {
    name: "Spider Team",
    shortName: "Spider",
    tagline: "Android Developers • Porters • Recovery Builders",
    subtagline: "The official hub for devices, releases, builders, recoveries, credits, guides, and community updates.",
    email: "beru.spider.team@gmail.com",
    github: "https://github.com/YFMARCO-Dev/Spider-Team.github.io",
    discordInvite: "https://discord.gg/Z9d3KQtV",
    telegramUpdates: "https://t.me/spiderteamupdates",
    telegramChat: "https://t.me/spiderteamchat",
    leaderTelegram: "https://t.me/YFMARCO",
    brandMark: "./assets/img/brand/spider-mark.svg"
  },

  stats: [
    { value: "6", label: "Active device targets" },
    { value: "4", label: "Core team members" },
    { value: "24/7", label: "Community driven" },
    { value: "Static", label: "Fast GitHub Pages build" }
  ],

  navigation: [
    { href: "./index.html", key: "home", label: "Home" },
    { href: "./devices.html", key: "devices", label: "Devices" },
    { href: "./releases.html", key: "releases", label: "Releases" },
    { href: "./projects.html", key: "projects", label: "Projects" },
    { href: "./team.html", key: "team", label: "Team" },
    { href: "./docs.html", key: "docs", label: "Docs" },
    { href: "./contact.html", key: "contact", label: "Contact" }
  ],

  quickLinks: [
    { title: "Status Board", href: "./status.html", desc: "Track build progress, blockers, and what is currently being tested." },
    { title: "Downloads", href: "./downloads.html", desc: "One place for recoveries, tools, mirrors, and install resources." },
    { title: "Known Bugs", href: "./bugs.html", desc: "What works, what is broken, and what still needs logs." },
    { title: "Join Spider Team", href: "./join.html", desc: "Open roles for testers, maintainers, designers, and device maintainers." },
    { title: "Credits", href: "./credits.html", desc: "Contributors, testers, sources, donor notes, and acknowledgements." },
    { title: "Changelog", href: "./changelog.html", desc: "Mini news feed so the site always feels alive." }
  ],

  team: [
    {
      slug: "marco",
      name: "YF MARCO",
      role: "Founder • Main Developer",
      badge: "Owner",
      bio: "Team leader of Spider Team. Focused on custom ROMs, kernels, and recoveries, especially for the Samsung Tab A7 line.",
      github: "https://github.com/YFMARCO-Dev",
      telegram: "https://t.me/YFMARCO",
      discord: "",
      avatar: "https://github.com/YFMARCO-Dev.png?size=400",
      accent: "gold",
      profileFacts: ["Android development", "ROMs / kernels / recoveries", "Samsung Tab A7 focus"]
    },
    {
      slug: "beru",
      name: "BERU",
      role: "Developer • Maintainer • Design",
      badge: "Core",
      bio: "Maintains tooling and visuals, experiments with builders, and helps shape the public face of the team.",
      github: "https://github.com/Il103",
      telegram: "https://t.me/beru2dev",
      discord: "beru.dev",
      avatar: "https://github.com/Il103.png?size=400",
      accent: "green",
      profileFacts: ["Project Onyx", "Recovery builder forks", "Design + coordination"]
    },
    {
      slug: "xiatsuma",
      name: "Xiatsuma",
      role: "Developer",
      badge: "Core",
      bio: "Works on vendor trees, ROM-related projects, and Samsung device experiments.",
      github: "https://github.com/Xiatsuma",
      telegram: "https://t.me/Xiatsuma",
      discord: "",
      avatar: "https://github.com/Xiatsuma.png?size=400",
      accent: "blue",
      profileFacts: ["QuantumROM", "Samsung vendor work", "Python-based utilities"]
    },
    {
      slug: "mk",
      name: "Mohammed Khaled Pro",
      role: "Kernel • Android Developer",
      badge: "Core",
      bio: "Kernel and Android developer from Spider Team, with recovery builders and Android build tooling in public repos.",
      github: "https://github.com/mkpromvp",
      telegram: "https://t.me/MkProMVP",
      discord: "",
      avatar: "https://github.com/mkpromvp.png?size=400",
      accent: "purple",
      profileFacts: ["Kernel and android developer", "OrangeFox builder", "AOSP build tooling"]
    }
  ],

  devices: [
    {
      slug: "gta4l",
      name: "Samsung Tab A7",
      codename: "GTA4L / GTA4LWIFI",
      category: "Tablet",
      work: ["ROM", "Recovery", "Kernel", "Testing"],
      status: "Active",
      progress: 88,
      maintainer: "YF MARCO",
      image: "./devices/gta4l/gta4l.png",
      fallbackImage: "./assets/img/placeholders/device-tablet-gta4l.svg",
      notes: "Main device focus. Public builders and experiments revolve around this target.",
      links: [{label:"Device docs", href:"./docs.html#flashing"}]
    },
    {
      slug: "a36",
      name: "Samsung Galaxy A36",
      codename: "A36",
      category: "Phone",
      work: ["Recovery", "Testing"],
      status: "In Progress",
      progress: 54,
      maintainer: "Spider Team",
      image: "./devices/a36xq/a36xq.png",
      fallbackImage: "./assets/img/placeholders/device-phone-a36.svg",
      notes: "Recovery bring-up and storage / OTG compatibility are the current priority.",
      links: [{label:"Bug tracker", href:"./bugs.html"}]
    },
    {
      slug: "oppo-a5s",
      name: "OPPO A5s",
      codename: "CPH1909 / A5s",
      category: "Phone",
      work: ["ROM Port", "Research"],
      status: "Research",
      progress: 32,
      maintainer: "Spider Team",
      image: "./devices/oppo-a5s/oppo-a5s.png",
      fallbackImage: "./assets/img/placeholders/device-phone-oppo.svg",
      notes: "Porting and compatibility research target.",
      links: [{label:"Status board", href:"./status.html"}]
    },
    {
      slug: "x6886",
      name: "Infinix Hot 60 Pro Plus",
      codename: "X6886",
      category: "Phone",
      work: ["ROM Port", "Testing"],
      status: "Research",
      progress: 41,
      maintainer: "BERU",
      image: "./devices/x6886/x6886.png",
      fallbackImage: "./assets/img/placeholders/device-phone-x6886.svg",
      notes: "Porting experiments and bring-up notes are being organized.",
      links: [{label:"Projects", href:"./projects.html"}]
    },
    {
      slug: "redmi-13c",
      name: "Redmi 13C 4G",
      codename: "Redmi 13C 4G",
      category: "Phone",
      work: ["ROM", "Testing"],
      status: "Planned",
      progress: 20,
      maintainer: "Spider Team",
      image: "./devices/redmi-13c/redmi-13c.png",
      fallbackImage: "./assets/img/placeholders/device-phone-redmi.svg",
      notes: "Planned target for further bring-up work.",
      links: [{label:"Join testing", href:"./join.html"}]
    },
    {
      slug: "a34x",
      name: "Samsung Galaxy A34x",
      codename: "A34x",
      category: "Phone",
      work: ["Vendor", "Kernel", "Recovery"],
      status: "Planned",
      progress: 27,
      maintainer: "Xiatsuma",
      image: "./devices/a34x/a34x.png",
      fallbackImage: "./assets/img/placeholders/device-phone-a34x.svg",
      notes: "Vendor and device-tree related work is part of the roadmap.",
      links: [{label:"Credits", href:"./credits.html"}]
    }
  ],

  releases: [
    {
      title: "Spider Recovery Bring-up",
      device: "Samsung Tab A7 • GTA4L / GTA4LWIFI",
      date: "2026-04-18",
      android: "Android 14/15 Base",
      status: "Testing",
      downloadUrl: "https://github.com/YFMARCO-Dev/YFMARCO_Recoverys_Builder",
      changelog: [
        "Builder pipeline refined for recovery variants.",
        "Team-facing site and docs structure prepared.",
        "Known issues and testing status moved into a dedicated hub."
      ],
      bugs: ["Final package mirrors still need to be added.", "Per-device release notes should be expanded."]
    },
    {
      title: "Galaxy A36 Recovery Bring-up",
      device: "Samsung Galaxy A36",
      date: "2026-04-15",
      android: "Recovery Tree Work",
      status: "Fixing Bugs",
      downloadUrl: "",
      changelog: [
        "Focus moved to storage/OTG behavior and recovery usability.",
        "Public status entry created for easier tracking."
      ],
      bugs: ["OTG and storage behavior still under investigation.", "Mirror not public yet."]
    },
    {
      title: "Hot 60 Pro Plus Port Research",
      device: "Infinix Hot 60 Pro Plus",
      date: "2026-04-12",
      android: "Port Research",
      status: "Research",
      downloadUrl: "",
      changelog: [
        "Port research organized under projects and docs.",
        "Target added to site-wide roadmap."
      ],
      bugs: ["Public artifacts not linked yet."]
    }
  ],

  projects: [
    {
      name: "Spider-Team.github.io",
      owner: "Spider Team",
      kind: "Website",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      href: "https://github.com/YFMARCO-Dev/Spider-Team.github.io",
      summary: "The official public hub for devices, downloads, docs, releases, and community links."
    },
    {
      name: "YFMARCO_Recoverys_Builder",
      owner: "YF MARCO",
      kind: "Recovery Builder",
      stack: ["Python", "GitHub Actions"],
      href: "https://github.com/YFMARCO-Dev/YFMARCO_Recoverys_Builder",
      summary: "Builder workflow covering TWRP, PBRP, OFRP, and SHRP pipelines."
    },
    {
      name: "Action-Magisk-Builder",
      owner: "YF MARCO",
      kind: "Build Tooling",
      stack: ["GitHub Actions"],
      href: "https://github.com/YFMARCO-Dev/Action-Magisk-Builder",
      summary: "Automated Magisk build workflow fork used as part of Android build tooling."
    },
    {
      name: "Android-Builder",
      owner: "YF MARCO",
      kind: "Builder",
      stack: ["Shell"],
      href: "https://github.com/YFMARCO-Dev/Android-Builder",
      summary: "GitHub Actions driven Android kernel or builder experimentation."
    },
    {
      name: "crave_aosp_builder",
      owner: "Mohammed Khaled Pro",
      kind: "AOSP Builder",
      stack: ["Shell", "GitHub Actions"],
      href: "https://github.com/mkpromvp/crave_aosp_builder",
      summary: "Build Android ROMs using GitHub Actions, with OTA-friendly workflow ideas."
    },
    {
      name: "OrangeFox-Recovery-Builder-2024",
      owner: "Mohammed Khaled Pro",
      kind: "Recovery Builder",
      stack: ["Python"],
      href: "https://github.com/mkpromvp/OrangeFox-Recovery-Builder-2024",
      summary: "OrangeFox recovery build pipeline fork used for bring-up and testing."
    },
    {
      name: "QuantumROM",
      owner: "Xiatsuma",
      kind: "Custom ROM Builder",
      stack: ["Python"],
      href: "https://github.com/Xiatsuma/QuantumROM",
      summary: "Custom ROM builder fork with feature integration from multiple projects."
    },
    {
      name: "Project-Onyx",
      owner: "BERU",
      kind: "Kernel Builder",
      stack: ["Kernel", "GitHub Actions"],
      href: "https://github.com/Il103/Project-Onyx",
      summary: "High-performance kernel builder experiment focused on the Galaxy Tab A7 line."
    }
  ],

  statuses: [
    { label: "Tab A7 recovery pipeline", value: "Released / active testing", tone: "good" },
    { label: "Galaxy A36 recovery", value: "Fixing bugs", tone: "warn" },
    { label: "Hot 60 Pro Plus porting", value: "Research", tone: "info" },
    { label: "Redmi 13C bring-up", value: "Planned", tone: "muted" },
    { label: "A34x vendor + kernel work", value: "Planned", tone: "info" }
  ],

  changelog: [
    { date: "2026-04-20", title: "Site structure expanded", text: "Home, Devices, Releases, Projects, Team, Docs, Status, Downloads, Credits, and Join pages are now part of the public hub." },
    { date: "2026-04-19", title: "Community links cleaned up", text: "Telegram, Discord, GitHub, and contact points were unified into a single contact layer." },
    { date: "2026-04-18", title: "Recovery and device tracking improved", text: "Known bugs and progress are now tracked as cards instead of scattered chat messages." },
    { date: "2026-04-17", title: "Device roadmap updated", text: "A36, OPPO A5s, Hot 60 Pro Plus, Redmi 13C, and A34x were added to the active roadmap." }
  ],

  downloads: [
    {
      category: "Recoveries",
      items: [
        { name: "Recovery Builders", href: "https://github.com/YFMARCO-Dev/YFMARCO_Recoverys_Builder", note: "Public builder repo" },
        { name: "OrangeFox Builder", href: "https://github.com/mkpromvp/OrangeFox-Recovery-Builder-2024", note: "Public builder fork" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Action Magisk Builder", href: "https://github.com/YFMARCO-Dev/Action-Magisk-Builder", note: "Automation" },
        { name: "Android Builder", href: "https://github.com/YFMARCO-Dev/Android-Builder", note: "Build workflow" },
        { name: "Project Onyx", href: "https://github.com/Il103/Project-Onyx", note: "Kernel builder experiment" }
      ]
    },
    {
      category: "Guides & Mirrors",
      items: [
        { name: "Docs / Guides", href: "./docs.html", note: "Flashing and reporting basics" },
        { name: "Official contact", href: "./contact.html", note: "Use official links only" }
      ]
    }
  ],

  bugs: [
    { area: "Samsung Tab A7", issue: "Per-device public mirrors still need final URLs.", works: "Builder and project references are public.", severity: "Medium" },
    { area: "Samsung A36", issue: "Storage/OTG behavior needs more testing in recovery.", works: "Tree bring-up and public tracking.", severity: "High" },
    { area: "Hot 60 Pro Plus", issue: "Porting path is still being researched.", works: "Project planning and notes.", severity: "Medium" },
    { area: "Website content", issue: "Real device photos can be dropped into the existing paths to replace placeholders.", works: "Fallback placeholders and layouts are ready.", severity: "Low" }
  ],

  credits: [
    {
      group: "Core Team",
      entries: ["YF MARCO", "BERU", "Xiatsuma", "Mohammed Khaled Pro"]
    },
    {
      group: "Public sources & repos",
      entries: ["GitHub profile avatars", "Public builder repos", "Device notes and status prepared for Spider Team site"]
    },
    {
      group: "Contributors you can add later",
      entries: ["Testers", "Maintainers", "Device tree contributors", "Kernel source contributors", "Mirror maintainers"]
    }
  ],

  docs: [
    {
      title: "How to flash",
      bullets: ["Backup first.", "Read device-specific notes.", "Use the exact build for your codename.", "Collect logs before reporting severe bugs."]
    },
    {
      title: "Requirements",
      bullets: ["Unlocked bootloader where required.", "Correct firmware base.", "ADB / fastboot or Odin tools ready.", "Verified package source."]
    },
    {
      title: "Backup warning",
      bullets: ["Do not flash over unknown data without a backup.", "Keep stock images and recovery access ready.", "Know how to return to stock before testing."]
    },
    {
      title: "Bug report format",
      bullets: ["Device + codename", "Exact build or repo", "What works / what fails", "Logcat / recovery log / screenshots if available"]
    }
  ],

  join: [
    { role: "Testers", details: "People who can verify flashing, report clean logs, and confirm bug fixes across devices." },
    { role: "Maintainers", details: "People ready to own a target device, keep notes up to date, and answer user questions." },
    { role: "Designers", details: "People who can improve visuals, banners, release cards, and community branding." },
    { role: "Device Maintainers", details: "People with real hardware access and enough patience to document bring-up steps properly." }
  ],

  gallery: [
    { title: "Tab A7 device card", image: "./devices/gta4l/gta4l.png", fallbackImage: "./assets/img/placeholders/device-tablet-gta4l.svg" },
    { title: "Galaxy A36 card", image: "./devices/a36xq/a36xq.png", fallbackImage: "./assets/img/placeholders/device-phone-a36.svg" },
    { title: "Spider Team mark", image: "./assets/img/brand/spider-mark.svg", fallbackImage: "./assets/img/brand/spider-mark.svg" },
    { title: "Founder avatar", image: "https://github.com/YFMARCO-Dev.png?size=400", fallbackImage: "./assets/img/brand/spider-mark.svg" }
  ],

  footerGroups: [
    {
      title: "Primary",
      links: [
        { label: "Home", href: "./index.html" },
        { label: "Devices", href: "./devices.html" },
        { label: "Releases", href: "./releases.html" },
        { label: "Projects", href: "./projects.html" },
        { label: "Team", href: "./team.html" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Docs", href: "./docs.html" },
        { label: "Downloads", href: "./downloads.html" },
        { label: "Known Bugs", href: "./bugs.html" },
        { label: "Credits", href: "./credits.html" },
        { label: "Join", href: "./join.html" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Telegram Updates", href: "https://t.me/spiderteamupdates" },
        { label: "Telegram Chat", href: "https://t.me/spiderteamchat" },
        { label: "Discord", href: "https://discord.gg/Z9d3KQtV" },
        { label: "GitHub", href: "https://github.com/YFMARCO-Dev/Spider-Team.github.io" }
      ]
    }
  ]
};

export const i18n = {
  en: {
    navLabel: "Navigation",
    heroKicker: "Spider Team • Official Hub",
    heroTitle1: "Built for",
    heroTitle2: "Android devices",
    heroTitle3: "and serious bring-up work.",
    heroBody: "A clean, fast, config-driven GitHub Pages site for recoveries, ROM ports, builders, guides, credits, downloads, and team updates.",
    ctaDevices: "View devices",
    ctaDownloads: "Open downloads",
    latestRelease: "Latest tracked release",
    supportMatrix: "Support matrix",
    statusBoard: "Status board",
    morePages: "More pages",
    teamLead: "Founder spotlight",
    deviceFilterAll: "All",
    deviceFilterActive: "Active",
    deviceFilterTesting: "Testing",
    deviceFilterPlanned: "Planned",
    releasesTitle: "Releases",
    projectsTitle: "Projects",
    teamTitle: "Team",
    devicesTitle: "Supported devices",
    docsTitle: "Docs & guides",
    downloadsTitle: "Download center",
    bugsTitle: "Known issues",
    creditsTitle: "Credits",
    contactTitle: "Contact & official links",
    joinTitle: "Join Spider Team",
    galleryTitle: "Gallery",
    changelogTitle: "Update feed",
    noDownload: "Mirror pending",
    filterLabel: "Filter",
    searchLabel: "Search",
    officialLinks: "Official links only",
    footerNote: "Static, lightweight, and built to be easy for Marco and the team to edit."
  },
  ar: {
    navLabel: "التنقل",
    heroKicker: "سبايدر تيم • الموقع الرسمي",
    heroTitle1: "مبني لأجهزة",
    heroTitle2: "أندرويد",
    heroTitle3: "وشغل البورت والريكفري الجاد.",
    heroBody: "موقع سريع وخفيف ومبني بطريقة سهلة التعديل على GitHub Pages للرومات والريكفري والبيلدرز والدليل والتحميلات والتحديثات.",
    ctaDevices: "عرض الأجهزة",
    ctaDownloads: "التحميلات",
    latestRelease: "آخر إصدار متابع",
    supportMatrix: "خريطة الدعم",
    statusBoard: "لوحة الحالة",
    morePages: "صفحات إضافية",
    teamLead: "إضاءة على المؤسس",
    deviceFilterAll: "الكل",
    deviceFilterActive: "نشط",
    deviceFilterTesting: "اختبار",
    deviceFilterPlanned: "مخطط",
    releasesTitle: "الإصدارات",
    projectsTitle: "المشاريع",
    teamTitle: "الفريق",
    devicesTitle: "الأجهزة المدعومة",
    docsTitle: "الدليل والإرشادات",
    downloadsTitle: "مركز التحميل",
    bugsTitle: "المشاكل المعروفة",
    creditsTitle: "الاعتمادات",
    contactTitle: "التواصل والروابط الرسمية",
    joinTitle: "انضم إلى سبايدر تيم",
    galleryTitle: "المعرض",
    changelogTitle: "آخر التحديثات",
    noDownload: "الرابط لم يضف بعد",
    filterLabel: "فلتر",
    searchLabel: "بحث",
    officialLinks: "استخدم الروابط الرسمية فقط",
    footerNote: "Static وخفيف ومصمم بحيث ماركو والتيم يقدروا يعدلوا عليه بسهولة."
  }
};
