import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { varServeur } from '../../../constants';

class AdminTeamNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fonction: '',
      picture: '',
      description: '',
    };
    this.onChangeNew = this.onChangeNew.bind(this);
  }

  onChangeNew(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  postMember = () => {
    fetch(`${varServeur}admin/postmember/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    const {
      name, fonction, picture, description,
    } = this.state;
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="teamName">Nom</Label>
            <Input
              type="text"
              name="name"
              placeholder="Mettez le nom de la personne"
              value={name}
              onChange={this.onChangeNew}
            />
          </FormGroup>
          <FormGroup>
            <Label for="teamFonction">Fonction</Label>
            <Input
              type="text"
              name="fonction"
              placeholder="Mettez la fonction de la personne"
              value={fonction}
              onChange={this.onChangeNew}
            />
          </FormGroup>
          <FormGroup>
            <Label for="teamPicture">Photo d&#39;Equipe</Label>
            <Input
              type="url"
              name="picture"
              placeholder="Mettez le lien de vos photos d'équipe"
              value={picture}
              onChange={this.onChangeNew}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description d&#39;Equipe</Label>
            <br />
            <Input
              type="textarea"
              name="description"
              placeholder="VOTRE MESSAGE"
              value={description}
              onChange={this.onChangeNew}
            />
          </FormGroup>
          <Button className="all-btn" onClick={this.postMember}>ENVOYER</Button>
        </Form>
      </Container>
    );
  }
}

export default AdminTeamNew;
