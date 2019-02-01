
  

# Projet Easy Lunch

## Contexte

- Easy Lunch est une start up créée par les frères DEL PIANO

- Ils ont déjà une application mobile existante et nous ont contacté pour réaliser un site web qui reprend les mêmes fonctionnalités que l'application mobile avec en plus, une partie Administration pour pouvoir gérer les contenus du site, adaptable à tout type d'écran
- il y a 3 parcours utilisateur :
- l'organisateur du déjeuner qui :
- réserve sa table
- commande son repas
- paye en ligne
- partage sa réservation avec un lunchcode
- le participant du déjeuner qui :
- rejoint la table de l'organisateur en utilisant le lunchcode
- commande son repas
- paye en ligne
- l'administrateur qui peut créer, modifier, supprimer les contenus des sections suivantes :
- Contact client
- Contact restaurateur
- Politique de confidentialité
- Concept
- Equipe
- Partenaires
- CGV
- FAQ
- il y a un lien qui amène vers l'espace Restaurateur où le restaurateur pourra gérer les menus de son restaurant

## Technologies utilisées

- React / Redux
- Javascript ES6
- HTML5
- Sass
- NodeJS
- MySQL
- Express
- Reactstrap
- React-map-gl
- React-quill
- React-stripe-checkout
- Js-cookie
- Nodemailer

  

## Navigateurs supportés

Ce site est optimisé pour Google Chrome / Safari

  

## Installation du projet

Pour installer localement le projet il faut:

1. Cloner le repository: https://github.com/WildCodeSchool/bordeaux-0918-js-easylunch.git

2. Installer les dépendances du back:

cd back/

npm install

  

3. Installer les dépendances du front:

cd front/

npm install

  

Pour lancer l’application en mode développement il faut d’abord lancer le back:

```
cd back/
npm start
```
et ensuite le front:
```
cd front/
npm start
```

Une fois les commandes exécutées l’application sera accessible depuis le navigateur à l’adresse: http://localhost:3000/

L’application se rechargera à chaque fois qu’une modification est faite sur l’un des fichiers sources.

## Déploiement

Pour construire les artefacts utiles au déploiement du projet tapez la commande suivante dans le terminal: npm run build

Pour la création du bundle, create-react-app va compresser et optimiser les fichiers pour obtenir les meilleures performances possibles.

## Fichiers de configuration pour accéder à la base de données

L’accès à la base de données doit être configuré aussi bien dans le back que dans le front.

Back:

Dans back/routes créer un fichier config.js structuré comme suit:
```

import mysql from 'mysql';

const connection = mysql.createConnection({

host: insérer l’adresse IP du serveur,

port: indiquer la porte à utiliser,

user: identifiant de votre base de données MySQL,

password: mot de passe de votre base de données MySQL,

database: nom de votre base de données MySQL,

});

  

module.exports = connection;
```

Dans back/, il faut créer un fichier .env avec les informations suivantes :

- PRIVATE_STRIPE_KEY = clé privée pour le module de paiement STRIPE

- SENDER_MAIL = adresse mail de l'expéditeur pour le module d'envoi de mail Nodemailer

- PASSWORD_MAIL = mot de passe pour accéder à l'adresse mail de l'expéditeur

- SECRET = clé pour la création du mot de passe crypté et son décryptage

- IS_PROD = booléen pour indiquer si on est en Production ou en Développement

Front:

Il faut créer une variable d’environnement qui contiendra l’adresse IP du serveur et qui sera utilisée dans tous les composants du front qui communiquent avec la base de données. De telle manière si l’adresse du serveur change il suffit de mettre à jour la variable d’environnement pour que le nouvel IP soit disponible dans tous les composants.

Il faut aussi créer une variable d'envionnement qui contiendra l'adresse mail de Easy Lunch et qui sera utilisée dans tous les composants du front qui envoient des mails à Easy Lunch.

Enfin, il faut créer une variable d'environnement qui contiendra la clé publique pour le module de paiement STRIPE et qui sera utilisée dans tous les composants du front où un paiement est possible.


Les étapes à suivre sont les suivantes:

- Créer un fichier .env dans front/ avec les informations suivantes:

