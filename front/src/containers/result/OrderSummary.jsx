import React, { Component } from 'react';
import {
  Container, Row, Col, Button, Input, Form,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { notifSuccess, notifError } from '../../actions/notifications';
import GeneralInformations from './GeneralInformations';
import RestoInfos from './RestoInfos';
import { varServeur } from '../../constants';
import { initState } from '../../actions';
import './OrderSummary.scss';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: '',
      email2: '',
      email3: '',
      email4: '',
    };
    this.onChange = this.onChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  componentWillUnmount() {
    const { initState } = this.props;
    initState();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendMail(e) {
    e.preventDefault();
    const {
      email1, email2, email3, email4,
    } = this.state;
    const {
      notifError, notifSuccess, hour, log: { user: { name } },
      getCode: { code }, menuResto: { resto: { restoInfos } },
    } = this.props;
    let shareEmails = [];
    if (email1 === '' && email2 === '' && email3 === '' && email4 === '') {
      notifError('Veuillez renseigner au moins un email');
    } else {
      if (email1 !== '') {
        shareEmails = [
          ...shareEmails,
          email1,
        ];
      }
      if (email2 !== '') {
        shareEmails = [
          ...shareEmails,
          email2,
        ];
      }
      if (email3 !== '') {
        shareEmails = [
          ...shareEmails,
          email3,
        ];
      }
      if (email4 !== '') {
        shareEmails = [
          ...shareEmails,
          email4,
        ];
      }

      const infosMail = {
        masterName: name,
        shareCode: code,
        restoName: restoInfos.name,
        restoAddress: restoInfos.address,
        hour,
      };
      let bullshit = 0;
      for (let i = 0; i < shareEmails.length; i += 1) {
        const sendMail = {
          ...infosMail,
          targetMail: shareEmails[i],
        };
        bullshit += 1;
        fetch(`${varServeur}sendcodemail`, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(sendMail),
        });
      }
      if (bullshit === shareEmails.length) {
        notifSuccess('Mail envoyé');
      } else {
        notifError('Erreur');
      }
    }
  }


  render() {
    const {
      menuResto: { resto: { restoInfos } },
      chooseByUser: { tabs },
      sendOrder: { sendOrder: { tableCommand } },
      sendOrder,
      getCode: { code },
      log: { user },
    } = this.props;
    const {
      email1, email2, email3, email4,
    } = this.state;

    if (tabs.length === 0) {
      return (
        <div>
          <Link to="/"><Button>VEUILLEZ CHOISIR VOTRE MENU</Button></Link>
        </div>
      );
    }
    return (
      <div>
        <h1 className="title">{`Merci ${user.name}`}</h1>
        <Container fluid className="OrderSummary">
          <Row>
            <Col className="space-card" sm={12} md={6} lg={3}>
              <RestoInfos />
              <GeneralInformations />
            </Col>
            <Col className="mail-summary" sm={12} md={12} lg={{ offset: 1, size: 4 }}>
              <p>
                {`Ta commande a bien été prise en compte et transmise au restaurant ${restoInfos.name}`}
              </p>
              <p>Invite tes collègues à te rejoindre en utilisant le code de partage.</p>
              <h1 className="code-partage">LunchCode: <br /> <strong>{code}</strong></h1>
              <h3>Entrez ici les emails des personnes avec qui vous souhaitez déjeuner</h3>
              <Form onSubmit={this.sendMail}>
                <Input
                  className="mail-input input-shadow"
                  name="email1"
                  value={email1}
                  onChange={this.onChange}
                  placeholder="email1"
                  type="email"
                />
                <Input
                  className="mail-input input-shadow"
                  name="email2"
                  value={email2}
                  onChange={this.onChange}
                  placeholder="email2"
                  type="email"
                />
                <Input
                  className="mail-input input-shadow"
                  name="email3"
                  value={email3}
                  onChange={this.onChange}
                  placeholder="email3"
                  type="email"
                />
                <Input
                  className="mail-input input-shadow"
                  name="email4"
                  value={email4}
                  onChange={this.onChange}
                  placeholder="email4"
                  type="email"
                />
                <Button className="all-btn" type="submit">Envoyer</Button>
              </Form>
            </Col>
            <Col className="recap-command" sm={12} md={12} lg={{ offset: 1, size: 3 }}>
              <h2 className="title-card">Récapitulatif de votre commande</h2>
              <ul>
                {tabs.map((item) => {
                  if (item.Plat !== undefined) {
                    return (
                      <li key={item.idmenu}>{item.Plat}</li>
                    );
                  } if (item.Dessert !== undefined) {
                    return (
                      <li key={item.idmenu}>{item.Dessert}</li>
                    );
                  } if (item.Boisson !== undefined) {
                    return (
                      <li key={item.idmenu}>{item.Boisson}</li>
                    );
                  }
                  return (
                    <li key={item.idmenu}>{item[item.text]}</li>
                  );
                })
                }
              </ul>
              <p>{tableCommand.special !== undefined ? `Instructions spéciales : ${tableCommand.special}` : ''}</p>
              <p>{`Prix de votre Commande ${sendOrder.total}  €`}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mstp(state) {
  return {
    menuResto: state.menuResto,
    sendOrder: state.sendOrder,
    chooseByUser: state.chooseByUser,
    getCode: state.getCode,
    log: state.log,
    hour: state.formOrder.formulaire.schedule,
  };
}

const mdtp = dispatch => bindActionCreators({ notifSuccess, notifError, initState }, dispatch);


export default connect(mstp, mdtp)(OrderSummary);
