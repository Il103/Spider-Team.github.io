
window.SpiderConfig = {
  site: {
    name: 'Spider Team',
    tagline: 'Android Developers • Porters • Recovery Builders',
    description: 'Spider Team is a multi-device Android development hub focused on custom ROMs, recoveries, builders, testing workflows, and clean release documentation.',
    email: 'beru.spider.team@gmail.com',
    telegramUpdates: 'https://t.me/spiderteamupdates',
    telegramChat: 'https://t.me/spiderteamchat',
    discordInvite: 'https://discord.gg/Z9d3KQtV',
    githubRepo: 'https://github.com/YFMARCO-Dev/Spider-Team.github.io',
    githubOwner: 'YFMARCO-Dev',
    brandMark: 'assets/img/logos/spider1.png',
    brandSeal: 'assets/img/logos/spider.png'
  },
  team: [
    {
      name: 'YF MARCO',
      role: 'Founder / Main Developer',
      shortRole: 'Founder',
      badge: 'Founder',
      github: 'https://github.com/YFMARCO-Dev',
      githubUser: 'YFMARCO-Dev',
      telegram: 'https://t.me/YFMARCO',
      discord: '',
      bio: 'Leads Spider Team and focuses on custom ROMs, kernels, and recoveries, especially around the Samsung Tab A7 ecosystem.'
    },
    {
      name: 'BERU',
      role: 'Developer / Maintainer / Design',
      shortRole: 'Maintainer',
      badge: 'Core',
      github: 'https://github.com/Il103',
      githubUser: 'Il103',
      telegram: 'https://t.me/beru2dev',
      discord: 'beru.dev',
      bio: 'Builds polished web experiences, helps maintain Android projects, and keeps the Spider Team presentation sharp and organized.'
    },
    {
      name: 'Xiatsuma',
      role: 'Developer',
      shortRole: 'Developer',
      badge: 'Dev',
      github: 'https://github.com/Xiatsuma',
      githubUser: 'Xiatsuma',
      telegram: 'https://t.me/Xiatsuma',
      discord: '',
      bio: 'Works across Android source trees and vendor work, with public repositories related to QuantumROM and Samsung device work.'
    },
    {
      name: 'Mohammed Khaled Pro',
      role: 'Kernel / Android Developer',
      shortRole: 'Kernel Dev',
      badge: 'Kernel',
      github: 'https://github.com/mkpromvp',
      githubUser: 'mkpromvp',
      telegram: 'https://t.me/MkProMVP',
      discord: '',
      bio: 'Focused on Android and kernel tooling, with builder repositories and recovery-related work in public projects.'
    }
  ],
  devices: [
    {
      name: 'Samsung Tab A7',
      codename: 'GTA4L / GTA4LWIFI',
      category: 'Tablet',
      image: 'assets/img/devices/gta4l.webp',
      work: ['ROM', 'Recovery', 'Testing'],
      status: 'active',
      android: 'Android 14–16 targets',
      notes: 'Primary Spider Team tablet target and the most mature public device board.'
    },
    {
      name: 'Samsung Galaxy A36',
      codename: 'A36 / A36xq',
      category: 'Phone',
      image: 'assets/img/devices/a36xq.webp',
      work: ['Recovery', 'Testing'],
      status: 'testing',
      android: 'Bring-up / recovery work',
      notes: 'Recovery-focused target with active testing and iteration.'
    },
    {
      name: 'OPPO A5s',
      codename: 'CPH1909',
      category: 'Phone',
      image: 'assets/img/devices/oppo-a5s.webp',
      work: ['ROM', 'Testing'],
      status: 'roadmap',
      android: 'Target planning',
      notes: 'Legacy device target reserved for ports, bring-up experiments, and community requests.'
    },
    {
      name: 'Infinix Hot 60 Pro Plus',
      codename: 'X6886',
      category: 'Phone',
      image: 'assets/img/devices/infinix-hot-60-pro-plus.webp',
      work: ['ROM', 'Porting', 'Testing'],
      status: 'active',
      android: 'Modern port target',
      notes: 'High-interest modern target for porting experiments and custom build work.'
    },
    {
      name: 'Redmi 13C 4G',
      codename: 'gale / 4G line',
      category: 'Phone',
      image: 'assets/img/devices/redmi-13c.webp',
      work: ['ROM', 'Testing'],
      status: 'planning',
      android: 'Support planning',
      notes: 'Added as a planned target for future support and community expansion.'
    },
    {
      name: 'Samsung Galaxy A34',
      codename: 'A34x',
      category: 'Phone',
      image: 'assets/img/devices/a34x.webp',
      work: ['Vendor', 'ROM', 'Testing'],
      status: 'planning',
      android: 'Source exploration',
      notes: 'Tracked as a source and testing target for future device experiments.'
    }
  ],
  featuredRepos: [
    { owner: 'YFMARCO-Dev', repo: 'YFMARCO_Recoverys_Builder', type: 'Builder', note: 'TWRP / PBRP / OFRP / SHRP automation.' },
    { owner: 'YFMARCO-Dev', repo: 'Action-Magisk-Builder', type: 'Builder', note: 'GitHub Action workflow for Magisk builds.' },
    { owner: 'YFMARCO-Dev', repo: 'Android-Builder', type: 'Builder', note: 'Automation-oriented Android builder workflow.' },
    { owner: 'mkpromvp', repo: 'OrangeFox-Recovery-Builder-2024', type: 'Recovery', note: 'Recovery build-focused public tooling.' },
    { owner: 'mkpromvp', repo: 'crave_aosp_builder', type: 'AOSP', note: 'Automation pipeline around Android builds.' },
    { owner: 'Xiatsuma', repo: 'QuantumROM', type: 'ROM', note: 'Public Android source-tree related project.' }
  ],
  releaseWatch: [
    { owner: 'YFMARCO-Dev', repo: 'YFMARCO_Recoverys_Builder' },
    { owner: 'YFMARCO-Dev', repo: 'Action-Magisk-Builder' },
    { owner: 'mkpromvp', repo: 'OrangeFox-Recovery-Builder-2024' }
  ],
  statusBoard: [
    { title: 'Tab A7 bring-up', state: 'released', percent: 88, owner: 'YF MARCO', note: 'Main public device branch with recovery and ROM activity.' },
    { title: 'A36 recovery line', state: 'testing', percent: 56, owner: 'Spider Team', note: 'Focused testing and issue fixing stage.' },
    { title: 'Infinix Hot 60 Pro Plus ports', state: 'building', percent: 64, owner: 'Spider Team', note: 'Ongoing experiments and target preparation.' },
    { title: 'Redmi 13C expansion', state: 'planning', percent: 32, owner: 'Spider Team', note: 'Target catalog and support planning.' },
    { title: 'A34x source exploration', state: 'planning', percent: 28, owner: 'Spider Team', note: 'Vendor and source exploration stage.' }
  ],
  changelog: [
    { date: '2026-04-20', title: 'Spider Team hub refreshed', summary: 'Full static hub rebuilt with devices, team, project boards, docs, and download architecture.', tag: 'Website' },
    { date: '2026-04-20', title: 'Marco Live Board added', summary: 'Live GitHub-powered profile board for YF MARCO added to the homepage.', tag: 'Live Board' },
    { date: '2026-04-20', title: 'Device gallery expanded', summary: 'Real device images were added for the active Spider Team device catalog.', tag: 'Devices' },
    { date: '2026-04-20', title: 'Arabic language mode improved', summary: 'RTL layout, Cairo-based Arabic typography, and language persistence were added.', tag: 'i18n' }
  ],
  downloads: [
    { title: 'Recovery Builders', kind: 'Tooling', description: 'Recovery builder repositories and automation starting points.', links: [
      { label: 'YFMARCO_Recoverys_Builder', href: 'https://github.com/YFMARCO-Dev/YFMARCO_Recoverys_Builder' },
      { label: 'OrangeFox-Recovery-Builder-2024', href: 'https://github.com/mkpromvp/OrangeFox-Recovery-Builder-2024' }
    ]},
    { title: 'Build Automation', kind: 'Builder', description: 'Action-based Android and Magisk build workflows.', links: [
      { label: 'Action-Magisk-Builder', href: 'https://github.com/YFMARCO-Dev/Action-Magisk-Builder' },
      { label: 'Android-Builder', href: 'https://github.com/YFMARCO-Dev/Android-Builder' }
    ]},
    { title: 'Official Community Links', kind: 'Community', description: 'Join the main community spaces for discussion and updates.', links: [
      { label: 'Telegram Updates', href: 'https://t.me/spiderteamupdates' },
      { label: 'Telegram Discussion', href: 'https://t.me/spiderteamchat' },
      { label: 'Discord Server', href: 'https://discord.gg/Z9d3KQtV' }
    ]}
  ],
  knownIssues: [
    { target: 'All devices', area: 'Bug reports', state: 'open', details: 'Public bug board is ready — add real per-device issues from config.js when you want them published.' },
    { target: 'A36 recovery', area: 'Bring-up', state: 'monitoring', details: 'Testing page is prepared to track storage, OTG, decryption, and mount-related notes.' },
    { target: 'Community downloads', area: 'Mirrors', state: 'todo', details: 'Mirror links can be added in the download center when releases are ready.' }
  ],
  credits: {
    sourceCredits: [
      'Device images used from Marco\'s current Spider-Team site for Tab A7 and Galaxy A36.',
      'Additional device renders sourced from Samsung Mobile Press, MobileDokan, and MobileMaya.',
      'Live repo and profile boards powered by the public GitHub API.'
    ],
    contributors: [
      'YF MARCO — Founder / Main Developer',
      'BERU — Developer / Maintainer / Design',
      'Xiatsuma — Developer',
      'Mohammed Khaled Pro — Kernel / Android Developer'
    ],
    thanks: [
      'Testers, maintainers, and device-tree contributors.',
      'Open-source Android ecosystem maintainers and recovery builders.',
      'Spider Team community across Telegram, Discord, and GitHub.'
    ]
  },
  docs: [
    { title: 'How to flash', body: 'Always verify the target device, build slot, Android version, and recovery compatibility before flashing.' },
    { title: 'Requirements', body: 'Back up important data, charge your device, confirm bootloader state, and keep the stock firmware close.' },
    { title: 'Backup warning', body: 'Never treat a test build like a stable public release — make backups before every experiment.' },
    { title: 'Unlock bootloader notes', body: 'Follow the official unlocking path for your device family and understand the warranty / reset implications.' },
    { title: 'Bug report format', body: 'Report device name, codename, build name, exact steps, logs, recovery used, and whether the issue is reproducible.' }
  ],
  join: [
    { role: 'Testers', desc: 'People who can flash, verify, and report issues clearly across supported devices.' },
    { role: 'Maintainers', desc: 'Device-focused contributors who can keep targets alive and organized.' },
    { role: 'Designers', desc: 'People who can help with visuals, releases, banners, and presentation quality.' },
    { role: 'Device Maintainers', desc: 'Contributors responsible for one target and its issue tracking, releases, and notes.' }
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/YFMARCO-Dev/Spider-Team.github.io' },
    { label: 'Telegram Updates', href: 'https://t.me/spiderteamupdates' },
    { label: 'Telegram Discussion', href: 'https://t.me/spiderteamchat' },
    { label: 'Discord', href: 'https://discord.gg/Z9d3KQtV' },
    { label: 'Email', href: 'mailto:beru.spider.team@gmail.com' }
  ]
};
