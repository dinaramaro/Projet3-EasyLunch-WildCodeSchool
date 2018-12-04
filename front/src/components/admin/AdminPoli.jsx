import React from 'react';
import './AdminPoli.scss';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

const AdminPoli = () => (
  <Container className="AdminPoli">
    <h2 className="title">Politique de Confidentialité</h2>
    <Form>
      <FormGroup>
        <br />
        <Input
          type="textarea"
          name="text"
          placeholder="Conditions Générales"
        />
      </FormGroup>
      <Button>
        ENVOYER
      </Button>
    </Form>
  </Container>
);

export default AdminPoli;
