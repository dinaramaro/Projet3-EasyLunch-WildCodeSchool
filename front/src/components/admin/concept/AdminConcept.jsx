import React from 'react';
import './AdminConcept.scss';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminConcept = () => (
  <div>
    <h2 className="title">Concept</h2>
    <Container className="AdminConcept">
      <Form>
        <FormGroup>
          <Label for="conceptPicture">Image du concept</Label>
          <Input type="url" name="url" id="conceptPicture" placeholder="Mettez le lien de vos images de concept" />
        </FormGroup>
        <FormGroup>
          <Label>Description du concept</Label>
          <br />
          <Input
            type="textarea"
            name="text"
            placeholder="VOTRE MESSAGE"
          />
        </FormGroup>
        <FormGroup>
          <Label for="movieConcept">Video du concept</Label>
          <Input type="url" name="url" id="movieConcept" placeholder="Mettez le lien de votre video concept" />
        </FormGroup>
        <Button className="text-color">
          ENVOYER
        </Button>
      </Form>
    </Container>
  </div>
);

export default AdminConcept;
