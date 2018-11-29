import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminPoli = () => (
  <Container>
    <h1>Politique de Confidentialité</h1>
    <Form>
      <FormGroup>
        <Label>Politique de Confidentialité Modification</Label>
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
