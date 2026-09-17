// Toutes les informations de la carte digitale sont centralisées ici.
// Modifiez ces valeurs pour personnaliser votre carte (aucune autre
// modification de code n'est nécessaire).
window.CARD_CONFIG = {
  name: "Nassima Adli",
  title: "Développeuse Web",
  bio: "Je conçois des expériences web modernes, accessibles et soignées.",

  // Photo affichée sur la carte. Remplacez assets/photo.svg par votre
  // propre photo (ex: assets/photo.jpg) et mettez à jour le chemin ici.
  photo: "assets/photo.svg",

  // CV téléchargeable. Remplacez assets/cv.pdf par votre vrai CV
  // (gardez le même nom de fichier, ou changez-le ci-dessous).
  cv: "assets/cv.pdf",
  cvFileName: "CV-Nassima-Adli.pdf",

  // Lien vers votre portfolio en ligne.
  portfolioUrl: "https://votre-portfolio.example.com",

  // URL publique de cette carte digitale une fois déployée
  // (ex: GitHub Pages, Netlify...). Utilisée pour générer le QR code
  // dans card-qr.html.
  cardUrl: "https://votre-nom.github.io/carte-digitale/",

  socials: [
    { label: "Email", href: "mailto:nassimaadli777@gmail.com", icon: "✉️" },
    { label: "LinkedIn", href: "https://linkedin.com/in/votre-profil", icon: "💼" },
    { label: "GitHub", href: "https://github.com/votre-utilisateur", icon: "🐙" }
  ]
};
