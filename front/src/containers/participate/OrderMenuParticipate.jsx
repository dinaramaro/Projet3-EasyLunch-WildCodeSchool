import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Nav, NavItem, NavLink, Card, Col, Row,
  TabPane, TabContent, Form, FormGroup, Input, Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import classnames from 'classnames';
import { varServeur } from '../../constants';
import { cardResto } from '../../actions/cardResto';
import ChooseOnCardsParticipate from './ChooseOnCardsParticipate';
import MyMealParticipate from './MyMealParticipate';
import DisplayMenus from '../../components/result/DisplayMenus';
import DisplaySubTitleMenu from '../../components/result/DisplaySubTitleMenu';
import { handleChangeSpecial } from '../../actions';
import { notifError } from '../../actions/notifications';


class OrderMenuParticipate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { menuResto: { resto: { restoInfos } }, cardResto } = this.props;
    if (!_.isEmpty(restoInfos)) {
      cardResto(`${varServeur}cards/${restoInfos.id}`);
    }
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }


  toggleModal() {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  handleClickPay() {
    const { codeParticip, notifError, sendOrder: { sendOrder } } = this.props;
    if (!_.isEmpty(sendOrder)) {
      fetch(`${varServeur}participe/${codeParticip}`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(sendOrder),
      })
        .then((res) => {
          if (res.status === 500) {
            notifError('Erreur serveur');
          } if (res.status === 200) {
            this.toggleModal();
          }
        });
    }
  }

  render() {
    const { activeTab, modal } = this.state;
    const {
      menus,
      cards,
      error,
      loading,
      chooseByUser: {
        total,
      },
      handleChangeSpecial,
      log: { user },
      menuResto: { resto: { restoInfos } },
    } = this.props;

    let listEnt = [];
    let listMain = [];
    let listDessert = [];
    let listDrink = [];
    let listDayEnt = [];
    let listDayMain = [];
    let listDayDessert = [];
    let listForm = [];
    let listMOD = [];
    let userName = '';
    let restoName = '';

    if (menus !== undefined) {
      listMOD = menus.filter(item => item.mod === 1);
      listForm = menus.filter(item => item.mod === 0);
    }

    if (cards !== undefined) {
      listEnt = cards.filter(item => item.plat === 0);
      listMain = cards.filter(item => item.plat === 1);
      listDessert = cards.filter(item => item.plat === 2);
      listDrink = cards.filter(item => item.plat === 3);
      listDayEnt = cards.filter(item => item.plat === 4);
      listDayMain = cards.filter(item => item.plat === 5);
      listDayDessert = cards.filter(item => item.plat === 6);
    }

    if (user !== undefined) {
      userName = user.name;
    }

    if (restoInfos !== undefined) {
      restoName = restoInfos.name;
    }

    if (error) {
      return <div>{`Error!'} ${error.message}`}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="OrderMenu">
        <p>Commande (2/2)</p>
        <p>Faites votre choix</p>
        <p>(uniquement pour vous)</p>
        <Nav tabs>
          <NavItem>
            {
              listForm.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                { 'Formules' }
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listMOD.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                { 'Menu du jour' }
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listEnt.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                { 'Entrées' }
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listMain.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                { 'Plats' }
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listDessert.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
                { 'Desserts' }
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listDrink.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { this.toggle('6'); }}>
                { 'Boissons' }
              </NavLink>
              )}
          </NavItem>
        </Nav>
        <Form>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col>
                  <Card body>
                    <DisplayMenus list={listForm} />
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <Card body>
                    {
                      listMOD.length > 0 && (
                        <p>{listMOD[0].menu_name}</p>
                      )
                    }
                    <DisplaySubTitleMenu list={listMOD} />
                    {
                      listMOD.length > 0 && (
                        <div>
                          <FormGroup>
                            <ChooseOnCardsParticipate text="Entrée du jour" meals={listDayEnt} />
                          </FormGroup>
                          <FormGroup>
                            <ChooseOnCardsParticipate text="Plat du jour" meals={listDayMain} />
                          </FormGroup>
                          <FormGroup>
                            <ChooseOnCardsParticipate text="Dessert du jour" meals={listDayDessert} />
                          </FormGroup>
                        </div>
                      )
                    }
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col>
                  <Card body>
                    <FormGroup>
                      <ChooseOnCardsParticipate text="Entrée" meals={listEnt} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col>
                  <Card body>
                    <FormGroup>
                      <ChooseOnCardsParticipate text="Plat" meals={listMain} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5">
              <Row>
                <Col>
                  <Card body>
                    <FormGroup>
                      <ChooseOnCardsParticipate text="Dessert" meals={listDessert} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="6">
              <Row>
                <Col>
                  <Card body>
                    <FormGroup>
                      <ChooseOnCardsParticipate text="Boisson" meals={listDrink} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <MyMealParticipate />
          <FormGroup>
            <p>Instructions spéciales</p>
            <Input type="textarea" name="special" onChange={e => handleChangeSpecial(e.target.name, e.target.value)} />
          </FormGroup>
          <Row>
            <Col sm={2}>
              { 'Total :' }
            </Col>
            <Col sm={4}>
              {`${total} €`}
            </Col>
            <Col sm={6}>
              <Button type="button" onClick={() => this.handleClickPay()}>Payer</Button>
            </Col>
          </Row>
        </Form>
        <Modal isOpen={modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>{`Merci ${userName} !`}</ModalHeader>
          <ModalBody>
            {`Ta commande a bien été prise en compte et transmise au restaurant ${restoName}.`}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Partager le code et le lien</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mstp(state) {
  return {
    menuResto: state.menuResto,
    menus: state.cardResto.menus,
    cards: state.cardResto.cards,
    error: state.cardResto.error,
    loading: state.cardResto.loading,
    chooseByUser: state.chooseByUser,
    sendOrder: state.sendOrder,
    log: state.log,
    codeParticip: state.codeParticip,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    cardResto,
    handleChangeSpecial,
    notifError,
  },
  dispatch);
}


export default connect(mstp, mdtp)(OrderMenuParticipate);
