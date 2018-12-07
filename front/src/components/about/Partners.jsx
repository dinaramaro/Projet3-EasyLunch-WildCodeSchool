import React from 'react';
import {
  Col, Row, CardImg, Container,
} from 'reactstrap';
import './Partners.scss';

const Partners = () => (
  <div className="Partners">
    <h1 className="title">NOS PARTENAIRES</h1>

    <Container>
      <Row>
        <Col lg="4" md="6" sm="6" xs="12">
          <div className="div-img">
            <a
              href="https://www.sqal.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImg
                className="img-sqal"
                src="/medias/SQAL.png"
                alt="Card image cap"
              />
            </a>
          </div>
        </Col>
        <Col lg="4" md="6" sm="6" xs="12">
          <div className="div-img">
            <a
              href="https://www.wildcodeschool.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImg
                className="img-wcs"
                src="/medias/Wild-Code-School.png"
                alt="Card image cap"
              />
            </a>
          </div>
        </Col>
        <Col lg="4" md="6" sm="6" xs="12">
          <div className="div-img">
            <a
              href="https://www.nouvelle-aquitaine.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImg
                className="img-na"
                src="/medias/logo-nouvelle-aquitaine.png"
                alt="Card image cap"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Partners;
