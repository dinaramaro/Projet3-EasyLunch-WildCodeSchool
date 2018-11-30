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
        <Label for="picturePartner">Image Partenaire</Label>
        <Input type="url" name="url" id="picturePartner" placeholder="Mettez le lien de vos photos d'équipe" />
      </FormGroup>
      <Button>
        ENVOYER
      </Button>
    </Form>
  </Container>
);

export default AdminPartners;
