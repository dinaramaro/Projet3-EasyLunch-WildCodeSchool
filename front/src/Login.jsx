import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Form,
  FormGroup,
  NavItem,
  Label,
  Input,
  Container,
} from 'reactstrap';

const Login = () => (
  <Container className="Login">
    <h2 className="title">Login Administrateur</h2>
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" placeholder="Mail" id="Email" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" placeholder="Mot De Passe" id="Password" />
          </FormGroup>
        </Col>
      </Row>
      <NavItem tag={Link} to="/admin/MenuAdmin">
        Connexion
      </NavItem>
    </Form>
  </Container>
);

export default Login;
