import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminConcept = () => (
  <Container>
    <h1>Concept</h1>
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
);

export default AdminConcept;
