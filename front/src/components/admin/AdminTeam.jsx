import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminTeam = () => (
  <Container>
    <h1>Donnée De L&#39;Equipe</h1>
    <Form>
      <FormGroup>
        <Label for="exampleUrl">Photo d&#39;Equipe</Label>
        <Input type="url" name="url" id="exampleUrl" placeholder="Mettez le lien de vos photos d'équipe" />
      </FormGroup>
      <FormGroup>
        <Label>Description d&#39;Equipe</Label>
        <br />
        <Input
          type="textarea"
          name="text"
          placeholder="VOTRE MESSAGE"
        />
      </FormGroup>
      <Button>
        ENVOYER
      </Button>
    </Form>
  </Container>
);

export default AdminTeam;