- REACT_APP_API_URL = adresse IP du serveur

- REACT_APP_ADMIN_MAIL = adresse mail de Easy Lunch

- REACT_APP_KEY_PUBLIC_STRIPE = clé publique du module de paiement STRIPE

REACT_APP_API_URL est intégré dans la constante varServeur, qui permet de stocker l'URL.

- Importer varServeur dans les composants qui communiquent avec la base de données et l’utiliser en substitution de l’adresse Ip en dur

REACT_APP_ADMIN_MAIL est intégré dans la constante mailAdmin, qui permet de stocker l'adresse mail de Easy Lunch.

- Importer mailAdmin dans les composants qui envoient des mails à Easy Lunch

REACT_APP_KEY_PUBLIC_STRIPE est intégré dans la constante publicStripeKey, qui permet de stocker la clé publique utilisé par le module de paiement STRIPE.

- Importer publicStripeKey dans les composants qui utilisent le module de paiement STRIPE

 

## Routes API

## CGV
**GET** /api/admin/cgv --> récupère les CGV

**PUT** /api/admin/cgv --> Mise à jour des CGV
 ```js
{
	"cgv": "content"
}
  ```

## FAQ

**GET** /api/admin/faq --> récupère les questions / réponses FAQ

**GET** /api/admin/faq/**:id** --> récupère une question / réponse en fonction de son **id**

**PUT** /api/admin/faq/**:id** --> Mise à jour d'une question / réponse  en fonction de son **id**
 ```js
{
	"question": "Qu'est-ce qu’Easy Lunch ?",
	"answer": "Easy Lunch est un service..."
 }
  ```
  
**DELETE** /api/admin/faq/**:id** --> supprime une question / réponse en fonction de son **id**

**POST** /api/admin/faq --> Ajouter une question / réponse
 ```js
{
	"question": "Qu'est-ce qu’Easy Lunch ?",
	"answer": "Easy Lunch est un service..."
 }
  ```

## POLITIQUE DE CONFIDENTIALITE

**GET** /api/admin/politic --> récupère les politiques de confidentialité

**PUT** /api/admin/politic --> Mise à jour des politiques de confidentialité
 ```js
{
	"politic": "Easy Lunch souhaite bâtir une relation...",
}
  ```

## Contact client

**GET** /api/admin/contact --> Récupère la section contact
**PUT** /api/admin/contact --> Mise à jour de la section contact
 ```js
{
	"contactText": "content...",
 }
  ```

## Contact restaurateur

**GET** /api/admin/contact-restaurant --> Récupère la section contact restaurateur
**PUT** /api/admin/contact-restaurant --> Mise à jour de la section contact restaurateur
 ```js
{
	"text": "content...",
 }
  ```

## PARTENAIRES

**GET** /api/admin/partners --> récupère tous les partenaires

**DELETE** /api/admin/partners/**:id** --> supprime un partenaire en fonction de son **id**

**POST** /api/admin/partners/ --> ajoute un partenaire.

 ```js
{
	"name": "Wild Code School",
	"picture": "https://wildcodeschool.fr/wp-content/uploads/2019/01/logo_pink_176x60.png",
	"link": "https://wildcodeschool.fr/"
 }
  ```

## EQUIPE

**GET** /api/admin/team --> récupère tous les membres de Easy Lunch

**GET** /api/admin/team/**:id** --> récupère un membre en fonction de son **id**

**POST** /api/admin/team --> ajoute un membre
 ```js
{
	"picture": "url",
	"description": "biographie",
	"name": "Martin",
	"fonction": "CEO"
 }
  ```

**PUT** /api/admin/team/**:id** -> Mise à jour d'un membre en fonction de son **id**

**DELETE** /api/admin/team/**:id** --> supprime un membre en fonction de son **id**

## CONCEPT

**GET** /api/admin/concept --> récupère la section concept
**PUT** /api/admin/concept --> mise à jour de la section concept
 ```js
{
	"concept": "content"
}
 ```

## BARRE DE RECHERCHE

**GET** /api/search --> récupère un restaurant en fonction de la recherche via **req.query** 
```js
{
	"keyword": "cafe",
	"personcapacity": "2"
}
 ```

## Parcours participation

**GET** /api/idrestaurant/**:code** --> Récupère l'id restaurant en fonction du Lunch Code (parcours participation)

## Carte d'un restaurant

**GET** /api/cards/**:id** --> récupère la carte d'un restaurant en fonction de son **id**

## Inscription

**POST** /api/signup --> Inscription utilisateur + envoie d'un mail de confirmation
```js
{
	"mail": "exemple@exemple.com",
	"password": "*****",
	"phone": "0606060606",
	"name": "joel"
 }
 ```
mot de passe crypté par bcrypt

##  Connexion

**POST** /api/signin --> connexion d'un utilisateur déja en base. Gestion du token de connexion via JSON web Token (Passport JWT)

## Changement de mot de passe

**PUT** /api/changepassword/**:id** --> Change le mot de passe d'un utilisateur en fonction de son **id**

## Cookie de connexion

**GET** /api/checked/**:token** --> Connexion d'un utilisateur en fonction du token stocké dans les cookies du navigateur.

## Réservation

**POST** /api/command --> création d'une réservation + ecriture dans les tables de la bdd
 ```js
 {
	"tableBooking": {master_user_id: 51, nb_users: 7, schedule: 1230, restaurant_id: 54},
	"tableCommand": {meal_id: "{468,475}", user_id: 51, price: 19.5, menu: "{"71": [4.5,7]}"},
	"tablePayment": {amount: 19.5, user_id: 51, status: "ok"},
	"idStripe": "ch_hugyihuojkoijhugyh"
 }
 ```

## Réservation participation

**POST** /api/participate/**:code** --> création d'une réservation + ecriture dans les tables de la bdd en fonction du **Lunch Code**
 ```js
 {
	"tableCommand": {meal_id: "{468,475}", user_id: 51, price: 19.5, menu: "{"71": [4.5,7]}"},
	"tablePayment": {amount: 19.5, user_id: 51, status: "ok"},
	"idStripe": "ch_hugyihuojkoijhugyh"
 }
 ```

## Historique de réservation

**GET** /api/reservationhistory/**:userId** --> récupère l'historique de réservation d'un utilisateur en fonction de son **id**

## Paiement

**POST** /api/pay/**:amount** --> Effectue le paiement avec Stripe en fonction du montant

## Envoie de mail section contacts

**POST** /api/mailcontact --> Envoie de mail via **NodeMailer**
 ```js 
 {
	 "email": "exemple@exemple.com",
	 "subject": "Subject",
	 "text": "message"
 }
 ```
## Partage du Lunch Code par email

**POST** /api/sendcodemail --> Partage du Lunch Code par email  
 ```js 
 {
	 "masterName": "Joel",
	 "shareCode": "camembert",
	 "restoName": "N Cafe",
	 "restoAddress": "104 rue du boulevard",
	 "hour": "1230",
	 "targetMail": "exemple@exemple.com"
 }
 ```

  
  

## Arborescence de l’application
**Front src/**
```
├── App.jsx
├── App.scss
├── CheckToken.jsx
├── Footer.jsx
├── Footer.scss
├── NavBar.jsx
├── NavBar.scss
├── PrivateRoute.jsx
├── PrivateRouteAdmin.jsx
├── ScrollToTop.jsx
├── actions
├── components
├── constants
├── containers
├── index.js
├── index.scss
├── reducers
└── serviceWorker.js

directory: 5 file: 13 
```

**Back**
```
├── app.js
├── bin
├── build
├── package-lock.json
├── package.json
├── process.yml
├── public
└── routes

directory: 4 file: 4 
```

**Back routes/** 
```

├── admin
├── cards.js
├── command
├── config.js
├── mail
├── myAccount
├── participation
├── partners.js
├── restaurant.js
├── restaurants.js
└── search.js

directory: 5 file: 6 
```


  

## Contributeurs

Ce site a été réalisé par:

- Dina Ramarovahoaka,

- Lingling Tabuteau,

- Caroline Tri,

- Mickael Muller,

- Alexandre Buisson,

- Florian Allainmat,

- José Pérez-Oyarzun

 


