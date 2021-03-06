import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Nav, NavItem, NavLink, Card, Col, Row, TabPane,
  TabContent, Form, FormGroup, Input,
} from 'reactstrap';
import classnames from 'classnames';
import { varServeur } from '../../constants';
import { cardResto } from '../../actions/cardResto';
import ChooseOnCards from '../result/ChooseOnCards';
import DisplayMenus from '../../components/result/DisplayMenus';
import DisplaySubTitleMenu from '../../components/result/DisplaySubTitleMenu';
import { handleChangeSpecial, getUserId, setActiveTab } from '../../actions';
import './OrderMenuParticipage.scss';

class OrderMenuParticipage extends Component {
  componentDidMount() {
    const {
      restoInfos,
      log: { user },
      getUserId,
    } = this.props;
    if (!_.isEmpty(restoInfos)) {
      cardResto(`${varServeur}cards/${restoInfos.id}`);
    }
    getUserId(user.id);
    this.displayActiveTab();
  }

  componentDidUpdate() {
    this.displayActiveTab();
  }


  displayTab = (activeTab) => {
    const { setActiveTab } = this.props;
    setActiveTab(activeTab);
  }

  toggle = (tab) => {
    const { setActiveTab, activeTab } = this.props;
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  displayActiveTab() {
    const {
      menus,
      cards,
      location: { state },
      activeTab,
    } = this.props;
    const previousTab = state && state.activeTab;


    if (activeTab === '0') {
      if (previousTab) {
        this.displayTab(previousTab);
      } else if (menus || cards) {
        let listEnt = [];
        let listMain = [];
        let listDessert = [];
        let listDrink = [];
        let listForm = [];
        let listMOD = [];
        let tempActiveTab = '';

        if (menus) {
          listMOD = menus.filter(item => item.mod === 1);
          listForm = menus.filter(item => item.mod === 0);
        }

        if (cards) {
          listEnt = cards.filter(item => item.plat === 0);
          listMain = cards.filter(item => item.plat === 1);
          listDessert = cards.filter(item => item.plat === 2);
          listDrink = cards.filter(item => item.plat === 3);
        }

        switch (true) {
          case (listMOD.length > 0): tempActiveTab = '1'; break;
          case (listForm.length > 0): tempActiveTab = '2'; break;
          case (listEnt.length > 0): tempActiveTab = '3'; break;
          case (listMain.length > 0): tempActiveTab = '4'; break;
          case (listDessert.length > 0): tempActiveTab = '5'; break;
          case (listDrink.length > 0): tempActiveTab = '6'; break;
          default: tempActiveTab = '0';
        }
        this.displayTab(tempActiveTab);
      }
    }
  }

  render() {
    const {
      cards,
      menus,
      error,
      handleChangeSpecial,
      loadingResto,
      activeTab,
      sendOrder: { sendOrder: { tableCommand } },
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
    let specialText = '';

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

    if (tableCommand !== undefined) {
      specialText = tableCommand.special;
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
        <Nav tabs>
          <NavItem>
            {
              listMOD.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                  {'Menu du jour'}
                </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listForm.length > 0 && (
                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                  {'Formules'}
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
            <TabPane tabId="2">
              <Row>
                <Col>
                  <Card body>
                    <DisplayMenus list={listForm} />
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
          <FormGroup>
            <br />
            <h3 className="title-spe">Instructions spéciales</h3>
            {
              !_.isEmpty(specialText)
                ? <Input className="input-shadow" type="textarea" name="special" value={specialText} onChange={e => handleChangeSpecial(e.target.name, e.target.value)} />
                : <Input className="input-shadow" type="textarea" name="special" onChange={e => handleChangeSpecial(e.target.name, e.target.value)} />
            }
          </FormGroup>
        </Form>
      </div>
    );
  }
}

function mstp(state) {
  return {
    restoInfos: state.menuResto.resto.restoInfos,
    menus: state.menuResto.resto.menus,
    cards: state.menuResto.resto.cards,
    error: state.menuResto.error,
    loading: state.menuResto.loading,
    chooseByUser: state.chooseByUser,
    sendOrder: state.sendOrder,
    getCode: state.getCode,
    log: state.log,
    loadingResto: state.cardResto.loading,
    activeTab: state.setActiveTab.activeTab,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    cardResto,
    handleChangeSpecial,
    getUserId,
    setActiveTab,
  },
  dispatch);
}


export default withRouter(connect(mstp, mdtp)(OrderMenuParticipage));
