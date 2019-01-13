import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
} from 'reactstrap';
import './Participate.scss';

class Participate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeParticipation: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  /*
    codeVerif = () => {
      fetch(`${varServeur}`, {
        method: 'GET',
        headers: {
        }
      })    console.log(this.state);
    }
    */

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
          </Row>
        </Container>
      </div>
    );
  }
}

export default Participate;
