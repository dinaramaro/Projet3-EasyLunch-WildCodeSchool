import React from 'react';
import './AdminPoli.scss';
import {
  Container, Form, FormGroup, Input, Button,
} from 'reactstrap';

const AdminPoli = () => (
  <div className="AdminPoli">
    <h1 className="title">Politique de Confidentialité</h1>
    <Container>
      <Form>
        <FormGroup>
          <br />
          <Input
            type="textarea"
            name="text"
            placeholder="Conditions Générales"
          />
        </FormGroup>
        <Button>ENVOYER</Button>
      </Form>
    </Container>
  </div>
);

export default AdminPoli;
