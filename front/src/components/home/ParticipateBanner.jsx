import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Form,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { varServeur } from '../../constants';
import { menuResto } from '../../actions/menuResto';
import { cardResto } from '../../actions/cardResto';
import { saveCodeParticipation } from '../../actions/saveCodeParticipation';
import { notifError, notifInfo } from '../../actions/notifications';
import { recupGeInfo } from '../../actions';
import './ParticipateBanner.scss';

class ParticipateBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeParticipation: '',
    };
    this.onChange = this.onChange.bind(this);
    this.getIdRestau = this.getIdRestau.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  getIdRestau = (e) => {
    e.preventDefault();
    const {
      menuResto, cardResto, history, saveCodeParticipation, notifError, notifInfo, recupGeInfo,
    } = this.props;
    const { codeParticipation } = this.state;
    fetch(`${varServeur}idrestaurant/${codeParticipation}`)
      .then((response) => {
        if (response.status === 403) {
          notifInfo('La table est déjà complète');
        }
        if (response.status === 401) {
          notifInfo('Code non valide, veuillez réessayer');
        }
        if (response.status === 500) {
          notifError('Erreur serveur, veuillez réessayer');
        }
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          saveCodeParticipation(codeParticipation);
          menuResto(`${varServeur}restaurant/menus/${data.restaurant_id}`);
          cardResto(`${varServeur}cards/${data.restaurant_id}`);
          recupGeInfo(data.nb_users, data.schedule);
          history.push('/commande-participation');
        }
      });
  }

  render() {
    const {
      codeParticipation,
    } = this.state;
    return (
      // <Container fluid className="ParticipateBanner">
      //   <Row className="participation-message">
      //     <Col sm="12" md={{ size: 6, offset: 3 }}> Entrez ici le code transmis par vos amis pour rejoindre la table réservée!</Col>

      //   </Row>
      //   <Row className="input-row">
      //     <Form onSubmit={this.getIdRestau} className="same-row">
      //       <Col>
      //         <Input
      //           type="text"
      //           name="codeParticipation"
      //           placeholder=" Code de participation"
      //           value={codeParticipation}
      //           onChange={this.onChange}
      //         />
      //       </Col>
      //       <Col>
      //         <Button type="submit" color="info"> Envoyer </Button>
      //       </Col>
      //     </Form>
      //   </Row>
      // </Container>

      <Container fluid className="ParticipateBanner">
        <Row className="input-row">
          <Col sm="6"> Entrez ici le code transmis par vos amis pour rejoindre la table réservée!</Col>
          <Form onSubmit={this.getIdRestau} className="same-row">
            <Col sm="6">
              <Input
                type="text"
                name="codeParticipation"
                placeholder=" Code de participation"
                value={codeParticipation}
                onChange={this.onChange}
              />
            </Col>
            <Col sm="1">
              <Button type="submit"> Envoyer </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }
}

function mdtp(dispatch) {
  return bindActionCreators({
    menuResto,
    cardResto,
    saveCodeParticipation,
    notifError,
    notifInfo,
    recupGeInfo,
  }, dispatch);
}

export default connect(null, mdtp)(withRouter(ParticipateBanner));
