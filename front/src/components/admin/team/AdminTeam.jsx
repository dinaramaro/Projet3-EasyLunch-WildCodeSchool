import React, { Component } from 'react';
import './AdminTeam.scss';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import AdminTeamEdit from './AdminTeamEdit';
import { varServeur } from '../../../constants';
import AdminTeamNew from './AdminTeamNew';
import AdminMenu from '../AdminMenu';

class AdminTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      memberEdit: false,
      currentIndex: 0,
      modal: false,
    };
    this.getMember = this.getMember.bind(this);
    this.toggle = this.toggle.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/team/`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          team: data,
        });
      });
  }

  getMember(id) {
    this.setState({
      memberEdit: true,
      currentIndex: id,
    });
  }

  deleteMember = (id) => {
    fetch(`${varServeur}admin/team/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        }
      });
  }

  cancelEdit() {
    this.setState({
      memberEdit: false,
    });
  }

  toggle(id) {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      currentIndex: id,
    });
  }

  render() {
    const {
      team, currentIndex, memberEdit, modal,
    } = this.state;
    const currentName = team
      .filter(mate => mate.id === currentIndex)
      .map(mate => mate.name);

    return (
      <div className="AdminTeam">
        <AdminMenu />
        <h2 className="title">Donnée De L&#39;Equipe</h2>
        <Container>
          <Row>
            {team.map(member => (
              <Card key={member.id}>
                <CardImg top src={member.picture} alt="Card image" />
                <CardBody>
                  <CardTitle>{member.name}</CardTitle>
                  <CardSubtitle>{member.fonction}</CardSubtitle>
                  <button className="button-trash" type="button" onClick={() => this.getMember(member.id)}><i className="fa fa-edit" /></button>
                  <button type="button" onClick={() => this.toggle(member.id)}><i className="fa fa-trash" /></button>
                </CardBody>
              </Card>
            ))}
          </Row>
          <Modal isOpen={modal}>
            <ModalBody>
              {`Etes vous sûr de vouloir supprimer ${currentName} de l'équipe ?`}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.deleteMember(currentIndex)}>Confirmer</Button>
              <Button color="secondary" onClick={this.toggle}>Annuler</Button>
            </ModalFooter>
          </Modal>
          {
            memberEdit ? <AdminTeamEdit cancelEdit={this.cancelEdit} idEdit={currentIndex} /> : (
              <AdminTeamNew />
            )}
        </Container>
      </div>
    );
  }
}

export default AdminTeam;
