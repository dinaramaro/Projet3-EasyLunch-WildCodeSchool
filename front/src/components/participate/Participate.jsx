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
import './Participate.scss';
import { varServeur } from '../../constants';
import { menuResto } from '../../actions/menuResto';
import { cardResto } from '../../actions/cardResto';
import { saveCodeParticipation } from '../../actions/saveCodeParticipation';

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
        menuResto, cardResto, history, saveCodeParticipation,
      } = this.props;
      const { codeParticipation } = this.state;
      fetch(`${varServeur}idrestaurant/${codeParticipation}`)
        .then(response => response.json())
        .then((data) => {
          saveCodeParticipation(codeParticipation);
          menuResto(`${varServeur}restaurant/menus/${data}`);
          cardResto(`${varServeur}cards/${data}`);
          history.push('/commande-participation');
        });
    }

    render() {
      const {
        codeParticipation,
      } = this.state;
      return (
        <div className="Participate">
          <div className="participation-message">
            Entrez ici le code transmis par vos amis pour rejoindre la table réservée!
          </div>
          <Container fluid className="input-container">
            <Row className="input-row">
              <Form onSubmit={this.getIdRestau}>
                <Col>
                  <Input
                    type="text"
                    name="codeParticipation"
                    placeholder=" Code de participation"
                    value={codeParticipation}
                    onChange={this.onChange}
                  />
                </Col>
                <Col>
                  <Button type="submit" color="info"> Envoyer </Button>
                </Col>
              </Form>
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
  }, dispatch);
}

export default connect(null, mdtp)(withRouter(Participate));
