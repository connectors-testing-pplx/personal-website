// Theme toggle — respects system preference, persists via attribute
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = sysDark ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  var sunSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  var moonSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function render() {
    var next = theme === 'dark' ? 'light' : 'dark';
    var label = (window.__aa_i18n && window.__aa_i18n.strings) ?
      window.__aa_i18n.strings[document.documentElement.getAttribute('data-lang') || 'en'][theme === 'dark' ? 'theme.toLight' : 'theme.toDark'] :
      'Switch to ' + next + ' mode';
    toggle.setAttribute('aria-label', label);
    toggle.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
  }
  render();

  toggle.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    render();
  });
})();

// Scroll-aware header
(function () {
  var header = document.getElementById('header');
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll('.section, .hero__inner');
  els.forEach(function (el) { el.classList.add('reveal'); });
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Data-driven project renderer =====
// Reads window.PROJECTS (see js/projects.js) and builds a card for each entry.
// Re-renders when the language changes so bilingual text stays in sync.
(function () {
  var grid = document.querySelector('[data-projects]');
  if (!grid) return;

  function pickLang() {
    return document.documentElement.getAttribute('data-lang') || 'en';
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function localized(val, lang) {
    // Support both { en, es } objects and plain strings.
    if (val && typeof val === 'object') return val[lang] || val.en || '';
    return val || '';
  }

  function i18n(key, lang) {
    var dict = (window.__aa_i18n && window.__aa_i18n.strings) ? window.__aa_i18n.strings[lang] : null;
    return dict ? dict[key] : null;
  }

  function buildCard(project, lang) {
    var card = el('article', 'project project--' + (project.type || 'skript'));

    // Category chip + optional featured badge in a header row.
    var head = el('div', 'project__head');
    var chip = el('span', 'project__chip', i18n('project.type.' + project.type, lang) || project.type);
    head.appendChild(chip);
    if (project.badge) {
      head.appendChild(el('span', 'project__badge', localized(project.badge, lang)));
    }
    card.appendChild(head);

    card.appendChild(el('h3', 'project__title', localized(project.title, lang)));
    card.appendChild(el('p', 'project__tag', localized(project.tag, lang)));
    card.appendChild(el('p', 'project__desc', localized(project.desc, lang)));

    // Tech tags
    if (Array.isArray(project.tags) && project.tags.length) {
      var tags = el('ul', 'tags');
      tags.setAttribute('role', 'list');
      project.tags.forEach(function (t) { tags.appendChild(el('li', null, t)); });
      card.appendChild(tags);
    }

    // Links
    if (Array.isArray(project.links) && project.links.length) {
      var links = el('div', 'project__links');
      project.links.forEach(function (link) {
        var a = el('a', 'project__link', link.label);
        a.href = link.url;
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        links.appendChild(a);
      });
      card.appendChild(links);
    }

    return card;
  }

  function render() {
    var projects = window.PROJECTS || [];
    var lang = pickLang();
    grid.innerHTML = '';
    projects.forEach(function (project) {
      grid.appendChild(buildCard(project, lang));
    });
  }

  render();
  document.addEventListener('langchange', render);
})();
