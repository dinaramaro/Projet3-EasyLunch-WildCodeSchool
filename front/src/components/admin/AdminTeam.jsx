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
  Row,
} from 'reactstrap';
import AdminTeamEdit from './AdminTeamEdit';
import { varServeur } from '../../constants';

class AdminTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      memberEdit: false,
      currentIndex: 0,
    };
    this.getMember = this.getMember.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/getmembers`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          team: data,
        });
      });
  }

  deleteMember = (id) => {
    fetch(`${varServeur}admin/deletemember/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) window.location.reload();
      });
  }

  getMember = (id) => {
    const { memberEdit } = this.state;
    this.setState({
      memberEdit: !memberEdit,
      currentIndex: id,
    });
  }

  render() {
    const { team, currentIndex, memberEdit } = this.state;
    console.log(currentIndex);
    return (
      <div className="AdminTeam">
        <h2 className="title">Donnée De L&#39;Equipe</h2>
        <Container>
          <Row>
            {team.map(member => (
              <Card key={member.id}>
                <CardImg top src={member.picture} alt="Card image" />
                <CardBody>
                  <CardTitle>{member.name}</CardTitle>
                  <CardSubtitle>{member.fonction}</CardSubtitle>
                  <Button onClick={() => this.getMember(member.id)} color="warning" className="all-btn">Modifier</Button>
                  <Button onClick={() => this.deleteMember(member.id)} color="warning" className="all-btn">Supprimer</Button>
                </CardBody>
              </Card>
            ))}
          </Row>
          {
            memberEdit ? <AdminTeamEdit idEdit={currentIndex} /> : (
              <Form>
                <FormGroup>
                  <Label for="teamName">Nom</Label>
                  <Input
                    type="text"
                    name="text"
                    id="teamName"
                    placeholder="Mettez le nom de la personne"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="teamFonction">Fonction</Label>
                  <Input
                    type="text"
                    name="text"
                    id="teamFonction"
                    placeholder="Mettez la fonction de la personne"
                  />
                </FormGroup>
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
                  />
                </FormGroup>
                <Button>ENVOYER</Button>
              </Form>
            )}
        </Container>
      </div>
    );
  }
}

export default AdminTeam;
