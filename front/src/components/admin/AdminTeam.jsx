import React from 'react';
import './AdminTeam.scss';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const AdminTeam = () => (
  <Container className="AdminTeam">
    <h2 className="title">Donnée De L&#39;Equipe</h2>
    <Form>
      <FormGroup>
        <Label for="teamPicture">Photo d&#39;Equipe</Label>
        <Input type="url" name="url" id="teamPicture" placeholder="Mettez le lien de vos photos d'équipe" />
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
