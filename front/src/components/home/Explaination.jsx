import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';
import './Explaination.scss';

const Explaination = () => (
  <Container fluid className="Explaination">
    <Row>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <Card>
          <div className="round">1</div>
          <CardImg top height="200px" src="/medias/choice.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>
              Choisissez votre restaurant
            </CardTitle>
            <CardText>
              <br />
              <br />
Trouvez un restaurant en fonction de vos critères de recherche.
              <br />
              <br />
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <Card>
          <div className="round">2</div>
          <CardImg top height="200px" src="/medias/paiementorder.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Commandez et payez avant 11h30</CardTitle>
            <CardText>
                Choisissez parmi les formules du jour et la carte, effectuez votre
                commande en ligne et payez en toute sécurité.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <Card>
          <div className="round">3</div>
          <CardImg top height="200px" src="/medias/chef2.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Soyez servi dès votre arrivée</CardTitle>
            <CardText>
                Rendez-vous au restaurant, votre table est prête, profitez de votre
                déjeuner et des personnes qui vous accompagnent et partez sans
                passer par la caisse dès que vous avez fini.

            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>);

export default Explaination;
