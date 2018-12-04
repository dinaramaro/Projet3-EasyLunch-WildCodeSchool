import React from 'react';
import './AdminPartners.scss';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminPartners = () => (
  <Container className="AdminPartners">
    <h2 className="title">Partenaire</h2>
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
