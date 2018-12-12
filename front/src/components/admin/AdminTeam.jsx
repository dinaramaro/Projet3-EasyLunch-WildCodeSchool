import React, { Component } from 'react';
import './AdminTeam.scss';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { varServeur } from '../../constants';

class AdminTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/team`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          team: data,
        });
      });
  }

  render() {
    const { team } = this.state;
    return (
      <div className="AdminTeam">
        <h2 className="title">Donnée De L&#39;Equipe</h2>
        <Container>
          {team.map(partie => (
            <Form>
              <FormGroup>
                <p>{partie.picture_team}</p>
                <Label for="teamPicture">Photo d&#39;Equipe</Label>
                <Input
                  type="url"
                  name="url"
                  id="teamPicture"
                  placeholder="Mettez le lien de vos photos d'équipe"
                />
              </FormGroup>
              <FormGroup>
                <p>{partie.description_team}</p>
                <Label>Description d&#39;Equipe</Label>
                <br />
                <Input
                  type="textarea"
                  name="text"
                  placeholder="VOTRE MESSAGE"
                />
              </FormGroup>
              <Button>ENVOYER</Button>
            </Form>
          ))}
        </Container>
      </div>
    );
  }
}

export default AdminTeam;
