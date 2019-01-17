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

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: '',
      email2: '',
      email3: '',
      email4: '',
      isSuccess: false,
    };
    this.onChange = this.onChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendMail(e) {
    e.preventDefault();
    const {
      email1, email2, email3, email4, isSuccess,
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
    const { menuResto: { resto: { restoInfos } } } = this.props;
    const { chooseByUser: { tabs } } = this.props;
    const { sendOrder: { sendOrder: { tableCommand } } } = this.props;
    const { sendOrder } = this.props;
    const { getCode: { code } } = this.props;
    const { log: { user } } = this.props;
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
      <Container>
        <Row>
          <Col sm={8}>
            <RestoInfos />
            <GeneralInformations />
            <h2>Récapitulatif de votre commande</h2>
            <ul>
              {tabs.map((item) => {
                if (item.Plat !== undefined) {
                  return (
                    <li>{item.Plat}</li>
                  );
                } if (item.Dessert !== undefined) {
                  return (
                    <li>{item.Dessert}</li>
                  );
                } if (item.Boisson !== undefined) {
                  return (
                    <li>{item.Boisson}</li>
                  );
                }
                return (
                  <li>{item.Entrée}</li>
                );
              })
            }
            </ul>
            <p>{tableCommand.special !== undefined ? `Instructions spéciales : ${tableCommand.special}` : 'Instructions spéciales : rien à signaler'}</p>
            <p>{`Prix total de votre commande : ${sendOrder.total}  €`}</p>
          </Col>
          <Col sm={4}>
            <p>{`Merci ${user.name} !`}</p>
            <p>
              {`Ta commande a bien été prise en compte et transmise au restaurant ${restoInfos.name}`}
            </p>
            <p>Invite tes collègues à te rejoindre en utilisant le code de partage.</p>
            <p>{`Code de partage : ${code}`}</p>
            <h3>Entrez içi les Emails des personnes avec qui vous souhaitez déjeuner</h3>
            <Form onSubmit={this.sendMail}>
              <Input
                name="email1"
                value={email1}
                onChange={this.onChange}
                placeholder="email1"
                type="email"
              />
              <Input
                name="email2"
                value={email2}
                onChange={this.onChange}
                placeholder="email2"
                type="email"
              />
              <Input
                name="email3"
                value={email3}
                onChange={this.onChange}
                placeholder="email3"
                type="email"
              />
              <Input
                name="email4"
                value={email4}
                onChange={this.onChange}
                placeholder="email4"
                type="email"
              />
              <Button className="all-btn" type="submit">Envoyer</Button>
            </Form>
          </Col>
        </Row>

      </Container>
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

const mdtp = dispatch => bindActionCreators({ notifSuccess, notifError }, dispatch);


export default connect(mstp, mdtp)(OrderSummary);
