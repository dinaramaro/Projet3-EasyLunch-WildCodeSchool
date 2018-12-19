import React from 'react';
import {
  Container, Form, FormGroup, Label, Button, Input,
} from 'reactstrap';

import './Restaurant.scss';

const Restaurateur = () => (
  <div className="Restaurant">
    <h1 className="title">VOUS ÊTES RESTAURATEUR?</h1>
    <Container>
      <div>
        <h2 className="restaurant-title-h2">
          EASY LUNCH, UNE SOLUTION CRÉÉE POUR ET PAR LES RESTAURATEURS
        </h2>
        <p className="paragraph-n1">
          {
            'Devenir partenaire d’Easy Lunch, c’est décider de simplifier son service du midi. Contrairement aux autres solutions qui existent actuellement sur le marché, nous avons souhaité mettre les restaurateurs au centre de notre projet au même titre que les clients. Notre volonté est donc de proposer une solution qui s’adapte à vos contraintes et à votre organisation. L’objectif est d’augmenter la fréquentation dans les restaurants le midi en les rendant plus accessibles. Cela passe notamment par une réduction du temps d’attente. Plus vous aurez des clients qui passeront par Easy Lunch et plus vous serez en mesure d’optimiser votre service du midi.  Nous sommes certains qu’il est possible de convenir d’une solution qui convienne autant aux clients qu’aux restaurateurs. Et c’est dans ce sens que nous travaillons au quotidien. C’est pourquoi Easy Lunch est une application mobile créée pour les restaurateurs, par les restaurateurs !'
          }
        </p>
      </div>
      <div>
        <h2 className="restaurant-title-h2">
          OPTIMISEZ VOTRE SERVICE DU MIDI!
        </h2>
        <p>
          {
            'Easy Lunch est une application mobile qui permet au client de commander et de payer avant de se rendre au restaurant le midi pour y manger sur place. Les bénéfices pour nos restaurants partenaires sont donc clairs :'
          }
        </p>
        <ul>
          <li className="li-restaurant">
            Anticipation et optimisation du service du midi (toutes les
            commandes doivent être passées avant 11h30) ;
          </li>
          <li className="li-restaurant">
            Hausse de la qualité de service (concentration sur le cœur de
            métier, à savoir cuisiner et servir) ;
          </li>
          <li className="li-restaurant">
            Abandon des tâches à faible valeur ajoutée (à savoir la prise de
            commande et le paiement) ;
          </li>
          <li className="li-restaurant">
            Visibilité des plats du jour (les clients Easy Lunch peuvent prendre
            connaissance des plats du jour de tous les
          </li>
          <li className="li-restaurant">
            restaurants partenaires sur une seule et même plateforme) ;
          </li>
          <li className="li-restaurant">
            Flexibilité (vous utilisez Easy Lunch comme vous voulez et quand
            vous voulez).
          </li>
          <li className="li-restaurant">
            L’espace restaurateur a été conçu dans l’optique d’être le plus
            simple possible. En effet, gérer son espace
          </li>
          <li className="li-restaurant">
            restaurateur ne prend pas plus de 5 minutes par jour !
          </li>
        </ul>
      </div>

      <h2 className="form-title">NOUS CONTACTER</h2>
      <div className="form-div">
        <Form className="form">
          <FormGroup>
            <Label className="email">VOTRE E-MAIL</Label>
            <Input required type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>SUJET</Label>
            <Input required type="text" name="subject" />
          </FormGroup>
          <FormGroup>
            <Label>VOTRE MESSAGE</Label>
            <br />
            <Input type="textarea" name="text" />
          </FormGroup>
          <Button color="warning" className="all-btn">
            ENVOYER
          </Button>
        </Form>
      </div>
    </Container>
  </div>
);

export default Restaurateur;
