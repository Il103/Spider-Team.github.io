
(() => {
  const CONFIG = window.SpiderConfig;
  const root = document.body.dataset.root || '.';
  const page = document.body.dataset.page || 'home';
  const langStoreKey = 'spider-team-language';
  const lowPerfStoreKey = 'spider-team-lowperf';

  const TRANSLATIONS = {
    en: {
      siteName: 'Spider Team',
      navHome: 'Home', navDevices: 'Devices', navReleases: 'Releases', navProjects: 'Projects', navTeam: 'Team', navStatus: 'Status', navDocs: 'Docs', navContact: 'Contact',
      ctaDevices: 'Explore Devices', ctaProjects: 'Open Projects', ctaDownloads: 'Download Center', ctaTeam: 'Meet the Team', ctaCommunity: 'Join Community', ctaDocs: 'Open Docs',
      heroKicker: 'Android Developers • Porters • Recovery Builders',
      heroTitle1: 'Spider Team builds', heroTitle2: 'clean Android work', heroTitle3: 'for real devices.',
      heroBody: 'A premium multi-device hub for recoveries, ROM bring-up, builders, testing notes, official links, and community-facing release structure.',
      quickDevices: 'Supported devices', latestBoard: 'Latest public board', marcoBoard: 'Marco Live Board',
      pageDevicesTitle: 'Supported Devices', pageDevicesDesc: 'Every target gets a clear card with a real image, codename, work type, and current state.',
      pageReleasesTitle: 'Release Center', pageReleasesDesc: 'Track public release slots and GitHub release activity in one clean place.',
      pageProjectsTitle: 'Projects', pageProjectsDesc: 'Featured tools plus live public repositories from Spider Team members.',
      pageTeamTitle: 'Our Team', pageTeamDesc: 'Clear profiles, roles, avatars, and direct links for the people behind the work.',
      pageStatusTitle: 'Status Board', pageStatusDesc: 'Follow what is building, testing, booting, or waiting for release.',
      pageChangeTitle: 'Changelog', pageChangeDesc: 'A compact feed for updates, progress markers, and public notes.',
      pageDownloadsTitle: 'Download Center', pageDownloadsDesc: 'Keep official mirrors, tooling, recoveries, and community links in one place.',
      pageBugsTitle: 'Known Issues', pageBugsDesc: 'A public-facing issue board that reduces repeated questions and improves clarity.',
      pageCreditsTitle: 'Credits', pageCreditsDesc: 'Source credits, contributors, testers, and acknowledgements.',
      pageDocsTitle: 'Docs & Guides', pageDocsDesc: 'Flash safely, report clearly, and keep your workflow organized.',
      pageJoinTitle: 'Join Spider Team', pageJoinDesc: 'Open roles for people who want to help the team grow.',
      pageGalleryTitle: 'Gallery', pageGalleryDesc: 'A clean visual wall for devices, team visuals, and brand assets.',
      pageContactTitle: 'Contact', pageContactDesc: 'Official links only — no fake mirrors, no confusion.',
      badgeFounder: 'Founder', badgeCore: 'Core', badgeDev: 'Dev', badgeKernel: 'Kernel',
      statusActive: 'Active', statusTesting: 'Testing', statusPlanning: 'Planning', statusRoadmap: 'Roadmap', statusReleased: 'Released', statusBuilding: 'Building', statusMonitoring: 'Monitoring', statusTodo: 'Todo', statusOpen: 'Open',
      latestRepo: 'Latest updated repository', liveStats: 'Live GitHub stats', followers: 'Followers', following: 'Following', repos: 'Public repos', updated: 'Updated',
      featured: 'Featured', liveRepos: 'Live repositories', viewRepo: 'Open Repo', releaseWatch: 'Release watch', noRelease: 'No GitHub release published yet',
      category: 'Category', codename: 'Codename', workType: 'Work type', state: 'State', androidTarget: 'Target', notes: 'Notes',
      downloadsNow: 'Open', officialLinks: 'Official links',
      bugArea: 'Area', bugTarget: 'Target', bugDetails: 'Details',
      creditsSources: 'Source credits', creditsContributors: 'Contributors', creditsThanks: 'Thanks',
      joinApply: 'Contact the team', docsRead: 'Read note', galleryBrand: 'Brand', galleryDevices: 'Devices', galleryTeam: 'Team',
      contactMail: 'Email', contactDiscord: 'Discord', contactTelegram: 'Telegram', contactGithub: 'GitHub',
      footerTag: 'Official Spider Team hub', footerLine: 'Built for clarity, releases, and community trust.',
      langLabel: 'Language',
      heroStatsA: 'Multi-device support', heroStatsB: 'Live profile board', heroStatsC: 'Static, fast, and easy to edit',
      publicUpdate: 'Public update',
      loading: 'Loading live data…',
      errorLoad: 'Could not load live data right now.',
      allProjects: 'All Projects',
      viewAll: 'View All',
      noData: 'No public data available yet.',
      openCommunity: 'Open community links',
      madeFor: 'Made for a cleaner Android community presence.',
      pageHomeLead: 'The official front door for Spider Team.',
      teamFounderNote: 'Team Leader',
      downloadLabel: 'Download',
      docsWarning: 'Always verify your target device before flashing.',
      liveBoardSubtitle: 'Live data fetched from YF MARCO’s public GitHub profile.',
      repoOwner: 'Owner',
      projectsLiveIntro: 'Live public repositories from Marco and Spider Team members.',
      releasesWatchIntro: 'GitHub release activity monitor for selected repositories.',
      bugsIntro: 'Use this page for public, structured issue notes.',
      changelogIntro: 'Compact public feed for improvements and milestones.',
      statusIntro: 'Progress signals with clean labels and percentages.',
      downloadsIntro: 'Use only official links from this page.',
      galleryIntro: 'Real device images and official Spider Team branding.',
      contactIntro: 'Reach the team through the official channels below.',
      joinIntro: 'Roles can be expanded from config.js at any time.',
      docsIntro: 'Keep guides short, useful, and public-facing.',
      creditsIntro: 'Transparent credits matter in Android communities.',
      homeFeaturedSection: 'What this hub gives the community',
      homeFeature1: 'A single official front door',
      homeFeature2: 'A proper device catalog',
      homeFeature3: 'A clear team identity',
      homeFeature4: 'Live project visibility',
      homeFeature5: 'Docs, downloads, and issue clarity',
      homeFeature6: 'An easier way to trust Spider Team releases'
    },
    ar: {
      siteName: 'سبايدر تيم',
      navHome: 'الرئيسية', navDevices: 'الأجهزة', navReleases: 'الإصدارات', navProjects: 'المشاريع', navTeam: 'الفريق', navStatus: 'الحالة', navDocs: 'الدليل', navContact: 'التواصل',
      ctaDevices: 'استعرض الأجهزة', ctaProjects: 'افتح المشاريع', ctaDownloads: 'مركز التحميل', ctaTeam: 'قابل الفريق', ctaCommunity: 'انضم للمجتمع', ctaDocs: 'افتح الدليل',
      heroKicker: 'مطورو أندرويد • بورتات • بيلدرز ريكفري',
      heroTitle1: 'Spider Team يبني', heroTitle2: 'شغل أندرويد مرتب', heroTitle3: 'لأجهزة حقيقية.',
      heroBody: 'واجهة رسمية قوية لأعمال الرومات والريكفري والبيلدرز وملاحظات الاختبار وروابط المجتمع والإصدارات بشكل منظم وواضح.',
      quickDevices: 'الأجهزة المدعومة', latestBoard: 'آخر لوحة عامة', marcoBoard: 'لوحة ماركو المباشرة',
      pageDevicesTitle: 'الأجهزة المدعومة', pageDevicesDesc: 'كل جهاز له كارت واضح بصورة حقيقية وكود نيم ونوع الشغل وحالته الحالية.',
      pageReleasesTitle: 'مركز الإصدارات', pageReleasesDesc: 'تابع أماكن الإصدارات العامة ونشاط GitHub Releases من مكان واحد.',
      pageProjectsTitle: 'المشاريع', pageProjectsDesc: 'أدوات مميزة مع مستودعات عامة مباشرة لأعضاء Spider Team.',
      pageTeamTitle: 'فريقنا', pageTeamDesc: 'بروفايلات واضحة وأدوار وصور وروابط مباشرة للناس اللي ورا الشغل.',
      pageStatusTitle: 'لوحة الحالة', pageStatusDesc: 'اعرف إيه اللي بيتبني أو بيتجرب أو جاهز للنشر.',
      pageChangeTitle: 'سجل التحديثات', pageChangeDesc: 'خلاصة سريعة للتحديثات والمراحل والملاحظات العامة.',
      pageDownloadsTitle: 'مركز التحميل', pageDownloadsDesc: 'اجمع الروابط الرسمية والأدوات والريكفري والمرايات في مكان واحد.',
      pageBugsTitle: 'المشاكل المعروفة', pageBugsDesc: 'صفحة احترافية للمشاكل العامة تقلل الأسئلة وتوضح الوضع.',
      pageCreditsTitle: 'الاعتمادات', pageCreditsDesc: 'مصادر وصناع ومختبرون وشكر لكل من ساهم.',
      pageDocsTitle: 'الدليل والشروحات', pageDocsDesc: 'فلش بأمان وبلّغ عن المشاكل بشكل مرتب وحافظ على شغلك منظم.',
      pageJoinTitle: 'انضم إلى Spider Team', pageJoinDesc: 'أدوار مفتوحة للي حابب يساعد التيم يكبر.',
      pageGalleryTitle: 'المعرض', pageGalleryDesc: 'حائط بصري مرتب للأجهزة والعلامة وصور الفريق.',
      pageContactTitle: 'التواصل', pageContactDesc: 'روابط رسمية فقط بدون لينكات مضروبة أو لخبطة.',
      badgeFounder: 'المؤسس', badgeCore: 'أساسي', badgeDev: 'مطوّر', badgeKernel: 'كيرنل',
      statusActive: 'نشط', statusTesting: 'اختبار', statusPlanning: 'تخطيط', statusRoadmap: 'خارطة طريق', statusReleased: 'منشور', statusBuilding: 'جارٍ البناء', statusMonitoring: 'متابعة', statusTodo: 'قادم', statusOpen: 'مفتوح',
      latestRepo: 'آخر مستودع تم تحديثه', liveStats: 'إحصائيات GitHub مباشرة', followers: 'المتابعون', following: 'يتابع', repos: 'المستودعات العامة', updated: 'آخر تحديث',
      featured: 'مميز', liveRepos: 'المستودعات الحية', viewRepo: 'افتح المستودع', releaseWatch: 'مراقبة الإصدارات', noRelease: 'لا يوجد GitHub Release منشور حتى الآن',
      category: 'الفئة', codename: 'الكود نيم', workType: 'نوع الشغل', state: 'الحالة', androidTarget: 'الهدف', notes: 'ملاحظات',
      downloadsNow: 'افتح', officialLinks: 'الروابط الرسمية',
      bugArea: 'الجزء', bugTarget: 'الهدف', bugDetails: 'التفاصيل',
      creditsSources: 'اعتمادات المصادر', creditsContributors: 'المساهمون', creditsThanks: 'شكر خاص',
      joinApply: 'تواصل مع الفريق', docsRead: 'اقرأ الملاحظة', galleryBrand: 'العلامة', galleryDevices: 'الأجهزة', galleryTeam: 'الفريق',
      contactMail: 'الإيميل', contactDiscord: 'الديسكورد', contactTelegram: 'التليجرام', contactGithub: 'جيت هاب',
      footerTag: 'الواجهة الرسمية لـ Spider Team', footerLine: 'متبني على الوضوح والتنظيم والثقة داخل المجتمع.',
      langLabel: 'اللغة',
      heroStatsA: 'دعم لأكثر من جهاز', heroStatsB: 'لوحة مباشرة لماركو', heroStatsC: 'سريع وثابت وسهل التعديل',
      publicUpdate: 'تحديث عام',
      loading: 'جارٍ تحميل البيانات المباشرة…',
      errorLoad: 'تعذّر تحميل البيانات المباشرة الآن.',
      allProjects: 'كل المشاريع',
      viewAll: 'عرض الكل',
      noData: 'لا توجد بيانات عامة حتى الآن.',
      openCommunity: 'افتح روابط المجتمع',
      madeFor: 'مصمم لواجهة مجتمع أندرويد بشكل أنضف.',
      pageHomeLead: 'الباب الرسمي الأول لـ Spider Team.',
      teamFounderNote: 'قائد الفريق',
      downloadLabel: 'تحميل',
      docsWarning: 'تأكد من الجهاز المستهدف قبل أي عملية فلش.',
      liveBoardSubtitle: 'بيانات مباشرة من بروفايل GitHub العام الخاص بـ YF MARCO.',
      repoOwner: 'المالك',
      projectsLiveIntro: 'مستودعات عامة مباشرة لماركو وأعضاء Spider Team.',
      releasesWatchIntro: 'مراقبة نشاط GitHub Releases لمستودعات محددة.',
      bugsIntro: 'استخدم الصفحة دي للمشاكل العامة بشكل مرتب.',
      changelogIntro: 'سجل عام مختصر للتحديثات والمراحل.',
      statusIntro: 'إشارات تقدم بعناوين ونسب واضحة.',
      downloadsIntro: 'استخدم الروابط الرسمية من الصفحة دي فقط.',
      galleryIntro: 'صور أجهزة حقيقية مع هوية Spider Team الرسمية.',
      contactIntro: 'تواصل مع الفريق من خلال القنوات الرسمية فقط.',
      joinIntro: 'الأدوار دي قابلة للزيادة من ملف config.js بسهولة.',
      docsIntro: 'خلي الشرح قصير ومفيد وواضح للناس.',
      creditsIntro: 'الاعتمادات الواضحة مهمة جدًا في مجتمع الأندرويد.',
      homeFeaturedSection: 'إيه اللي بيديه الموقع للمجتمع',
      homeFeature1: 'واجهة رسمية واحدة واضحة',
      homeFeature2: 'كتالوج أجهزة محترم',
      homeFeature3: 'هوية فريق واضحة',
      homeFeature4: 'ظهور مباشر للمشاريع',
      homeFeature5: 'وضوح في الدليل والتحميلات والمشاكل',
      homeFeature6: 'ثقة أكبر في شغل Spider Team'
    },
    fr: {}, zh: {}, ko: {}
  };

  function t(key) {
    const lang = getLang();
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || key;
  }

  function getLang() {
    return localStorage.getItem(langStoreKey) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(langStoreKey, lang);
    renderApp();
  }

  function isArabic() {
    return getLang() === 'ar';
  }

  function detectLowPerf() {
    if (localStorage.getItem(lowPerfStoreKey)) return localStorage.getItem(lowPerfStoreKey) === '1';
    const memory = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const low = memory <= 4 && cores <= 6 && mobile;
    localStorage.setItem(lowPerfStoreKey, low ? '1' : '0');
    return low;
  }

  function p(path) {
    if (!path) return '#';
    return root === '.' ? path : `${root}/${path}`;
  }

  function navLink(path, labelKey) {
    return `<a href="${p(path)}" class="nav-link ${page === path.split('/')[0] || (page === 'home' && path === 'index.html') ? 'active' : ''}">${t(labelKey)}</a>`;
  }

  function header() {
    return `
      <header class="site-header glass">
        <div class="brand-wrap">
          <a class="brand" href="${p('index.html')}">
            <img src="${p('assets/img/logos/spider1.png')}" alt="Spider Team logo" class="brand-mark" />
            <div>
              <strong>${CONFIG.site.name}</strong>
              <span>${t('heroKicker')}</span>
            </div>
          </a>
        </div>
        <button class="menu-toggle" aria-label="menu">☰</button>
        <nav class="site-nav">
          ${navLink('index.html', 'navHome')}
          ${navLink('devices/index.html', 'navDevices')}
          ${navLink('releases/index.html', 'navReleases')}
          ${navLink('projects/index.html', 'navProjects')}
          ${navLink('team/index.html', 'navTeam')}
          ${navLink('status/index.html', 'navStatus')}
          ${navLink('docs/index.html', 'navDocs')}
          ${navLink('contact/index.html', 'navContact')}
          <label class="lang-pill">
            <span>${t('langLabel')}</span>
            <select id="lang-switch">
              <option value="en" ${getLang()==='en'?'selected':''}>EN</option>
              <option value="ar" ${getLang()==='ar'?'selected':''}>AR</option>
              <option value="fr" ${getLang()==='fr'?'selected':''}>FR</option>
              <option value="zh" ${getLang()==='zh'?'selected':''}>中文</option>
              <option value="ko" ${getLang()==='ko'?'selected':''}>KO</option>
            </select>
          </label>
        </nav>
      </header>
    `;
  }

  function footer() {
    return `
      <footer class="site-footer glass">
        <div class="footer-brand">
          <img src="${p('assets/img/logos/spider.png')}" alt="Spider Team seal" class="footer-seal" />
          <div>
            <strong>${t('footerTag')}</strong>
            <p>${t('footerLine')}</p>
          </div>
        </div>
        <div class="footer-links">
          ${CONFIG.links.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join('')}
        </div>
      </footer>
    `;
  }

  function statusLabel(status) {
    const map = {
      active: t('statusActive'), testing: t('statusTesting'), planning: t('statusPlanning'), roadmap: t('statusRoadmap'),
      released: t('statusReleased'), building: t('statusBuilding'), monitoring: t('statusMonitoring'), todo: t('statusTodo'), open: t('statusOpen')
    };
    return map[status] || status;
  }

  function badgeClass(status) {
    return `badge badge-${status}`;
  }

  function homeTemplate() {
    const topDevices = CONFIG.devices.slice(0, 6).map(device => `<span class="chip">${device.name} <small>${device.codename}</small></span>`).join('');
    const features = ['homeFeature1','homeFeature2','homeFeature3','homeFeature4','homeFeature5','homeFeature6'];
    return `
      <section class="hero reveal">
        <div class="hero-copy-wrap">
          <p class="kicker">${t('heroKicker')}</p>
          <h1 class="hero-title"><span>${t('heroTitle1')}</span><br><span class="outline">${t('heroTitle2')}</span><br><span class="gradient">${t('heroTitle3')}</span></h1>
          <p class="lead">${t('heroBody')}</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="${p('devices/index.html')}">${t('ctaDevices')}</a>
            <a class="btn btn-soft" href="${p('projects/index.html')}">${t('ctaProjects')}</a>
            <a class="btn btn-soft" href="${p('downloads/index.html')}">${t('ctaDownloads')}</a>
          </div>
          <div class="quick-stats">
            <div class="mini-stat glass"><strong>01</strong><span>${t('heroStatsA')}</span></div>
            <div class="mini-stat glass"><strong>02</strong><span>${t('heroStatsB')}</span></div>
            <div class="mini-stat glass"><strong>03</strong><span>${t('heroStatsC')}</span></div>
          </div>
        </div>
        <div class="hero-visual tilt glass depth-card">
          <div class="hero-ring"></div>
          <img src="${p('assets/img/logos/spider1.png')}" alt="Spider Team" class="hero-logo" />
          <div class="hero-panel glass">
            <span class="panel-label">${t('pageHomeLead')}</span>
            <strong>${CONFIG.site.name}</strong>
            <p>${t('madeFor')}</p>
          </div>
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>${t('quickDevices')}</h2>
          <p>${t('pageDevicesDesc')}</p>
        </div>
        <div class="chip-wrap">${topDevices}</div>
      </section>

      <section class="section reveal two-up">
        <div>
          <div class="section-head">
            <h2>${t('marcoBoard')}</h2>
            <p>${t('liveBoardSubtitle')}</p>
          </div>
          <div id="marco-board" class="live-board glass">${skeletonBoard()}</div>
        </div>
        <div>
          <div class="section-head">
            <h2>${t('homeFeaturedSection')}</h2>
            <p>${t('madeFor')}</p>
          </div>
          <div class="feature-grid">
            ${features.map(key => `<article class="feature-card glass reveal tilt"><strong>${t(key)}</strong></article>`).join('')}
          </div>
        </div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <h2>${t('latestBoard')}</h2>
          <p>${t('projectsLiveIntro')}</p>
        </div>
        <div id="home-repo-feature" class="repo-feature glass">${loadingBlock()}</div>
      </section>

      <section class="section reveal two-up">
        <div>
          <div class="section-head">
            <h2>${t('pageChangeTitle')}</h2>
            <p>${t('changelogIntro')}</p>
          </div>
          <div class="stack-list">
            ${CONFIG.changelog.slice(0, 4).map(item => changelogCard(item)).join('')}
          </div>
        </div>
        <div>
          <div class="section-head">
            <h2>${t('officialLinks')}</h2>
            <p>${t('contactIntro')}</p>
          </div>
          <div class="community-grid">
            ${CONFIG.links.map(link => `<a class="community-card glass tilt" href="${link.href}" target="_blank" rel="noreferrer"><strong>${link.label}</strong><span>${link.href.replace('mailto:', '')}</span></a>`).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function skeletonBoard() {
    return `<div class="skeleton-line"></div><div class="skeleton-line short"></div><div class="skeleton-grid"><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div></div>`;
  }

  function loadingBlock() { return `<div class="loading">${t('loading')}</div>`; }
  function emptyBlock(text) { return `<div class="loading">${text || t('noData')}</div>`; }

  function changelogCard(item) {
    return `<article class="timeline-card glass tilt"><span class="pill">${item.tag}</span><strong>${item.title}</strong><p>${item.summary}</p><small>${formatDate(item.date)}</small></article>`;
  }

  function devicesTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageDevicesTitle')}</h1><p>${t('pageDevicesDesc')}</p></section>
      <section class="section reveal card-grid wide-grid">
        ${CONFIG.devices.map(device => deviceCard(device)).join('')}
      </section>
    `;
  }

  function deviceCard(device) {
    return `
      <article class="device-card glass tilt reveal">
        <div class="device-shot"><img src="${p(device.image)}" alt="${device.name}" loading="lazy"></div>
        <div class="device-meta">
          <div class="title-row">
            <h3>${device.name}</h3>
            <span class="${badgeClass(device.status)}">${statusLabel(device.status)}</span>
          </div>
          <ul class="meta-list">
            <li><span>${t('codename')}</span><strong>${device.codename}</strong></li>
            <li><span>${t('category')}</span><strong>${device.category}</strong></li>
            <li><span>${t('androidTarget')}</span><strong>${device.android}</strong></li>
            <li><span>${t('workType')}</span><strong>${device.work.join(' / ')}</strong></li>
          </ul>
          <p>${device.notes}</p>
        </div>
      </article>
    `;
  }

  function releasesTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageReleasesTitle')}</h1><p>${t('pageReleasesDesc')}</p></section>
      <section class="section reveal">
        <div class="section-head"><h2>${t('releaseWatch')}</h2><p>${t('releasesWatchIntro')}</p></div>
        <div id="release-watch" class="card-grid">${loadingBlock()}</div>
      </section>
      <section class="section reveal">
        <div class="section-head"><h2>${t('pageDownloadsTitle')}</h2><p>${t('downloadsIntro')}</p></div>
        <div class="stack-list">${CONFIG.downloads.map(downloadCard).join('')}</div>
      </section>
    `;
  }

  function downloadCard(item) {
    return `
      <article class="download-card glass tilt reveal">
        <div class="title-row"><h3>${item.title}</h3><span class="pill">${item.kind}</span></div>
        <p>${item.description}</p>
        <div class="link-row">${item.links.map(link => `<a class="btn btn-soft small" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join('')}</div>
      </article>
    `;
  }

  function projectsTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageProjectsTitle')}</h1><p>${t('pageProjectsDesc')}</p></section>
      <section class="section reveal">
        <div class="section-head"><h2>${t('featured')}</h2><p>${t('projectsLiveIntro')}</p></div>
        <div class="card-grid">${CONFIG.featuredRepos.map(featuredRepoCard).join('')}</div>
      </section>
      <section class="section reveal">
        <div class="section-head"><h2>${t('allProjects')}</h2><p>${t('projectsLiveIntro')}</p></div>
        <div id="live-projects" class="card-grid wide-grid">${loadingBlock()}</div>
      </section>
    `;
  }

  function featuredRepoCard(item) {
    const href = `https://github.com/${item.owner}/${item.repo}`;
    return `<article class="repo-card glass tilt"><span class="pill">${item.type}</span><h3>${item.repo}</h3><p>${item.note}</p><small>${t('repoOwner')}: ${item.owner}</small><a class="btn btn-soft small" href="${href}" target="_blank" rel="noreferrer">${t('viewRepo')}</a></article>`;
  }

  function teamTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageTeamTitle')}</h1><p>${t('pageTeamDesc')}</p></section>
      <section class="section reveal card-grid wide-grid">
        ${CONFIG.team.map(member => teamCard(member)).join('')}
      </section>
    `;
  }

  function teamCard(member) {
    const avatar = `https://github.com/${member.githubUser}.png?size=400`;
    return `
      <article class="team-card glass tilt reveal">
        <span class="pill role-pill">${member.badge === 'Founder' ? t('badgeFounder') : member.badge === 'Core' ? t('badgeCore') : member.badge === 'Kernel' ? t('badgeKernel') : t('badgeDev')}</span>
        <img class="avatar" src="${avatar}" alt="${member.name}" loading="lazy">
        <div>
          <h3>${member.name}</h3>
          <small>${member.role}</small>
          <p>${member.bio}</p>
          <div class="link-row compact">
            <a class="text-link" href="${member.github}" target="_blank" rel="noreferrer">GitHub</a>
            ${member.telegram ? `<a class="text-link" href="${member.telegram}" target="_blank" rel="noreferrer">Telegram</a>` : ''}
            ${member.discord ? `<span class="text-link static">Discord: ${member.discord}</span>` : ''}
          </div>
        </div>
      </article>
    `;
  }

  function statusTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageStatusTitle')}</h1><p>${t('pageStatusDesc')}</p></section>
      <section class="section reveal stack-list">
        ${CONFIG.statusBoard.map(item => `
          <article class="status-card glass tilt reveal">
            <div class="title-row"><h3>${item.title}</h3><span class="${badgeClass(item.state)}">${statusLabel(item.state)}</span></div>
            <p>${item.note}</p>
            <div class="progress-wrap"><div class="progress"><span style="width:${item.percent}%"></span></div><strong>${item.percent}%</strong></div>
            <small>${item.owner}</small>
          </article>`).join('')}
      </section>
    `;
  }

  function changelogTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageChangeTitle')}</h1><p>${t('pageChangeDesc')}</p></section>
      <section class="section reveal stack-list">${CONFIG.changelog.map(changelogCard).join('')}</section>
    `;
  }

  function downloadsTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageDownloadsTitle')}</h1><p>${t('pageDownloadsDesc')}</p></section>
      <section class="section reveal stack-list">${CONFIG.downloads.map(downloadCard).join('')}</section>
    `;
  }

  function bugsTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageBugsTitle')}</h1><p>${t('pageBugsDesc')}</p></section>
      <section class="section reveal stack-list">
        ${CONFIG.knownIssues.map(issue => `
          <article class="issue-card glass tilt reveal">
            <div class="title-row"><h3>${issue.target}</h3><span class="${badgeClass(issue.state)}">${statusLabel(issue.state)}</span></div>
            <ul class="meta-list compact"><li><span>${t('bugArea')}</span><strong>${issue.area}</strong></li><li><span>${t('bugTarget')}</span><strong>${issue.target}</strong></li></ul>
            <p>${issue.details}</p>
          </article>
        `).join('')}
      </section>
    `;
  }

  function creditsTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageCreditsTitle')}</h1><p>${t('pageCreditsDesc')}</p></section>
      <section class="section reveal three-up">
        <article class="glass panel-block"><h3>${t('creditsSources')}</h3><ul>${CONFIG.credits.sourceCredits.map(item => `<li>${item}</li>`).join('')}</ul></article>
        <article class="glass panel-block"><h3>${t('creditsContributors')}</h3><ul>${CONFIG.credits.contributors.map(item => `<li>${item}</li>`).join('')}</ul></article>
        <article class="glass panel-block"><h3>${t('creditsThanks')}</h3><ul>${CONFIG.credits.thanks.map(item => `<li>${item}</li>`).join('')}</ul></article>
      </section>
    `;
  }

  function docsTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageDocsTitle')}</h1><p>${t('pageDocsDesc')}</p></section>
      <section class="section reveal card-grid">
        ${CONFIG.docs.map(item => `<article class="doc-card glass tilt"><span class="pill">${t('docsRead')}</span><h3>${item.title}</h3><p>${item.body}</p></article>`).join('')}
      </section>
      <section class="section reveal">
        <div class="warning-box glass">${t('docsWarning')}</div>
      </section>
    `;
  }

  function joinTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageJoinTitle')}</h1><p>${t('pageJoinDesc')}</p></section>
      <section class="section reveal card-grid">
        ${CONFIG.join.map(item => `<article class="join-card glass tilt"><h3>${item.role}</h3><p>${item.desc}</p><a class="btn btn-soft small" href="${CONFIG.site.telegramChat}" target="_blank" rel="noreferrer">${t('joinApply')}</a></article>`).join('')}
      </section>
    `;
  }

  function galleryTemplate() {
    const deviceShots = CONFIG.devices.map(d => `<figure class="gallery-shot glass tilt"><img src="${p(d.image)}" alt="${d.name}" loading="lazy"><figcaption>${d.name}</figcaption></figure>`).join('');
    const memberShots = CONFIG.team.map(m => `<figure class="gallery-shot glass tilt"><img src="https://github.com/${m.githubUser}.png?size=400" alt="${m.name}" loading="lazy"><figcaption>${m.name}</figcaption></figure>`).join('');
    return `
      <section class="page-hero reveal"><h1>${t('pageGalleryTitle')}</h1><p>${t('pageGalleryDesc')}</p></section>
      <section class="section reveal"><div class="section-head"><h2>${t('galleryBrand')}</h2><p>${t('galleryIntro')}</p></div><div class="brand-gallery"><figure class="gallery-shot glass tilt"><img src="${p('assets/img/logos/spider1.png')}" alt="Spider Team logo"><figcaption>${CONFIG.site.name}</figcaption></figure><figure class="gallery-shot glass tilt"><img src="${p('assets/img/logos/spider.png')}" alt="Spider Team seal"><figcaption>Spider Seal</figcaption></figure></div></section>
      <section class="section reveal"><div class="section-head"><h2>${t('galleryDevices')}</h2></div><div class="masonry">${deviceShots}</div></section>
      <section class="section reveal"><div class="section-head"><h2>${t('galleryTeam')}</h2></div><div class="masonry">${memberShots}</div></section>
    `;
  }

  function contactTemplate() {
    return `
      <section class="page-hero reveal"><h1>${t('pageContactTitle')}</h1><p>${t('pageContactDesc')}</p></section>
      <section class="section reveal card-grid">
        <a class="contact-card glass tilt" href="mailto:${CONFIG.site.email}"><strong>${t('contactMail')}</strong><span>${CONFIG.site.email}</span></a>
        <a class="contact-card glass tilt" href="${CONFIG.site.telegramUpdates}" target="_blank" rel="noreferrer"><strong>${t('contactTelegram')}</strong><span>@spiderteamupdates</span></a>
        <a class="contact-card glass tilt" href="${CONFIG.site.discordInvite}" target="_blank" rel="noreferrer"><strong>${t('contactDiscord')}</strong><span>discord.gg/Z9d3KQtV</span></a>
        <a class="contact-card glass tilt" href="${CONFIG.site.githubRepo}" target="_blank" rel="noreferrer"><strong>${t('contactGithub')}</strong><span>Spider-Team.github.io</span></a>
      </section>
    `;
  }

  function pageTemplate() {
    switch(page) {
      case 'devices': return devicesTemplate();
      case 'releases': return releasesTemplate();
      case 'projects': return projectsTemplate();
      case 'team': return teamTemplate();
      case 'status': return statusTemplate();
      case 'changelog': return changelogTemplate();
      case 'downloads': return downloadsTemplate();
      case 'bugs': return bugsTemplate();
      case 'credits': return creditsTemplate();
      case 'docs': return docsTemplate();
      case 'join': return joinTemplate();
      case 'gallery': return galleryTemplate();
      case 'contact': return contactTemplate();
      default: return homeTemplate();
    }
  }

  function setDirection() {
    document.documentElement.lang = getLang();
    document.documentElement.dir = isArabic() ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isArabic());
    document.body.classList.toggle('low-perf', detectLowPerf());
  }

  function renderApp() {
    setDirection();
    document.getElementById('app').innerHTML = `${header()}<main>${pageTemplate()}</main>${footer()}`;
    bindCommon();
    bootLiveSections();
    revealOnScroll();
    initTilt();
  }

  function bindCommon() {
    const select = document.getElementById('lang-switch');
    if (select) select.addEventListener('change', e => setLang(e.target.value));
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  function revealOnScroll() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  function initTilt() {
    if (window.matchMedia('(pointer:fine)').matches && !detectLowPerf()) {
      document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('pointermove', e => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `rotateX(${(-py*8).toFixed(2)}deg) rotateY(${(px*10).toFixed(2)}deg) translateY(-4px)`;
        });
        card.addEventListener('pointerleave', () => card.style.transform = '');
      });
    }
  }

  async function fetchCached(url, key, ttl = 1000 * 60 * 30) {
    const fullKey = `spider-cache:${key}`;
    try {
      const raw = localStorage.getItem(fullKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Date.now() - parsed.time < ttl) return parsed.data;
      }
    } catch {}
    const res = await fetch(url, { headers: { 'Accept': 'application/vnd.github+json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    try { localStorage.setItem(fullKey, JSON.stringify({ time: Date.now(), data })); } catch {}
    return data;
  }

  async function renderMarcoBoard() {
    const box = document.getElementById('marco-board');
    if (!box) return;
    try {
      const user = await fetchCached(`https://api.github.com/users/${CONFIG.site.githubOwner}`, 'marco-user');
      const repos = await fetchCached(`https://api.github.com/users/${CONFIG.site.githubOwner}/repos?sort=updated&per_page=6`, 'marco-repos');
      const latest = repos[0];
      box.innerHTML = `
        <div class="board-header">
          <img class="avatar large" src="${user.avatar_url}" alt="${user.login}">
          <div>
            <strong>${user.name || user.login}</strong>
            <p>${t('teamFounderNote')}</p>
          </div>
        </div>
        <div class="stats-grid">
          <div class="stat-box"><span>${t('followers')}</span><strong>${user.followers}</strong></div>
          <div class="stat-box"><span>${t('following')}</span><strong>${user.following}</strong></div>
          <div class="stat-box"><span>${t('repos')}</span><strong>${user.public_repos}</strong></div>
        </div>
        <div class="latest-box glass-inner">
          <span class="pill">${t('publicUpdate')}</span>
          <strong>${latest ? latest.name : '—'}</strong>
          <p>${latest?.description || t('noData')}</p>
          ${latest ? `<a class="btn btn-soft small" href="${latest.html_url}" target="_blank" rel="noreferrer">${t('viewRepo')}</a>` : ''}
        </div>
      `;
      const repoFeature = document.getElementById('home-repo-feature');
      if (repoFeature) {
        repoFeature.innerHTML = latest ? `
          <span class="pill">${t('latestRepo')}</span>
          <h3>${latest.name}</h3>
          <p>${latest.description || t('noData')}</p>
          <div class="repo-meta"><span>${latest.language || '—'}</span><span>${t('updated')}: ${formatDate(latest.updated_at)}</span></div>
          <a class="btn btn-primary small" href="${latest.html_url}" target="_blank" rel="noreferrer">${t('viewRepo')}</a>
        ` : emptyBlock();
      }
    } catch (err) {
      box.innerHTML = emptyBlock(t('errorLoad'));
      const repoFeature = document.getElementById('home-repo-feature');
      if (repoFeature) repoFeature.innerHTML = emptyBlock(t('errorLoad'));
    }
  }

  async function renderLiveProjects() {
    const holder = document.getElementById('live-projects');
    if (!holder) return;
    try {
      const users = [...new Set(CONFIG.team.map(m => m.githubUser))];
      const data = await Promise.all(users.map(user => fetchCached(`https://api.github.com/users/${user}/repos?sort=updated&per_page=8`, `repos:${user}`)));
      const repos = data.flat().sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 18);
      if (!repos.length) { holder.innerHTML = emptyBlock(); return; }
      holder.innerHTML = repos.map(repo => `
        <article class="repo-card glass tilt reveal">
          <span class="pill">${repo.owner.login}</span>
          <h3>${repo.name}</h3>
          <p>${repo.description || t('noData')}</p>
          <div class="repo-meta"><span>${repo.language || '—'}</span><span>${t('updated')}: ${formatDate(repo.updated_at)}</span></div>
          <div class="link-row compact">
            <a class="btn btn-soft small" href="${repo.html_url}" target="_blank" rel="noreferrer">${t('viewRepo')}</a>
            ${repo.homepage ? `<a class="text-link" href="${repo.homepage}" target="_blank" rel="noreferrer">Live</a>` : ''}
          </div>
        </article>
      `).join('');
    } catch (err) {
      holder.innerHTML = emptyBlock(t('errorLoad'));
    }
  }

  async function renderReleaseWatch() {
    const holder = document.getElementById('release-watch');
    if (!holder) return;
    try {
      const cards = await Promise.all(CONFIG.releaseWatch.map(async item => {
        try {
          const data = await fetchCached(`https://api.github.com/repos/${item.owner}/${item.repo}/releases?per_page=1`, `rel:${item.owner}/${item.repo}`);
          const rel = Array.isArray(data) ? data[0] : null;
          if (!rel) {
            return `<article class="repo-card glass tilt"><span class="pill">${item.owner}</span><h3>${item.repo}</h3><p>${t('noRelease')}</p><a class="btn btn-soft small" href="https://github.com/${item.owner}/${item.repo}" target="_blank" rel="noreferrer">${t('viewRepo')}</a></article>`;
          }
          return `<article class="repo-card glass tilt"><span class="pill">${item.owner}</span><h3>${rel.name || rel.tag_name}</h3><p>${rel.body ? rel.body.slice(0, 160) : item.repo}</p><div class="repo-meta"><span>${item.repo}</span><span>${formatDate(rel.published_at)}</span></div><a class="btn btn-primary small" href="${rel.html_url}" target="_blank" rel="noreferrer">${t('downloadLabel')}</a></article>`;
        } catch {
          return `<article class="repo-card glass tilt"><span class="pill">${item.owner}</span><h3>${item.repo}</h3><p>${t('noRelease')}</p><a class="btn btn-soft small" href="https://github.com/${item.owner}/${item.repo}" target="_blank" rel="noreferrer">${t('viewRepo')}</a></article>`;
        }
      }));
      holder.innerHTML = cards.join('');
    } catch (err) {
      holder.innerHTML = emptyBlock(t('errorLoad'));
    }
  }

  function bootLiveSections() {
    renderMarcoBoard();
    renderLiveProjects();
    renderReleaseWatch();
  }

  function formatDate(value) {
    if (!value) return '—';
    const d = new Date(value);
    return d.toLocaleDateString(getLang() === 'ar' ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  renderApp();
})();
