import React from 'react';
import './AdminPartners.scss';
import {
  Container, Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

const AdminPartners = () => (
  <div className="AdminPartners">
    <h1 className="title">Partenaire</h1>
    <Container>
      <Form>
        <FormGroup>
          <Label for="picturePartner">Image Partenaire</Label>
          <Input
            type="url"
            name="url"
            id="picturePartner"
            placeholder="Mettez le lien de vos photos d'équipe"
          />
        </FormGroup>
        <Button>ENVOYER</Button>
      </Form>
    </Container>
  </div>
);

export default AdminPartners;
