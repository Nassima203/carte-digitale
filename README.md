# carte-digitale

Carte de visite digitale avec QR code : le QR code renvoie vers cette carte,
qui donne accès à votre portfolio et permet de télécharger votre CV (avec
votre photo).

## Structure

- `index.html` — la carte digitale (photo, nom, titre, bio, bouton
  portfolio, bouton téléchargement CV, réseaux sociaux). C'est la page vers
  laquelle le QR code doit pointer.
- `card-qr.html` — une version imprimable/partageable de la carte, avec le
  QR code généré automatiquement à partir de l'URL de `index.html`.
- `config.js` — toutes vos informations personnelles (nom, titre, bio,
  photo, CV, lien du portfolio, réseaux sociaux). C'est le seul fichier à
  modifier pour personnaliser la carte.
- `assets/` — votre photo (`photo.svg`, à remplacer) et votre CV
  (`cv.pdf`, à remplacer). Des fichiers de remplacement sont fournis pour
  que tout fonctionne immédiatement.
- `styles.css` — le style visuel des cartes.
- `vendor/qrcode.min.js` — librairie de génération de QR code (embarquée
  localement, aucune dépendance externe/CDN requise).

## Personnaliser

1. Ouvrez `config.js` et renseignez :
   - `name`, `title`, `bio`
   - `photo` : remplacez `assets/photo.svg` par votre vraie photo (ex.
     `assets/photo.jpg`) et mettez à jour le chemin
   - `cv` : remplacez `assets/cv.pdf` par votre vrai CV (gardez le même nom
     de fichier, ou changez `cv` et `cvFileName`)
   - `portfolioUrl` : le lien vers votre portfolio en ligne
   - `cardUrl` : l'URL publique de `index.html` une fois déployé (nécessaire
     pour générer le bon QR code dans `card-qr.html`)
   - `socials` : vos liens (email, LinkedIn, GitHub, etc.)

## Déployer

Ce projet est un site statique, sans dépendance à installer. Vous pouvez le
déployer gratuitement avec :

- **GitHub Pages** : Settings → Pages → déployer depuis la branche
  principale, dossier racine.
- **Netlify** ou **Vercel** : glisser-déposer le dossier ou connecter le
  dépôt Git.

Une fois déployé, mettez à jour `cardUrl` dans `config.js` avec l'URL
obtenue, puis ouvrez `card-qr.html` : le QR code correspondant sera généré
automatiquement.

## Utiliser le QR code

1. Ouvrez `card-qr.html` dans un navigateur (en local ou après déploiement).
2. Faites une capture d'écran ou imprimez la page : le QR code pointe vers
   `index.html` (la carte digitale).
3. En scannant le QR code, la personne arrive sur votre carte digitale et
   peut cliquer sur « Voir mon portfolio » ou « Télécharger mon CV ».
