import React, { Component } from 'react';
import './AdminTeam.scss';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { varServeur } from '../../constants';

class AdminTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
    };
    this.changeteam = this.changeteam.bind(this);
    this.updateteam = this.updateteam.bind(this);
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

  changeCGV = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateteam = () => {
    const { team } = this.state;
    fetch(`${varServeur}admin/updateteam`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ team }),
    }).then((response) => {
      if (response.ok) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }

  deleteTeam = (id) => {
    fetch(`${varServeur}admin/deletepartners/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) window.location.reload();
      });
  }

  render() {
    const { team } = this.state;
    return (
      <div className="AdminTeam">
        <h2 className="title">Donnée De L&#39;Equipe</h2>
        <Container>
          {team.map(partie => (
            <Card key={partie.id}>
              <CardImg top src={partie.picture_team} alt="Card image" />
              <CardBody>
                <CardTitle>{partie.name_team}</CardTitle>
                <CardSubtitle>{partie.fonction_team}</CardSubtitle>
                <Button onClick={this.changeCGV} color="warning" className="all-btn">Modifier</Button>
                <Button submit="submit" onClick={() => this.deleteTeam} color="warning" className="all-btn">Supprimer</Button>
              </CardBody>
            </Card>
          ))}
          <Form>
            <FormGroup>
              <Label for="teamPicture">Photo d&#39;Equipe</Label>
              <Input
                type="url"
                name="url"
                id="teamPicture"
                placeholder="Mettez le lien de vos photos d'équipe"
              />
            </FormGroup>
            <FormGroup>
              <Label>Description d&#39;Equipe</Label>
              <br />
              <Input
                type="textarea"
                name="text"
                placeholder="VOTRE MESSAGE"
                onChange={this.changeCGV}
              />
            </FormGroup>
            <Button>ENVOYER</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AdminTeam;
