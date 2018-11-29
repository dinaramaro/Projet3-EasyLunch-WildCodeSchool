import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Container,
} from 'reactstrap';

const Login = () => (
  <Container className="Login">
    <h1>Login Administrateur</h1>
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" placeholder="Mail" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" placeholder="Mot De Passe" />
          </FormGroup>
        </Col>
      </Row>
      <Button>
        <Link to="/admin/MenuAdmin">Connexion</Link>
      </Button>
    </Form>
  </Container>
);

export default Login;
