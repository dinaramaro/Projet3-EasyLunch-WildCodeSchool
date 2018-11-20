import React, { Component } from 'react';
import { Container, Collapse, Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';
import './Explication.css';
import Media from './Media';

class Explication extends Component {
    constructor(props) {
        super(props);
        this.toggleChoisir = this.toggleChoisir.bind(this);
        this.toggleProfiter = this.toggleProfiter.bind(this);
        this.togglePartager = this.togglePartager.bind(this);
        this.state = { collapseChoisir: false, collapseReserver: false, collapsePartager: false};
      }
    toggleChoisir() {
    this.setState({ collapseChoisir: !this.state.collapseChoisir });
    }
    toggleProfiter() {
        this.setState({ collapseProfiter: !this.state.collapseProfiter });
        }
    togglePartager() {
        this.setState({ collapsePartager: !this.state.collapsePartager });
        }    
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col className="video" sm="4">
                        <Media />
                    </Col>
                    <Col xs="12" sm="8">
                        <Row>
                            <Col sm="12">
                                <p className="para1">Utilisation en <span className="para2">3 étapes</span></p>
                                                           
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col" xs="4" sm="4">
                                <div className="rond">1</div>
                                <button className="bouton" data-toggle="collapse" data-target="#choisir" onClick={this.toggleChoisir} >
            
                                    <img className="icone" src="./medias/icon-time.svg" alt="Commandez avant 11h30" />
                                    <p className="titre">COMMANDEZ AVANT 11H30</p>
                                    <img className="fleche" src="./medias/arrow-down.png" alt="fleche" />                       
                                </button>                 
                                <Collapse id="choisir" isOpen={this.state.collapseChoisir}>
                                    
                                    <p className="paraDetails">Choisissez parmi nos restaurants partenaires. Effectuez votre commande en ligne et payez en toute sécurité.</p>
                                    
                                </Collapse>
                            </Col>
                            <Col className="col" xs="4" sm="4">
                                <div className="rond">2</div>
                                <button className="bouton" data-toggle="collapse" data-target="#profiter" onClick={this.toggleProfiter} >
            
                                    <img className="icone" src="./medias/icon-smiley.svg" alt="Profitez de votre pause" />
                                    <p className="titre">PROFITEZ DE VOTRE PAUSE</p>
                                    <img className="fleche" src="./medias/arrow-down.png" alt="fleche" />                       
                                </button>                 
                                <Collapse id="profiter" isOpen={this.state.collapseProfiter}>
                                    
                                    <p className="paraDetails">Easy Lunch transmet votre commande au restaurant. Détendez-vous et passez un bon moment ensemble.</p>
                                    
                                </Collapse>
                            </Col>
                            <Col className="col" xs="4" sm="4">
                                <div className="rond">3</div>
                                <button className="bouton" data-toggle="collapse" data-target="#partager" onClick={this.togglePartager} >
                                
                                    <img className="icone" src="./medias/icon-credit-card.svg" alt="Partez sans payer" />
                                    <p className="titre">PARTEZ SANS PAYER</p>
                                    <img className="fleche" src="./medias/arrow-down.png" alt="fleche" />   
                                </button>
                                <Collapse id="partager" isOpen={this.state.collapsePartager}>

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
