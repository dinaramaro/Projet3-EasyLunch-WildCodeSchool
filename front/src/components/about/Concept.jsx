import React from 'react';
import {
  Col, Row, Button, Container,
} from 'reactstrap';
import ResponsiveEmbed from 'react-responsive-embed';
import { Link } from 'react-router-dom';
import './Concept.scss';

const Concept = () => (
  <div className="Concept">
    <h1 className="title">
      EASY LUNCH, L&#39;APPLI QUI SIMPLIFIE VOTRE PAUSE-DÉJEUNER AU RESTAURANT !
    </h1>
    <Container>
      <section>
        <Row>
          <Col lg="4" md="4" sm="12" className="box">
            <img
              src="/medias/1-Choisir-un-restaurant.png"
              alt="easy-lunch-choisir"
            />
          </Col>
          <Col lg="4" md="4" sm="12" className="box">
            <img src="/medias/2-Commander.png" alt="easy-lunch-commander" />
          </Col>
          <Col lg="4" md="4" sm="12" className="box">
            <img src="/medias/3-Partager.png" alt="easy-lunch-partager" />
          </Col>
        </Row>
      </section>
      <section>
        <h1 className="titre">EASY LUNCH, C&#39;EST POUR QUI?</h1>

        <p className="concept-text">
          {`Vous souhaitez simplifier votre pause-déjeuner au restaurant ? Organiser un repas entre collègues mais cela prend du temps ? C’est compliqué ? Vous avez un timing serré à respecter tout en ayant la volonté de faire une vraie pause et de bien manger ?
        
            Avec Easy Lunch, ne perdez plus de temps, commandez et payez avant sur l’application mobile et bénéficiez alors d’une nouvelle expérience au restaurant !
        
            L’objectif d’Easy Lunch est de rendre les restaurants bordelais plus accessibles le midi pour les personnes qui manquent de temps. L’idée est donc simple : vous commandez et payez en ligne, vous arrivez au restaurant, vous profitez de votre repas et des autres personnes qui vous accompagnent et vous repartez sans passer par la caisse en fin de repas.
        
            Easy Lunch vous permet donc de réduire le temps d’attente et de profiter pleinement de votre pause-déjeuner dans un restaurant partenaire Easy Lunch. Il est maintenant possible de manger vite et bien et de bénéficier d’une nouvelle expérience. Sortez de votre bureau et rendez plus agréable votre pause-déjeuner !
        
            Plus que le gain de temps, Easy Lunch simplifie votre pause-déjeuner et vos repas de groupe au restaurant !`}
        </p>
      </section>

      <section>
        <h1 className="titre">L&#39;APPLI EASY LUNCH, COMMENT ÇA MARCHE?</h1>
        <Row>
          <Col>
            <ResponsiveEmbed
              title="Easy-lunch"
              src="https://www.youtube.com/embed/RluXbJ4CZHU"
              allowFullScreen
            />
          </Col>
        </Row>
        <Row className="concept-text">
          <Col>
            {`Il y a deux possibilités, soit vous organisez une réservation soit vous participez à une réservation déjà initiée.
            Quel que soit votre cas, commander son repas avec Easy Lunch est simple et rapide. Il faut notamment savoir que chaque personne commande et paye individuellement.
            Pour organiser une réservation :`}
            <ul>
              <li>1/ Connectez-vous sur l’application Easy Lunch</li>
              <li>
                {`2/ Indiquez l’heure de votre venue au restaurant et 
              le nombre de personnes concernées par votre réservation`}
              </li>
              <li>
                {`3/ L’application vous propose les restaurants les plus proches de vous en tenant compte des critères que vous avez saisis. 
            Vous n’avez plus qu’à sélectionner le restaurant de votre choix`}
              </li>
              <li>
                {`4/ Accédez à la carte du restaurant, faites votre choix parmi son plat du jour, 
            ses formules et ses plats à la carte`}
              </li>
              <li>5/ Procédez au paiement</li>
              <li>
                {`6/ Une fois le paiement validé, 
              vous recevez un code relatif à votre réservation`}
              </li>
              <li>
                {`7/ Partagez ce code avec vos amis ou collègues 
              pour qu’ils vous rejoignent à votre table`}
              </li>
            </ul>
            Pour participer à une réservation :
            <ul>
              <li>1/ Connectez-vous sur l’application Easy Lunch</li>
              <li>2/ Cliquez sur l’onglet « Je participe »</li>
              <li>
                3/ Saisissez le code de la réservation qui vous a été transmis
              </li>
              <li>
                {`4/ Accédez à la carte du restaurant, faites votre choix parmi son plat du jour, 
              ses formules et ses plats à la carte`}
              </li>
              <li>5/ Procédez au paiement</li>
            </ul>
            {`Ensuite, présentez le code qui fait office de réservation lors de votre arrivée au restaurant 
          et profitez pleinement de votre pause-déjeuner.`}
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          <Col>
            <img src="/medias/nous-contacter.png" alt="Easy-lunch-logo" />
            <p>Vous avez des questions sur Easy Lunch?</p>
            <p> Des avis ou des expériences à nous partager? Ecrivez-nous!</p>
            <Link to="/apropos/contact">
              <Button color="success">Nous contacter</Button>
            </Link>
          </Col>
          <Col>
            <img
              src="/medias/devenir-partenaire.png"
              alt="Easy-lunch-partenaires"
            />
            <p>Easy Lunch a été conçu pour et par les restaurateurs ! </p>
            <p>Vous souhaitez en savoir plus sur Easy Lunch ?</p>
            <Link to="/apropos/contact">
              <Button color="success">Devenir partenaire</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://itunes.apple.com/fr/app/easy-lunch/id1407269785?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo"
                src="https://www.easy-lunch.fr/wp-content/uploads/2018/08/T%C3%A9l%C3%A9charger-dans-App-Store1-1024x303.png"
                alt="App-Store-Easy-Lunch"
              />
            </a>
          </Col>
          <Col>
            <a
              href="https://play.google.com/store/apps/details?id=com.easy.lunch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo"
                src="https://www.easy-lunch.fr/wp-content/uploads/2018/08/google-play-badge1-1024x303.png"
                alt="Google-Store-Easy-Lunch"
              />
            </a>
          </Col>
        </Row>
      </section>
      <section>
        <h1 className="actu">Suivez notre actualité</h1>

        <a
          href="https://www.facebook.com/EasyLunchBordeaux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo-sm"
            src="/medias/Facebook.png"
            alt="Easy-Lunch-facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/easy_lunch_fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo-sm"
            src="/medias/instagram.png"
            alt="Easy-Lunch-instagram"
          />
        </a>
      </section>
    </Container>
  </div>
);

export default Concept;
