# carte-digitale

Page façon Linktree avec QR code : le QR code renvoie vers cette page, qui
regroupe votre photo, votre nom, vos liens (portfolio, LinkedIn, GitHub,
Gmail) et un bouton pour télécharger votre CV.

## Structure

- `index.html` — la page principale (photo, nom, bouton téléchargement CV,
  liste de liens). C'est la page vers laquelle le QR code doit pointer.
- `card-qr.html` — une version imprimable/partageable de la carte, avec le
  QR code généré automatiquement à partir de l'URL de `index.html`.
- `config.js` — toutes vos informations (nom, photo, CV, liste des liens).
  C'est le seul fichier à modifier pour personnaliser la page.
- `assets/` — votre photo (`photo.jpg`) et votre CV (`cv.pdf`), déjà en
  place.
- `styles.css` — le style visuel : même identité que le portfolio (fond
  crème, formes organiques violet/rose, cadre noir épais, accents vert
  anis, typo Fraunces/Space Mono).
- `vendor/qrcode.min.js` — librairie de génération de QR code (embarquée
  localement, aucune dépendance externe/CDN requise).

## Personnaliser

Vos informations sont déjà renseignées dans `config.js`. Pour les mettre à
jour :

1. Ouvrez `config.js` et modifiez :
   - `name`
   - `photo` : remplacez `assets/photo.jpg` par une nouvelle photo si besoin
   - `cv` : remplacez `assets/cv.pdf` par une nouvelle version de votre CV
     (gardez le même nom de fichier, ou changez `cv` et `cvFileName`)
   - `links` : la liste des boutons affichés (label, URL, icône), dans
     l'ordre d'affichage
   - `cardUrl` : l'URL publique de `index.html` une fois déployé (nécessaire
     pour générer le bon QR code dans `card-qr.html`) — **à mettre à jour
     après déploiement**

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
   `index.html`.
3. En scannant le QR code, la personne arrive sur votre page et peut
   cliquer sur n'importe quel lien ou télécharger votre CV.
