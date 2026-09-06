// ============================================================================
//  PROJECTS  —  the simple way to add a new project box.
// ----------------------------------------------------------------------------
//  To add a project, copy one object below and fill in the fields. That's it.
//  The card is rendered automatically on the page. No HTML editing needed.
//
//  Fields:
//    type   : "skript" | "addon" | "plugin" | "bot"
//             Controls the category chip colour on the card.
//    badge  : Optional highlight label (e.g. "Featured"). Omit or null for none.
//    title  : { en: "...", es: "..." }  — bilingual project name.
//    tag    : { en: "...", es: "..." }  — one-line subtitle.
//    desc   : { en: "...", es: "..." }  — short description.
//    tags   : ["Skript", ...]          — language-neutral tech tags.
//    links  : [{ label: "GitHub", url: "https://..." }, ...]  — optional.
// ============================================================================

window.PROJECTS = [
  {
    type: "skript",
    badge: { en: "Featured", es: "Destacado" },
    title: { en: "LootCrates Skript", es: "Skript LootCrates" },
    tag: { en: "Custom reward crate system", es: "Sistema de cajas de recompensas" },
    desc: {
      en: "A complete animated loot-crate system written entirely in Skript — keys, tiers, holograms, and a weight-based reward pool that drops crate keys to active players on a configurable cooldown.",
      es: "Un sistema completo de cajas de recompensas animado escrito por completo en Skript — llaves, niveles, hologramas y un depósito de premios por peso que entrega llaves a los jugadores activos con un enfriamiento configurable."
    },
    tags: ["Skript", "Holograms", "Economy", "MySQL"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "skript",
    title: { en: "ServerCore Skript", es: "Skript ServerCore" },
    tag: { en: "Essential server utilities", es: "Utilidades esenciales del servidor" },
    desc: {
      en: "A modular core that bundles chat formatting, rank placeholders, spawn protection, and a scoreboard — all in clean, readable Skript that any admin can tweak without touching Java.",
      es: "Un núcleo modular que reúne formato de chat, marcadores de rango, protección de spawn y un marcador — todo en Skript limpio y legible que cualquier admin puede ajustar sin tocar Java."
    },
    tags: ["Skript", "Scoreboard", "Placeholders", "Chat"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "addon",
    title: { en: "skript-gui", es: "skript-gui" },
    tag: { en: "Skript Addon · Java", es: "Complemento de Skript · Java" },
    desc: {
      en: "A Java Skript addon that adds intuitive chest-GUI syntax to Skript — build inventories, handle clicks, and paginate menus without a single line of Bukkit boilerplate.",
      es: "Un complemento de Skript en Java que añade una sintaxis intuitiva de GUIs de cofre a Skript — crea inventarios, gestiona clics y pagina menús sin una sola línea de código repetitivo de Bukkit."
    },
    tags: ["Java", "Skript Addon", "Bukkit API", "GUIs"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "addon",
    title: { en: "skript-particles", es: "skript-particles" },
    tag: { en: "Skript Addon · Java", es: "Complemento de Skript · Java" },
    desc: {
      en: "Extends Skript with expression-based particle effects — spirals, halos, and shapes drawn from math, so server owners can script cinematic visuals directly.",
      es: "Amplía Skript con efectos de partículas basados en expresiones — espirales, halos y formas dibujadas con matemáticas, para que los dueños de servidores creen visuales cinematográficos directamente."
    },
    tags: ["Java", "Skript Addon", "Particles", "Math"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "plugin",
    title: { en: "EconomyX", es: "EconomyX" },
    tag: { en: "Paper plugin · Java", es: "Plugin de Paper · Java" },
    desc: {
      en: "A high-performance economy plugin for Paper servers with a Vault-compatible API, offline balance tracking, baltop, and a full admin command suite built on Maven.",
      es: "Un plugin de economía de alto rendimiento para servidores Paper con una API compatible con Vault, seguimiento de saldo sin conexión, baltop y un conjunto completo de comandos de administración construido con Maven."
    },
    tags: ["Java", "Paper API", "Vault", "Maven"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "plugin",
    title: { en: "AnchorGuard", es: "AnchorGuard" },
    tag: { en: "Paper plugin · Java", es: "Plugin de Paper · Java" },
    desc: {
      en: "An anti-grief plugin that protects respawn anchors, claim blocks, and critical blocks across worlds — lightweight, configurable per-world, and async-safe.",
      es: "Un plugin anti-grief que protege anclas de reaparición, bloques reclamados y bloques críticos entre mundos — ligero, configurable por mundo y seguro en asíncrono."
    },
    tags: ["Java", "Paper API", "Anti-grief", "Async"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "bot",
    title: { en: "ServerLink Bot", es: "Bot ServerLink" },
    tag: { en: "Discord · Minecraft bridge", es: "Discord · puente de Minecraft" },
    desc: {
      en: "A Discord.js bot that bridges in-game chat to Discord and back — two-way messages, staff tickets, and live player-count status, plus slash commands for moderation.",
      es: "Un bot de Discord.js que conecta el chat del juego con Discord y viceversa — mensajes bidireccionales, tickets de staff y estado en vivo de jugadores, además de comandos slash de moderación."
    },
    tags: ["Discord.js", "Node.js", "WebSockets", "Slash commands"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  },
  {
    type: "bot",
    title: { en: "VoteRewards Bot", es: "Bot VoteRewards" },
    tag: { en: "Discord · JDA", es: "Discord · JDA" },
    desc: {
      en: "A JDA bot that listens for vote webhooks, grants in-game rewards through the server API, and logs every claim — keeping the reward loop fully automated.",
      es: "Un bot con JDA que escucha webhooks de votación, otorga recompensas dentro del juego a través de la API del servidor y registra cada reclamo — manteniendo el ciclo de recompensas totalmente automatizado."
    },
    tags: ["JDA", "Java", "Webhooks", "Automation"],
    links: [{ label: "GitHub", url: "https://github.com/connectors-testing-pplx" }]
  }
];
