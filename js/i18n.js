// Bilingual content (English / Español) — screen-reader and language inclusive.
// All text lives in this dictionary so the document is readable in both languages,
// and language attributes update so assistive technologies pronounce content correctly.
(function () {
  'use strict';

  var STRINGS = {
    en: {
      'meta.title': 'Arnoldo Alonso — Neurointelligent Systems Architect',
      'meta.description': 'Arnoldo Alonso is a U.S. Army combat veteran, former Deputy Sheriff, and neurointelligent-systems architect focused on sovereign, ethical, and accessibility-first technology.',
      'a11y.skip': 'Skip to main content',
      'nav.about': 'About',
      'nav.mission': 'Mission',
      'nav.portfolio': 'Portfolio',
      'nav.principles': 'Principles',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'U.S. Army Combat Veteran · Neurointelligent-Systems Architect',
      'hero.title.pre': 'Technology that ',
      'hero.title.em': 'protects, endures, and serves.',
      'hero.lede': 'I design sovereign, ethical, and constraint-aligned systems for defense, governance, and disability justice — built to operate under duress, without cloud dependency, and with verifiable ethical boundaries.',
      'hero.cta.contact': 'Get in touch',
      'hero.cta.work': 'View my work',
      'hero.meta1.label': 'Veteran-led',
      'hero.meta1.value': 'Army combat veteran & former Deputy Sheriff',
      'hero.meta2.label': 'Accessibility-first',
      'hero.meta2.value': 'Built for visually & cognitively impaired users',
      'hero.meta3.label': 'Offline-autonomous',
      'hero.meta3.value': 'No cloud dependency, stable under pressure',
      'about.kicker': 'About',
      'about.title': 'Engineering with ethics, under constraint.',
      'about.p1': 'I am a U.S. Army combat veteran, former Deputy Sheriff, and neurointelligent-systems architect focused on sovereign, ethical, and constraint-aligned technology. My work centers on neuromorphic computing, offline autonomy, and accessibility engineering for visually and cognitively impaired users. I design systems that operate under duress, without cloud dependency, and with verifiable ethical boundaries for defense, governance, and disability justice.',
      'about.p2': 'I specialize in building high-assurance systems that remain stable under pressure and resilient in adversarial or resource-limited conditions. Every project is grounded in real-world constraints rather than theoretical idealism, and engineered to be durable, accessible, and aligned with the ethical responsibilities of public service.',
      'mission.kicker': 'Mission',
      'mission.title': 'Protect, strengthen, and restore.',
      'mission.item1.h': 'Protect disabled veterans',
      'mission.item1.p': 'Build technology that defends the people who served, with accessibility and dignity at the core.',
      'mission.item2.h': 'Strengthen working families',
      'mission.item2.p': 'Create durable, replicable systems that support the communities most often excluded from advanced technology.',
      'mission.item3.h': 'Restore technological sovereignty',
      'mission.item3.p': 'Return control to communities through auditable, offline-capable, constraint-aligned engineering.',
      'portfolio.kicker': 'Engineering Portfolio',
      'portfolio.title': 'Systems built to endure.',
      'portfolio.ayala.tag': 'Patented neurointelligent claims-preparation engine',
      'portfolio.ayala.desc': 'A patented neurointelligent claims-preparation engine designed to function in degraded environments and support disabled users through transparency, constraint, and measurable accountability.',
      'portfolio.ayala.t1': 'Neurointelligent',
      'portfolio.ayala.t2': 'Claims automation',
      'portfolio.ayala.t3': 'Accessibility-first',
      'portfolio.ethical.title': 'Ethical Command Architecture',
      'portfolio.ethical.tag': 'Sovereign intelligence',
      'portfolio.ethical.desc': 'Unnamed architectures focused on ethical command and sovereign intelligence — built to reinforce institutional integrity through verifiable ethical boundaries.',
      'portfolio.ethical.t1': 'Ethical command',
      'portfolio.ethical.t2': 'Sovereign intelligence',
      'portfolio.ethical.t3': 'Verifiable boundaries',
      'portfolio.dual.title': 'Dual-Use Manufacturing',
      'portfolio.dual.tag': 'Resilient production',
      'portfolio.dual.desc': 'Systems designed for dual-use manufacturing that operate in degraded environments and remain stable under pressure and resilient in resource-limited conditions.',
      'portfolio.dual.t1': 'Dual-use',
      'portfolio.dual.t2': 'Degraded environments',
      'portfolio.dual.t3': 'Resilient',
      'principles.kicker': 'Principles',
      'principles.title': 'What every build is measured against.',
      'principles.g1': 'Engineering Disciplines',
      'principles.g1.i1': 'Neuromorphic computing',
      'principles.g1.i2': 'Offline autonomy',
      'principles.g1.i3': 'Accessibility engineering',
      'principles.g1.i4': 'High-assurance systems',
      'principles.g2': 'Operating Conditions',
      'principles.g2.i1': 'Degraded environments',
      'principles.g2.i2': 'No cloud dependency',
      'principles.g2.i3': 'Adversarial resilience',
      'principles.g2.i4': 'Resource-limited',
      'principles.g3': 'Accountability',
      'principles.g3.i1': 'Replicable',
      'principles.g3.i2': 'Auditable',
      'principles.g3.i3': 'Verifiable ethical boundaries',
      'principles.g3.i4': 'Measurable accountability',
      'principles.g4': 'Sectors',
      'principles.g4.i1': 'Defense',
      'principles.g4.i2': 'Governance',
      'principles.g4.i3': 'Disability justice',
      'principles.g4.i4': 'Public service',
      'contact.kicker': 'Contact',
      'contact.title': "Let's build something durable.",
      'contact.lede': 'Open to defense, governance, and disability-justice collaborations. The most accessible way to reach me is Telegram.',
      'contact.telegram': 'Telegram — t.me/alonsobrx',
      'contact.a11y': 'This site is designed to be fully usable with a screen reader and keyboard only. Press Tab to navigate; headings and landmarks structure every page.',
      'footer.rights': 'All rights reserved.',
      'footer.built': 'Built with semantic HTML, hand-written CSS, and a screen-reader-first commitment.',
      'theme.toDark': 'Switch to dark mode',
      'theme.toLight': 'Switch to light mode'
    },
    es: {
      'meta.title': 'Arnoldo Alonso — Arquitecto de Sistemas Neurointeligentes',
      'meta.description': 'Arnoldo Alonso es veterano de combate del Ejército de los EE. UU., ex alguacil adjunto y arquitecto de sistemas neurointeligentes enfocado en tecnología soberana, ética y centrada en la accesibilidad.',
      'a11y.skip': 'Saltar al contenido principal',
      'nav.about': 'Acerca de',
      'nav.mission': 'Misión',
      'nav.portfolio': 'Portafolio',
      'nav.principles': 'Principios',
      'nav.contact': 'Contacto',
      'hero.eyebrow': 'Veterano de combate del Ejército · Arquitecto de sistemas neurointeligentes',
      'hero.title.pre': 'Tecnología que ',
      'hero.title.em': 'protege, perdura y sirve.',
      'hero.lede': 'Diseño sistemas soberanos, éticos y alineados a restricciones para defensa, gobernanza y justicia de discapacidad — para operar bajo presión, sin dependencia de la nube y con límites éticos verificables.',
      'hero.cta.contact': 'Contáctame',
      'hero.cta.work': 'Ver mi trabajo',
      'hero.meta1.label': 'Liderado por veteranos',
      'hero.meta1.value': 'Veterano de combate y ex alguacil adjunto',
      'hero.meta2.label': 'Accesibilidad primero',
      'hero.meta2.value': 'Diseñado para usuarios con discapacidad visual y cognitiva',
      'hero.meta3.label': 'Autónomo sin conexión',
      'hero.meta3.value': 'Sin dependencia de la nube, estable bajo presión',
      'about.kicker': 'Acerca de',
      'about.title': 'Ingeniería con ética, bajo restricción.',
      'about.p1': 'Soy veterano de combate del Ejército de los EE. UU., ex alguacil adjunto y arquitecto de sistemas neurointeligentes enfocado en tecnología soberana, ética y alineada a restricciones. Mi trabajo se centra en computación neuromórfica, autonomía sin conexión e ingeniería de accesibilidad para usuarios con discapacidad visual y cognitiva. Diseño sistemas que operan bajo presión, sin dependencia de la nube y con límites éticos verificables para defensa, gobernanza y justicia de discapacidad.',
      'about.p2': 'Me especializo en construir sistemas de alta garantía que permanecen estables bajo presión y son resilientes en condiciones adversarias o de recursos limitados. Cada proyecto se basa en restricciones del mundo real y no en idealismo teórico, y se diseña para ser duradero, accesible y alineado con las responsabilidades éticas del servicio público.',
      'mission.kicker': 'Misión',
      'mission.title': 'Proteger, fortalecer y restaurar.',
      'mission.item1.h': 'Proteger a los veteranos con discapacidad',
      'mission.item1.p': 'Construir tecnología que defienda a quienes sirvieron, con accesibilidad y dignidad en el centro.',
      'mission.item2.h': 'Fortalecer a las familias trabajadoras',
      'mission.item2.p': 'Crear sistemas duraderos y replicables que apoyen a las comunidades más excluidas de la tecnología avanzada.',
      'mission.item3.h': 'Restaurar la soberanía tecnológica',
      'mission.item3.p': 'Devolver el control a las comunidades mediante ingeniería auditable, sin conexión y alineada a restricciones.',
      'portfolio.kicker': 'Portafolio de ingeniería',
      'portfolio.title': 'Sistemas diseñados para perdurar.',
      'portfolio.ayala.tag': 'Motor neurointeligente patentado de preparación de reclamaciones',
      'portfolio.ayala.desc': 'Un motor neurointeligente patentado de preparación de reclamaciones diseñado para funcionar en entornos degradados y apoyar a usuarios con discapacidad mediante transparencia, restricción y responsabilidad medible.',
      'portfolio.ayala.t1': 'Neurointeligente',
      'portfolio.ayala.t2': 'Automatización de reclamaciones',
      'portfolio.ayala.t3': 'Accesibilidad primero',
      'portfolio.ethical.title': 'Arquitectura de Mando Ético',
      'portfolio.ethical.tag': 'Inteligencia soberana',
      'portfolio.ethical.desc': 'Arquitecturas no nombradas enfocadas en mando ético e inteligencia soberana — construidas para reforzar la integridad institucional mediante límites éticos verificables.',
      'portfolio.ethical.t1': 'Mando ético',
      'portfolio.ethical.t2': 'Inteligencia soberana',
      'portfolio.ethical.t3': 'Límites verificables',
      'portfolio.dual.title': 'Fabricación de uso dual',
      'portfolio.dual.tag': 'Producción resiliente',
      'portfolio.dual.desc': 'Sistemas diseñados para fabricación de uso dual que operan en entornos degradados y permanecen estables bajo presión y resilientes en condiciones de recursos limitados.',
      'portfolio.dual.t1': 'Uso dual',
      'portfolio.dual.t2': 'Entornos degradados',
      'portfolio.dual.t3': 'Resiliente',
      'principles.kicker': 'Principios',
      'principles.title': 'Contra lo que se mide cada proyecto.',
      'principles.g1': 'Disciplinas de ingeniería',
      'principles.g1.i1': 'Computación neuromórfica',
      'principles.g1.i2': 'Autonomía sin conexión',
      'principles.g1.i3': 'Ingeniería de accesibilidad',
      'principles.g1.i4': 'Sistemas de alta garantía',
      'principles.g2': 'Condiciones de operación',
      'principles.g2.i1': 'Entornos degradados',
      'principles.g2.i2': 'Sin dependencia de la nube',
      'principles.g2.i3': 'Resiliencia adversarial',
      'principles.g2.i4': 'Recursos limitados',
      'principles.g3': 'Responsabilidad',
      'principles.g3.i1': 'Replicable',
      'principles.g3.i2': 'Auditable',
      'principles.g3.i3': 'Límites éticos verificables',
      'principles.g3.i4': 'Responsabilidad medible',
      'principles.g4': 'Sectores',
      'principles.g4.i1': 'Defensa',
      'principles.g4.i2': 'Gobernanza',
      'principles.g4.i3': 'Justicia de discapacidad',
      'principles.g4.i4': 'Servicio público',
      'contact.kicker': 'Contacto',
      'contact.title': 'Construyamos algo duradero.',
      'contact.lede': 'Abierto a colaboraciones de defensa, gobernanza y justicia de discapacidad. La forma más accesible de contactarme es Telegram.',
      'contact.telegram': 'Telegram — t.me/alonsobrx',
      'contact.a11y': 'Este sitio está diseñado para ser totalmente utilizable con un lector de pantalla y solo con el teclado. Presiona Tab para navegar; los encabezados y los puntos de referencia estructuran cada página.',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.built': 'Construido con HTML semántico, CSS escrito a mano y un compromiso centrado en el lector de pantalla.',
      'theme.toDark': 'Cambiar a modo oscuro',
      'theme.toLight': 'Cambiar a modo claro'
    }
  };

  var LANG_LABELS = { en: 'English', es: 'Español' };

  function detectInitialLang() {
    try {
      var saved = localStorage.getItem('aa-lang');
      if (saved && STRINGS[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return STRINGS[nav] ? nav : 'en';
  }

  function applyLang(lang) {
    var dict = STRINGS[lang];
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = dict[key];
      if (text == null) return;
      if (el.tagName === 'TITLE') { el.textContent = text; return; }
      if (el.tagName === 'META') { el.setAttribute('content', text); return; }
      el.textContent = text;
    });

    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      var other = lang === 'en' ? 'es' : 'en';
      toggle.setAttribute('aria-label', 'Switch language to ' + LANG_LABELS[other]);
      toggle.setAttribute('aria-pressed', String(lang !== 'en'));
      toggle.querySelector('.lang-toggle__alt').textContent = other.toUpperCase();
      toggle.querySelector('span:not(.lang-toggle__alt):not(.sr-only)').textContent = lang.toUpperCase();
    }

    // Keep the theme toggle's accessible label in the active language and state.
    var themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
      var currentTheme = root.getAttribute('data-theme');
      themeToggle.setAttribute('aria-label', dict[currentTheme === 'dark' ? 'theme.toLight' : 'theme.toDark']);
    }

    try { localStorage.setItem('aa-lang', lang); } catch (e) {}
  }

  function init() {
    var lang = detectInitialLang();
    applyLang(lang);
    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-lang');
        applyLang(current === 'en' ? 'es' : 'en');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for testing / accessibility tooling.
  window.__aa_i18n = { applyLang: applyLang, strings: STRINGS };
})();
