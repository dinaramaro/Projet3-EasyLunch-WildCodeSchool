import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import './Team.scss';

const Equipe = () => (
  <Container className="Team">
    <section>
      <h1 className="title">L&#39;ÉQUIPE</h1>
      <Row>
        <Col className="person">
          <img src="https://media.licdn.com/dms/image/C4E03AQGvXycPIxcdgw/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=feJ8Y03AoTJZikNl7hbvyUO-kEWXZzsd9kFrxgiNxuc" alt="Easy-lunch-Arthur" />
          <h1>Arthur Del Piano</h1>
          <p>Co-fondateur</p>
          <p className="text">
            {`Après des études variées (commerce, marketing, gestion), je me suis orienté vers un poste de salarié. Deux ans plus tard, je décide de quitter mon poste et de me lancer dans l’entrepreneuriat.
              Le déclic a eu lieu lorsque je travaillais à l’Université de Bordeaux. En effet, je n’arrivais jamais à respecter mon temps de pause le midi lorsque je mangeais au restaurant. J’ai donc cherché à comprendre comment les rendre plus accessibles le midi pour les personnes qui manquent de temps.
              J’ai d’abord échangé avec des restaurateurs pour voir ce qu’il était possible de mettre en place. Ensuite, j’ai demandé à mon frère de me rejoindre dans l’aventure. À suivre…`}
          </p>
        </Col>
        <Col className="person">
          <img src="http://static8.viadeo-static.com/kwrEXUPRO_olqZQG6g9uZEz2NAc=/300x300/member/0021gi46s33odp1t%3Fts%3D1535908781000" alt="Easy-lunch-Theo" />
          <h1>Théo Del Piano</h1>
          <p>Co-fondateur</p>
          <p className="text">
            {`Après un DUT Techniques de Commercialisation à Bordeaux, j’ai décidé de quitter la France en 2013 pour l’Australie. Je me suis rapidement orienté vers le monde de la restauration où je me suis découvert une seconde passion.
              Cette première expérience m’a ensuite conduit aux Etats-Unis (2015) puis en Angleterre (2017). De plongeur à chef de partie, de chef de rang à manager pour le compte de grands noms comme Paul Bocuse ou Eric Kayser, j’ai occupé tous les postes dans la restauration aussi bien en cuisine qu’en salle.
              En 2017, après plusieurs semaines passées à conseiller mon frère à distance sur le projet Easy Lunch, je décide donc de revenir sur Bordeaux pour me lancer dans l’aventure avec lui. À suivre…`}
          </p>
        </Col>
      </Row>
    </section>
  </Container>
);

export default Equipe;