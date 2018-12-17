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
    };
    this.getMember = this.getMember.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
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

  render() {
    const { team, currentIndex, memberEdit } = this.state;
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
                    <button className="buttonicone" type="button" onClick={() => this.deleteMember(member.id)}><i className="fa fa-trash" /></button>
                  </Row>
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
