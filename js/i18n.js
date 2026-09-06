// Bilingual content (English / Español) — screen-reader and language inclusive.
// All text lives in this dictionary so the document is readable in both languages,
// and language attributes update so assistive technologies pronounce content correctly.
(function () {
  'use strict';

  var STRINGS = {
    en: {
      'meta.title': 'Arnoldo Alonso — Minecraft Developer',
      'meta.description': 'Arnoldo Alonso is a Minecraft developer specializing in Skript, Skript Addons, Java plugins, and Discord bots.',
      'a11y.skip': 'Skip to main content',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Minecraft Developer · Skript · Plugins · Discord Bots',
      'hero.title.pre': 'I build ',
      'hero.title.em': 'Skript, addons, plugins & bots.',
      'hero.lede': "I'm a Minecraft developer specializing in Skript, Skript Addons in Java, Paper/Spigot plugins, and Discord bots — turning server ideas into clean, maintainable, and fast-running systems.",
      'hero.cta.contact': 'Get in touch',
      'hero.cta.work': 'View my projects',
      'hero.meta1.label': 'Skript',
      'hero.meta1.value': 'From simple scripts to full server cores',
      'hero.meta2.label': 'Java',
      'hero.meta2.value': 'Skript Addons & Paper plugins',
      'hero.meta3.label': 'Discord',
      'hero.meta3.value': 'Bots that bridge game and community',
      'about.kicker': 'About',
      'about.title': 'Minecraft development, end to end.',
      'about.p1': "I'm a Minecraft developer focused on the full stack of server customization — writing Skript for fast, readable gameplay logic, building Skript Addons in Java to extend what Skript can do, shipping Paper/Spigot plugins for performance-critical features, and wiring up Discord bots that keep communities connected to the server.",
      'about.p2': "I care about code that other people can actually read and maintain: clean Skript, well-structured Java, and bots that don't fall over under load. Whether it's a single crate script or a complete server core, I build it to run smoothly and to keep running when the player count climbs.",
      'experience.kicker': 'Experience',
      'experience.title': 'Building servers, scripts, and bots.',
      'exp.script.period': 'Skript',
      'exp.script.role': 'Skript Developer',
      'exp.script.org': 'Minecraft Servers',
      'exp.script.desc': 'Writing gameplay logic in Skript — crates, scoreboards, custom items, and server cores — readable enough for any admin to tweak without touching Java.',
      'exp.addon.period': 'Java',
      'exp.addon.role': 'Skript Addon Author',
      'exp.addon.org': 'Skript Ecosystem',
      'exp.addon.desc': 'Extending Skript with Java addons that add new syntax, GUIs, and particle effects — bridging the gap between quick scripts and full plugins.',
      'exp.plugin.period': 'Paper',
      'exp.plugin.role': 'Plugin Developer',
      'exp.plugin.org': 'Bukkit / Spigot / Paper',
      'exp.plugin.desc': 'Shipping performance-critical Paper plugins with Maven — economy, anti-grief, and custom mechanics built to stay light and async-safe under load.',
      'exp.bot.period': 'Discord',
      'exp.bot.role': 'Discord Bot Developer',
      'exp.bot.org': 'Discord.js / JDA',
      'exp.bot.desc': 'Building bots that bridge in-game chat to Discord, automate vote rewards, and handle moderation with slash commands — connecting the server to its community.',
      'projects.kicker': 'Projects',
      'projects.title': "Things I've built.",
      'projects.intro': 'Skript scripts, Skript Addons, Paper plugins, and Discord bots.',
      'skills.kicker': 'Skills',
      'skills.title': 'The stack I build with.',
      'skills.g1': 'Minecraft',
      'skills.g1.i1': 'Skript',
      'skills.g1.i2': 'Skript Addons (Java)',
      'skills.g1.i3': 'Paper / Spigot / Bukkit',
      'skills.g1.i4': 'Vault API',
      'skills.g2': 'Discord',
      'skills.g2.i1': 'Discord.js',
      'skills.g2.i2': 'JDA',
      'skills.g2.i3': 'Slash commands',
      'skills.g2.i4': 'Webhooks',
      'skills.g3': 'Languages & Tooling',
      'skills.g3.i1': 'Java',
      'skills.g3.i2': 'Maven / Gradle',
      'skills.g3.i3': 'MySQL',
      'skills.g3.i4': 'Git / GitHub',
      'contact.kicker': 'Contact',
      'contact.title': "Let's build your server.",
      'contact.lede': 'Open to Skript, addon, plugin, and Discord bot commissions. The fastest way to reach me is Discord.',
      'contact.discord': 'Discord — arnoldo',
      'contact.a11y': 'This site is designed to be fully usable with a screen reader and keyboard only. Press Tab to navigate; headings and landmarks structure every page.',
      'footer.rights': 'All rights reserved.',
      'footer.built': 'Built with semantic HTML, hand-written CSS, and a data-driven project system.',
      // Project category chips (rendered from data)
      'project.type.skript': 'Skript',
      'project.type.addon': 'Skript Addon',
      'project.type.plugin': 'Plugin',
      'project.type.bot': 'Discord Bot',
      'theme.toDark': 'Switch to dark mode',
      'theme.toLight': 'Switch to light mode'
    },
    es: {
      'meta.title': 'Arnoldo Alonso — Desarrollador de Minecraft',
      'meta.description': 'Arnoldo Alonso es un desarrollador de Minecraft especializado en Skript, complementos de Skript, plugins de Java y bots de Discord.',
      'a11y.skip': 'Saltar al contenido principal',
      'nav.about': 'Acerca de',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Habilidades',
      'nav.contact': 'Contacto',
      'hero.eyebrow': 'Desarrollador de Minecraft · Skript · Plugins · Bots de Discord',
      'hero.title.pre': 'Creo ',
      'hero.title.em': 'Skript, complementos, plugins y bots.',
      'hero.lede': 'Soy un desarrollador de Minecraft especializado en Skript, complementos de Skript en Java, plugins de Paper/Spigot y bots de Discord — convirtiendo ideas de servidores en sistemas limpios, mantenibles y rápidos.',
      'hero.cta.contact': 'Contáctame',
      'hero.cta.work': 'Ver mis proyectos',
      'hero.meta1.label': 'Skript',
      'hero.meta1.value': 'Desde scripts simples hasta núcleos de servidor',
      'hero.meta2.label': 'Java',
      'hero.meta2.value': 'Complementos de Skript y plugins de Paper',
      'hero.meta3.label': 'Discord',
      'hero.meta3.value': 'Bots que conectan el juego y la comunidad',
      'about.kicker': 'Acerca de',
      'about.title': 'Desarrollo de Minecraft de extremo a extremo.',
      'about.p1': 'Soy un desarrollador de Minecraft enfocado en la pila completa de personalización de servidores — escribiendo Skript para lógica de juego rápida y legible, creando complementos de Skript en Java para extender lo que Skript puede hacer, publicando plugins de Paper/Spigot para funciones críticas de rendimiento y conectando bots de Discord que mantienen a las comunidades unidas al servidor.',
      'about.p2': 'Me importa el código que otras personas realmente puedan leer y mantener: Skript limpio, Java bien estructurado y bots que no caen bajo carga. Ya sea un script de cajas simple o un núcleo de servidor completo, lo construyo para funcionar sin problemas y seguir funcionando cuando sube el número de jugadores.',
      'experience.kicker': 'Experiencia',
      'experience.title': 'Construyendo servidores, scripts y bots.',
      'exp.script.period': 'Skript',
      'exp.script.role': 'Desarrollador de Skript',
      'exp.script.org': 'Servidores de Minecraft',
      'exp.script.desc': 'Escribiendo lógica de juego en Skript — cajas, marcadores, objetos personalizados y núcleos de servidor — lo suficientemente legible para que cualquier admin lo ajuste sin tocar Java.',
      'exp.addon.period': 'Java',
      'exp.addon.role': 'Autor de complementos de Skript',
      'exp.addon.org': 'Ecosistema de Skript',
      'exp.addon.desc': 'Ampliando Skript con complementos de Java que añaden nueva sintaxis, GUIs y efectos de partículas — cerrando la brecha entre scripts rápidos y plugins completos.',
      'exp.plugin.period': 'Paper',
      'exp.plugin.role': 'Desarrollador de Plugins',
      'exp.plugin.org': 'Bukkit / Spigot / Paper',
      'exp.plugin.desc': 'Publicando plugins de Paper críticos de rendimiento con Maven — economía, anti-grief y mecánicas personalizadas construidas para mantenerse ligeras y seguras en asíncrono bajo carga.',
      'exp.bot.period': 'Discord',
      'exp.bot.role': 'Desarrollador de Bots de Discord',
      'exp.bot.org': 'Discord.js / JDA',
      'exp.bot.desc': 'Construyendo bots que conectan el chat del juego con Discord, automatizan recompensas de votación y gestionan moderación con comandos slash — conectando el servidor con su comunidad.',
      'projects.kicker': 'Proyectos',
      'projects.title': 'Lo que he construido.',
      'projects.intro': 'Scripts de Skript, complementos de Skript, plugins de Paper y bots de Discord.',
      'skills.kicker': 'Habilidades',
      'skills.title': 'La pila con la que construyo.',
      'skills.g1': 'Minecraft',
      'skills.g1.i1': 'Skript',
      'skills.g1.i2': 'Complementos de Skript (Java)',
      'skills.g1.i3': 'Paper / Spigot / Bukkit',
      'skills.g1.i4': 'Vault API',
      'skills.g2': 'Discord',
      'skills.g2.i1': 'Discord.js',
      'skills.g2.i2': 'JDA',
      'skills.g2.i3': 'Comandos slash',
      'skills.g2.i4': 'Webhooks',
      'skills.g3': 'Lenguajes y Herramientas',
      'skills.g3.i1': 'Java',
      'skills.g3.i2': 'Maven / Gradle',
      'skills.g3.i3': 'MySQL',
      'skills.g3.i4': 'Git / GitHub',
      'contact.kicker': 'Contacto',
      'contact.title': 'Construyamos tu servidor.',
      'contact.lede': 'Abierto a comisiones de Skript, complementos, plugins y bots de Discord. La forma más rápida de contactarme es Discord.',
      'contact.discord': 'Discord — arnoldo',
      'contact.a11y': 'Este sitio está diseñado para ser totalmente utilizable con un lector de pantalla y solo con el teclado. Presiona Tab para navegar; los encabezados y los puntos de referencia estructuran cada página.',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.built': 'Construido con HTML semántico, CSS escrito a mano y un sistema de proyectos basado en datos.',
      'project.type.skript': 'Skript',
      'project.type.addon': 'Complemento de Skript',
      'project.type.plugin': 'Plugin',
      'project.type.bot': 'Bot de Discord',
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

    // Notify other modules (e.g. project renderer) that the language changed.
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
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
