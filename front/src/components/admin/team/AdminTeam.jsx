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
    this.cancelEdit = this.cancelEdit.bind(this);
    this.toggle = this.toggle.bind(this);
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

  deleteMember = (id) => {
    fetch(`${varServeur}admin/team/delete/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) window.location.reload();
      });
  }

  getMember = (id) => {
    this.setState({
      memberEdit: true,
      currentIndex: id,
    });
  }

  cancelEdit() {
    this.setState({
      memberEdit: false,
    });
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const {
      team, currentIndex, memberEdit, modal,
    } = this.state;

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
                  <Row className="contenairbutton">
                    <button className="buttonicone" type="button" onClick={() => this.getMember(member.id)}><i className="fa fa-edit" /></button>
                    <button className="buttonicone" type="button" onClick={() => this.toggle()}><i className="fa fa-trash" /></button>
                  </Row>
                  <Modal isOpen={modal}>
                    <ModalBody>
                      {`Etes vous sûr de vouloir supprimer ${member.name} de l'équipe ?`}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={() => this.deleteMember(member.id)}>Confirmer</Button>
                      <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                    </ModalFooter>
                  </Modal>
                </CardBody>
              </Card>
            ))}
          </Row>
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
