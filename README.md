# carte-digitale

Page façon Linktree : photo, nom, liens (portfolio, LinkedIn, GitHub,
Gmail) et un bouton pour télécharger le CV.

## Structure

- `index.html` — la page principale (photo, nom, bouton téléchargement CV,
  liste de liens).
- `config.js` — toutes vos informations (nom, photo, CV, liste des liens).
  C'est le seul fichier à modifier pour personnaliser la page.
- `assets/` — votre photo (`photo.jpg`) et votre CV (`cv.pdf`), déjà en
  place.
- `styles.css` — repris directement du design system du portfolio
  (`Nassima203/portfolio-nassima/css/style.css`) : mêmes variables de
  couleur (crème `#f3eee2`, encre `#201510`, terracotta `#c9bbf6`,
  rose `#fbbedd`, lime `#cdf17a`), mêmes polices (Fraunces, Poppins,
  Space Mono) et mêmes styles de bouton/carte (ombres portées franches,
  effet d'inversion au survol). Icônes LinkedIn/GitHub/Gmail en SVG
  (mêmes tracés que le portfolio), pas d'emoji.

## Personnaliser

Vos informations sont déjà renseignées dans `config.js`. Pour les mettre à
jour :

1. Ouvrez `config.js` et modifiez :
   - `name`
   - `photo` : remplacez `assets/photo.jpg` par une nouvelle photo si besoin
   - `cv` : remplacez `assets/cv.pdf` par une nouvelle version de votre CV
     (gardez le même nom de fichier, ou changez `cv` et `cvFileName`)
   - `portfolioUrl` : le lien vers votre portfolio
   - `links` : la liste des boutons affichés (label, URL, icône), dans
     l'ordre d'affichage

## Déployer

Ce projet est un site statique, sans dépendance à installer. Vous pouvez le
déployer gratuitement avec :

- **GitHub Pages** : Settings → Pages → déployer depuis la branche
  principale, dossier racine.
- **Netlify** ou **Vercel** : glisser-déposer le dossier ou connecter le
  dépôt Git.
