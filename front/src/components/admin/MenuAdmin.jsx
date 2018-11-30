import React from 'react';
import { Link } from 'react-router-dom';
import './MenuAdmin.scss';
import {
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';


const Menu = () => (
  <Container className="MenuAdmin">
    <Row>
      <Col>
        <Button>
          <Link to="/admin/AdminCGV">CGV</Link>
        </Button>
        <Button>
          <Link to="/admin/AdminConcept">Concept</Link>
        </Button>
        <Button>
          <Link to="/admin/AdminPartenaires">Partenaires</Link>
        </Button>
      </Col>
      <Col>
        <Button>
          <Link to="/admin/AdminPolitique">Politique de Confidentialité</Link>
        </Button>
        <Button>
          <Link to="/admin/AdminEquipe">Equipe</Link>
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Menu;
