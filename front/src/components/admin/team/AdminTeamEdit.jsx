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

class AdminTeamEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: 'a',
      description: 'b',
      name: 'c',
      fonction: 'd',
    };
    this.onChangeEdit = this.onChangeEdit.bind(this);
    this.putMember = this.putMember.bind(this);
  }

  componentDidMount() {
    const { idEdit } = this.props;
    fetch(`${varServeur}admin/getmember/${idEdit}`)
      .then(response => response.json())
      .then((data) => {
        const {
          picture, name, description, fonction,
        } = data;
        this.setState({
          picture,
          description,
          name,
          fonction,
        });
      });
  }

  onChangeEdit(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  putMember() {
    const { idEdit } = this.props;
    fetch(`${varServeur}admin/putmember/${idEdit}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        }
      });
  }


  render() {
    const {
      picture, description, name, fonction,
    } = this.state;
    const { cancelEdit } = this.props;
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label>Nom</Label>
            <Input
              type="text"
              name="name"
              placeholder="Mettez le nom de la personne"
              value={name}
              onChange={this.onChangeEdit}
            />
          </FormGroup>
          <FormGroup>
            <Label>Fonction</Label>
            <Input
              type="text"
              name="fonction"
              placeholder="Mettez la fonction de la personne"
              value={fonction}
              onChange={this.onChangeEdit}
            />
          </FormGroup>
          <FormGroup>
            <Label>Photo d&#39;Equipe</Label>
            <Input
              type="url"
              name="picture"
              placeholder="Mettez le lien de vos photos d'équipe"
              value={picture}
              onChange={this.onChangeEdit}
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
              onChange={this.onChangeEdit}
            />
          </FormGroup>
          <Button className="all-btn" onClick={this.putMember}>VALIDER</Button>
          <Button className="all-btn" onClick={cancelEdit}>ANNULER</Button>
        </Form>
      </Container>
    );
  }
}

export default AdminTeamEdit;
