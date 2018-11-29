import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminPartners = () => (
  <Container>
    <h1>Partenaire</h1>
    <Form>
      <FormGroup>
        <Label for="exampleUrl">Image Partenaire</Label>
        <Input type="url" name="url" id="exampleUrl" placeholder="Mettez le lien de vos photos d'équipe" />
      </FormGroup>
      <Button>
        ENVOYER
      </Button>
    </Form>
  </Container>
);

export default AdminPartners;
