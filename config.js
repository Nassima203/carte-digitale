// Toutes les informations de la page sont centralisées ici.
// Modifiez ces valeurs pour personnaliser la page (aucune autre
// modification de code n'est nécessaire).
window.CARD_CONFIG = {
  name: "Nassima Adli",

  // Photo affichée en haut de la page.
  photo: "assets/photo.jpg",

  // CV téléchargeable.
  cv: "assets/cv.pdf",
  cvFileName: "CV-Nassima-Adli.pdf",

  // Lien vers le portfolio (utilisé aussi par le logo en haut de page).
  portfolioUrl: "https://portfolio-nassimaadli.vercel.app",

  // Liens affichés façon Linktree, dans l'ordre. `icon` fait référence à
  // une clé de window.CARD_ICONS (voir plus bas) ; laissez-le vide pour
  // un lien sans icône.
  links: [
    { label: "Portfolio", href: "https://portfolio-nassimaadli.vercel.app" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nassima-adli-60a78135b/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/Nassima203", icon: "github" },
    { label: "Gmail", href: "mailto:nassimaadli777@gmail.com", icon: "gmail" }
  ]
};

// Icônes SVG (mêmes tracés que le portfoliopour rester cohérent — aucun
// emoji). Chaque valeur est insérée telle quelle dans le DOM.
window.CARD_ICONS = {
  gmail: '<svg viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2.3 7.4 5.6a.8.8 0 0 0 .8 0l7.4-5.6H4.2Zm15.6 1.4-7 5.3a2.8 2.8 0 0 1-3.6 0l-7-5.3v9.3c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V8.2Z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.92.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.04a9.4 9.4 0 0 1 5 0c1.9-1.32 2.75-1.04 2.75-1.04.55 1.42.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5C19.14 20.62 22 16.77 22 12.25 22 6.58 17.52 2 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.57h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.58 4.78 5.93V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-3.98V9.5Z"/></svg>'
};
