import React, { Component } from 'react';
import {
  Container, Collapse, Row, Col,
} from 'reactstrap';
import './Explication.css';
import Media from './Media';

class Explication extends Component {
  constructor(props) {
    super(props);
    this.toggleChoose = this.toggleChoose.bind(this);
    this.toggleEnjoy = this.toggleEnjoy.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
    this.state = { collapseChoose: false, collapseEnjoy: false, collapseShare: false };
  }

  toggleChoose() {
    this.setState({ collapseChoose: !this.newMethod().collapseChoose });
  }

  newMethod() {
    return this.state;
  }

  toggleEnjoy() {
    this.setState({ collapseEnjoy: !this.newMethod1().collapseEnjoy });
  }

  newMethod1() {
    return this.state;
  }

  toggleShare() {
    this.setState({ collapseShare: !this.newMethod2().collapseShare });
  }

  newMethod2() {
    return this.state;
  }

  render() {
    const { collapseChoose, collapseEnjoy, collapseShare } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col className="video" sm="4">
            <Media />
          </Col>
          <Col xs="12" sm="8">
            <Row>
              <Col sm="12">
                <p className="para1">
                    Utilisation en
                  {' '}
                  <span className="para2">3 étapes</span>
                </p>

              </Col>
            </Row>
            <Row>
              <Col className="col" xs="4" sm="4">
                <div className="round">1</div>
                <button type="button" className="bouton" data-toggle="collapse" data-target="#choose" onClick={this.toggleChoose}>
                  <img className="icone" src="./medias/icon-time.svg" alt="Commandez avant 11h30" />
                  <p className="title">COMMANDEZ AVANT 11H30</p>
                  <img className="arrow" src="./medias/arrow-down.png" alt="fleche" />
                </button>
                <Collapse id="choose" isOpen={collapseChoose}>
                  <p className="paraDetails">Choisissez parmi nos restaurants partenaires. Effectuez votre commande en ligne et payez en toute sécurité.</p>
                </Collapse>
              </Col>
              <Col className="col" xs="4" sm="4">
                <div className="round">2</div>
                <button type="button" className="bouton" data-toggle="collapse" data-target="#enjoy" onClick={this.toggleEnjoy}>
                  <img className="icone" src="./medias/icon-smiley.svg" alt="Profitez de votre pause" />
                  <p className="title">PROFITEZ DE VOTRE PAUSE</p>
                  <img className="arrow" src="./medias/arrow-down.png" alt="fleche" />
                </button>
                <Collapse id="enjoy" isOpen={collapseEnjoy}>
                  <p className="paraDetails">Easy Lunch transmet votre commande au restaurant. Détendez-vous et passez un bon moment ensemble.</p>
                </Collapse>
              </Col>
              <Col className="col" xs="4" sm="4">
                <div className="round">3</div>
                <button type="button" className="bouton" data-toggle="collapse" data-target="#share" onClick={this.toggleShare}>
                  <img className="icone" src="./medias/icon-credit-card.svg" alt="Partez sans payer" />
                  <p className="title">PARTEZ SANS PAYER</p>
                  <img className="arrow" src="./medias/arrow-down.png" alt="fleche" />
                </button>
                <Collapse id="share" isOpen={collapseShare}>
                  <p className="paraDetails">Vous avez fini ? Vous avez déjà réglé et pouvez partir quand vous le souhaitez. Encore du temps gagné.</p>
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Explication;
