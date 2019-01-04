import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { varServeur } from '../../../constants';
import './AdminTeamNew.scss';


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
    fetch(`${varServeur}admin/team/`, {
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
      <Container className="AdminTeamNew">
        <h2 className="title-team">Ajouter un membre</h2>
        <br />
        <Form className="form-team">
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Nom"
              value={name}
              onChange={this.onChangeNew}
            />
            <br />
            <Input
              type="text"
              name="fonction"
              placeholder="Fonction / poste"
              value={fonction}
              onChange={this.onChangeNew}
            />
            <br />
            <Input
              type="url"
              name="picture"
              placeholder="url photo"
              value={picture}
              onChange={this.onChangeNew}
            />
            <br />
            <Input
              type="textarea"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.onChangeNew}
            />
          </FormGroup>
          <Button className="all-btn send-mate" onClick={this.postMember}>ENVOYER</Button>
        </Form>
      </Container>
    );
  }
}

export default AdminTeamNew;
