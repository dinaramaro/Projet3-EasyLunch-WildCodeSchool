import React from 'react';
import {
  Col, Row, Card, CardImg, CardText, CardBody, Container,
} from 'reactstrap';
import './Partenaires.scss';

const Partenaires = () => (
  <Container>
    <section className="Partners">
      <h1 className="titre">NOS PARTENAIRES</h1>
      <Row>
        <Col lg="4" sm="12" xs="12">
          <Card>
            <CardImg top src="/medias/SQAL.png" alt="sqal" className="img-fluid" />
            <CardBody>
              <CardText>
                {`SQAL est une agence spécialisée dans l’innovation. C’est elle qui a développé l’application mobile Easy Lunch. 
                L’équipe est efficace, réactive et disponible. Elle s’adapte aux jeunes start-up comme la nôtre. Vous trouverez plus d’informations sur leur site Internet.`}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" sm="12" xs="12">
          <Card>
            <CardImg top src="/medias/Wild-Code-School.png" alt="wild-code-school" className="img-fluid" />
            <CardBody>
              <CardText>
                {`La Wild Code School forme de futurs développeurs web grâce à une pédagogie innovante et des outils numériques permettant aux élèves de mettre en pratique les enseignements. 
                Sept étudiants ont réalisé notre site web dans le cadre d'un projet d'école.`}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" sm="12" xs="12">
          <Card>
            <CardImg top className="img-fluid" src="/medias/logo-nouvelle-aquitaine.png" alt="region-nouvelle-aquitaine" />
            <CardBody>
              <CardText>
                {`LoremIpsum..... Code School forme de futurs développeurs web grâce à une pédagogie innovante et des outils numériques permettant aux élèves de mettre en pratique les enseignements. 
                Sept étudiants ont réalisé notre site web dans le cadre d'un projet d'école.`}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  </Container>
);

export default Partenaires;
