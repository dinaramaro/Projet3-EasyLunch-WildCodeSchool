import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Nav, NavItem, NavLink, Card, Col, Row, TabPane,
  TabContent, Form, FormGroup, Input, Button,
} from 'reactstrap';
import classnames from 'classnames';
import StripeCheckout from 'react-stripe-checkout';
import { varServeur, publicStripeKey } from '../../constants';
import { cardResto } from '../../actions/cardResto';
import ChooseOnCards from './ChooseOnCards';
import MyMeal from './MyMeal';
import DisplayMenus from '../../components/result/DisplayMenus';
import DisplaySubTitleMenu from '../../components/result/DisplaySubTitleMenu';
import { handleChangeSpecial, getUserId } from '../../actions';
import { sendCommand } from '../../actions/sendCommand';
import { stripePayment } from '../../actions/stripePayment';
import { notifSuccess, notifError, notifInfo } from '../../actions/notifications';

class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
    this.redirectConnect = this.redirectConnect.bind(this);
    this.onToken = this.onToken.bind(this);
  }

  componentDidMount() {
    const {
      menuResto: { resto: { restoInfos } },
      cardResto, log: { user },
      getUserId,
    } = this.props;
    if (!_.isEmpty(restoInfos)) {
      cardResto(`${varServeur}cards/${restoInfos.id}`);
    }
    getUserId(user.id);
  }

  componentDidUpdate(prevProps) {
    const { getCode, history } = this.props;
    if (prevProps.getCode.code === '' && getCode.code) {
      history.push('/recapitulatif-commande');
    }
  }

  onToken = (token) => {
    const {
      stripePayment, sendOrder: { sendOrder }, chooseByUser: { total },
    } = this.props;
    const amount = Math.round(total * 100);
    stripePayment(`${varServeur}pay/${amount}`, token, sendOrder);
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  redirectConnect() {
    const { history, location: { pathname } } = this.props;
    history.push({
      pathname: '/connexion',
      state: { from: { pathname } },
    });
  }

  render() {
    const { activeTab } = this.state;
    const {
      menus,
      cards,
      error,
      handleChangeSpecial,
      log: { user },
      loadingResto,
    } = this.props;
    let { chooseByUser: { total } } = this.props;
    if (total % 1 !== 0) {
      total = `${total}0`;
    }
    const totalSend = total * 100 / 100;

    let listEnt = [];
    let listMain = [];
    let listDessert = [];
    let listDrink = [];
    let listDayEnt = [];
    let listDayMain = [];
    let listDayDessert = [];
    let listForm = [];
    let listMOD = [];

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

    if (error) {
      return <div>{`Error!'} ${error.message}`}</div>;
    }

    if (loadingResto) {
      return (
        <div className="text-center">
          <img src="/medias/eatstreet-loading.gif" alt="loading" />
          <h2>Récupération des menus...</h2>
        </div>
      );
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
                  {'Formules'}
                </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listMOD.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                  {'Menu du jour'}
                </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listEnt.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                  {'Entrées'}
                </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listMain.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                  {'Plats'}
                </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listDessert.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
                  {'Desserts'}
                </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listDrink.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { this.toggle('6'); }}>
                  {'Boissons'}
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
                            <ChooseOnCards text="Entrée du jour" meals={listDayEnt} />
                          </FormGroup>
                          <FormGroup>
                            <ChooseOnCards text="Plat du jour" meals={listDayMain} />
                          </FormGroup>
                          <FormGroup>
                            <ChooseOnCards text="Dessert du jour" meals={listDayDessert} />
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
                      <ChooseOnCards text="Entrée" meals={listEnt} />
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
                      <ChooseOnCards text="Plat" meals={listMain} />
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
                      <ChooseOnCards text="Dessert" meals={listDessert} />
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
                      <ChooseOnCards text="Boisson" meals={listDrink} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <MyMeal />
          <FormGroup>
            <p>Instructions spéciales</p>
            <Input type="textarea" name="special" onChange={e => handleChangeSpecial(e.target.name, e.target.value)} />
          </FormGroup>
          <Row>
            <Col sm={2}>
              {'Total :'}
            </Col>
            <Col sm={4}>
              {`${total} €`}
            </Col>
            <Col sm={6}>
              {
                (!_.isEmpty(user))
                  ? (
                    <StripeCheckout
                      token={this.onToken}
                      stripeKey={publicStripeKey}
                      amount={Math.round(totalSend * 100)}
                      currency="EUR"
                    >
                      <Button type="button">
                        Payer
                      </Button>
                    </StripeCheckout>
                  )
                  : <Button onClick={this.redirectConnect}>Se connecter avant de payer</Button>
              }
            </Col>
          </Row>
        </Form>
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
    getCode: state.getCode,
    log: state.log,
    loadingResto: state.cardResto.loading,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    cardResto,
    handleChangeSpecial,
    sendCommand,
    getUserId,
    notifSuccess,
    notifError,
    notifInfo,
    stripePayment,
  },
  dispatch);
}


export default withRouter(connect(mstp, mdtp)(OrderMenu));
