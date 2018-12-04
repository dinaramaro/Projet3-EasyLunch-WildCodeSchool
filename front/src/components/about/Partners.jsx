import React from 'react';
import {
  Col,
  Row,
  CardImg,
  Container,
} from 'reactstrap';
import './Partners.scss';

const Partners = () => (
  <Container className="Partners">
    <h1 className="title">NOS PARTENAIRES</h1>
    <Row>
      <Col lg="4" md="6" sm="6" xs="12">
        <div className="div-img">
          <CardImg
            className="img-sqal"
            src="/medias/SQAL.png"
            alt="Card image cap"
          />
        </div>
      </Col>
      <Col lg="4" md="6" sm="6" xs="12">
        <div className="div-img">
          <CardImg
            className="img-wcs"
            src="/medias/Wild-Code-School.png"
            alt="Card image cap"
          />
        </div>
      </Col>
      <Col lg="4" md="6" sm="6" xs="12">
        <div className="div-img">
          <CardImg
            className="img-na"
            src="/medias/logo-nouvelle-aquitaine.png"
            alt="Card image cap"
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Partners;