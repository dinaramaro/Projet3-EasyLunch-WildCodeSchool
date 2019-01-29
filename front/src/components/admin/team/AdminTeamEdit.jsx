import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { varServeur } from '../../../constants';
import './AdminTeamEdit.scss';

class AdminTeamEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
      description: '',
      name: '',
      fonction: '',
    };
    this.onChangeEdit = this.onChangeEdit.bind(this);
    this.putMember = this.putMember.bind(this);
  }

  componentDidMount() {
    const { idEdit } = this.props;
    fetch(`${varServeur}admin/team/${idEdit}`)
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
    fetch(`${varServeur}admin/team/${idEdit}`, {
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
      <Container className="AdminTeamEdit">
        <Form className="form-edit-team">
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Mettez le nom de la personne"
              value={name}
              onChange={this.onChangeEdit}
              className="input-shadow"
            />
            <br />
            <Input
              type="text"
              name="fonction"
              placeholder="Mettez la fonction de la personne"
              value={fonction}
              onChange={this.onChangeEdit}
              className="input-shadow"
            />
            <br />
            <Input
              type="url"
              name="picture"
              placeholder="Mettez le lien de vos photos d'équipe"
              value={picture}
              onChange={this.onChangeEdit}
              className="input-shadow"
            />
            <br />
            <Input
              type="textarea"
              name="description"
              placeholder="VOTRE MESSAGE"
              value={description}
              onChange={this.onChangeEdit}
              className="input-shadow"
            />
          </FormGroup>
          <Button className="all-btn send-mate" onClick={this.putMember}>VALIDER</Button>
          <Button className="all-btn edit-mate" onClick={cancelEdit}>ANNULER</Button>
        </Form>
      </Container>
    );
  }
}

export default AdminTeamEdit;
