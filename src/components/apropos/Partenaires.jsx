import React from 'react';
import {
  Col, Row, Card, CardImg, CardText, CardBody, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Partenaires.css';

const Partenaires = () => (
  <section>
    <h1 className="titre">NOS PARTENAIRES</h1>
    <div className="conteneur">
      <Row>
        <Col lg="4" md="6">
          <Card>
            <CardImg top width="100%" src="/medias/SQAL.png" alt="sqal" id="image" className="img-fluid" />
            <CardBody>
              <CardText>
                {`SQAL est une agence spécialisée dans l’innovation. C’est elle qui a développé l’application mobile Easy Lunch. 
                L’équipe est efficace, réactive et disponible. Elle s’adapte aux jeunes start-up comme la nôtre. Vous trouverez plus d’informations sur leur site Internet.`}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6">
          <Card>
            <CardImg top width="100%" src="/medias/Wild-Code-School.png" alt="wild-code-school" id="image" className="img-fluid" />
            <CardBody>
              <CardText>
                {`La Wild Code School forme de futurs développeurs web grâce à une pédagogie innovante et des outils numériques permettant aux élèves de mettre en pratique les enseignements. 
                Sept étudiants ont réalisé notre site web dans le cadre d'un projet d'école.`}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6">
          <Card>
            <CardImg top width="100%" src="/medias/logo-nouvelle-aquitaine.png" alt="region-nouvelle-aquitaine" id="image" />
            <CardBody>
              <CardText>
                {`LoremIpsum..... Code School forme de futurs développeurs web grâce à une pédagogie innovante et des outils numériques permettant aux élèves de mettre en pratique les enseignements. 
                Sept étudiants ont réalisé notre site web dans le cadre d'un projet d'école.`}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="https://www.easy-lunch.fr/wp-content/uploads/elementor/thumbs/te%CC%81le%CC%81chargement-1-nsjf74kfxmcyey74par0xhohiixqiltud2d6p52q42.png" alt="Easy-lunch-partenaires" />
          <p>Easy Lunch a été conçu pour et par les restaurateurs ! </p>
          <p>Vous  souhaitez en savoir plus sur Easy Lunch ?</p>
          <Link to="/apropos/contact"><Button color="success">Devenir partenaire</Button></Link>
        </Col>
      </Row>

    </div>
  </section>
);

export default Partenaires;
