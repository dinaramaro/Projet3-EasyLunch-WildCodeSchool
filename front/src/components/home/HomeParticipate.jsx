import React, { Component } from 'react';
import {
  Container,
  Row,
  Input,
  Button,
  Form,
  Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import './HomeParticipate.scss';
import { varServeur } from '../../constants';
import { menuResto } from '../../actions/menuResto';
import { cardResto } from '../../actions/cardResto';
import { saveCodeParticipation } from '../../actions/saveCodeParticipation';
import { notifError, notifInfo } from '../../actions/notifications';
import { recupGeInfo } from '../../actions';

class Participate extends Component {
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
        <div className="HomeParticipe">
          <Container fluid>
            <Row className="backgroundCard">
              <div className="titlePart"> Entrez ici votre LunchCode</div>
              <Form onSubmit={this.getIdRestau} className="inputCard">
                <Col>
                  <Input
                    type="text"
                    name="codeParticipation"
                    placeholder=" LunchCode"
                    value={codeParticipation}
                    onChange={this.onChange}
                  />
                </Col>
              </Form>
              <Col className="inputCard">
                <Button type="submit" className="all-btn"> Je participe </Button>
              </Col>
            </Row>
          </Container>
        </div>
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

export default connect(null, mdtp)(withRouter(Participate));
