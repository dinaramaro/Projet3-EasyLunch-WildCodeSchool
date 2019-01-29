
# Projet Easy Lunch

DOCUMENTATION **API EASYLUNCH**

## Restaurants

**GET** /api/restaurant --> récupère tous les restaurants

## CGV

**GET** /api/admin/cgv --> récupère les CGV

**PUT** /api/admin/cgv --> Mise à jour des CGV via **req.body**

## FAQ

**GET** /api/admin/faq --> récupère les questions / réponses FAQ

**GET** /api/admin/faq/**:id** --> récupère une question / réponse en fonction de son **id**

**PUT** /api/admin/faq/**:id** --> Mise à jour d'une question / réponse via **req.body** en fonction de son **id**

**DELETE** /api/admin/faq/**:id** --> supprime une question / réponse en fonction de son **id**

**POST** /api/admin/faq --> Ajouter une question / réponse via **req.body**

## POLITIQUE DE CONFIDENTIALITE

**GET** /api/admin/politic --> récupère les politiques de confidentialité

**PUT** /api/admin/politic --> Mise à jour des politiques de confidentialité via le **req.body**

## PARTENAIRES

**GET** /api/admin/partners --> récupère tous les partenaires

**DELETE** /api/admin/partners/**:id** --> supprime un partenaire en fonction de son **id**

**POST** /api/admin/partners/ --> ajoute un partenaire.
``
{
 "name": "partner"
}
``

## BARRE DE RECHERCHE

**GET** /api/search --> récupère un restaurant en fonction de la recherche via **req.query**

## EQUIPE

**GET** /api/admin/team --> récupère tous les membres de Easy Lunch

**GET** /api/admin/team/**:id** --> récupère un membre en fonction de son **id**

**POST** /api/admin/team --> ajoute un membre via **req.body**

**PUT** /api/admin/team/**:id** -> Mise à jour d'un membre en fonction de son **id**

**DELETE** /api/admin/team/**:id** --> supprime un membre en fonction de son **id**