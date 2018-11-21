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
                  <img className="icone" src="./medias/icon-eat.svg" alt="Commandez avant 11h30" />
                  <p className="title">Choisissez votre restaurant</p>
                  <img className="arrow" src="./medias/arrow-down.png" alt="fleche" />
                </button>
                <Collapse id="choose" isOpen={collapseChoose}>
                  <p className="paraDetails">Trouvez un restaurant en fonction de vos critères de recherche.</p>
                </Collapse>
              </Col>
              <Col className="col" xs="4" sm="4">
                <div className="round">2</div>
                <button type="button" className="bouton" data-toggle="collapse" data-target="#enjoy" onClick={this.toggleEnjoy}>
                  <img className="icone" src="./medias/icon-time.svg" alt="Profitez de votre pause" />
                  <p className="title">Commandez et payer avant 11h30</p>
                  <img className="arrow" src="./medias/arrow-down.png" alt="fleche" />
                </button>
                <Collapse id="enjoy" isOpen={collapseEnjoy}>
                  <p className="paraDetails">Choisissez parmi les formules du jour et la carte, effectuez votre commande en ligne et payez en toute sécurité.</p>
                </Collapse>
              </Col>
              <Col className="col" xs="4" sm="4">
                <div className="round">3</div>
                <button type="button" className="bouton" data-toggle="collapse" data-target="#share" onClick={this.toggleShare}>
                  <img className="icone" src="./medias/icon-smiley.svg" alt="Partez sans payer" />
                  <p className="title">Soyez servis dès votre arrivée</p>
                  <img className="arrow" src="./medias/arrow-down.png" alt="fleche" />
                </button>
                <Collapse id="share" isOpen={collapseShare}>
                  <p className="paraDetails">Rendez-vous au restaurant, votre table est prête, profitez de votre déjeuner et des personnes qui vous accompagnent et partez sans passer par la caisse dès que vous avez fini.</p>
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
