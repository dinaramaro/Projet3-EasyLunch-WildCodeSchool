import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Nav, NavItem, NavLink, Card, Col, Row, TabPane, TabContent, Form, FormGroup, Input, Button,
} from 'reactstrap';
import classnames from 'classnames';
import { varServeur } from '../../constants';
import { cardResto } from '../../actions/cardResto';
import ChooseOnCards from './ChooseOnCards';
import ChooseOnMenus from './ChooseOnMenus';
import MyMeal from './MyMeal';


class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
  }

  componentDidMount() {
    const { menuResto: { resto: { restoInfos } }, cardResto } = this.props;
    if (!_.isEmpty(restoInfos)) {
      cardResto(`${varServeur}cartes/${restoInfos.id}`);
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

  render() {
    const { activeTab } = this.state;
    const {
      menus,
      cartes,
      error,
      loading,
      chooseMeals: {
        total,
      },
    } = this.props;

    let listEnt = [];
    let listMain = [];
    let listDessert = [];
    let listDrink = [];
    let listDayEnt = [];
    let listDayMain = [];
    let listDayDessert = [];
    let listEntForm = [];
    let listMainForm = [];
    let listDessertForm = [];
    let listMOD = [];

    if (menus !== undefined) {
      listMOD = menus.filter(item => item.mod === 1);
      listEntForm = menus.filter(item => item.plat === 0 && item.mod === 0);
      listMainForm = menus.filter(item => item.plat === 1 && item.mod === 0);
      listDessertForm = menus.filter(item => item.plat === 2 && item.mod === 0);
    }

    if (cartes !== undefined) {
      listEnt = cartes.filter(item => item.plat === 0);
      listMain = cartes.filter(item => item.plat === 1);
      listDessert = cartes.filter(item => item.plat === 2);
      listDrink = cartes.filter(item => item.plat === 3);
      listDayEnt = cartes.filter(item => item.plat === 4);
      listDayMain = cartes.filter(item => item.plat === 5);
      listDayDessert = cartes.filter(item => item.plat === 6);
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
              listMOD.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                Menu du jour
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listEnt.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                Entrées
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listMain.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                Plats
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listDessert.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                Desserts
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              listDrink.length > 0 && (
              <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
                Boissons
              </NavLink>
              )}
          </NavItem>
          <NavItem>
            {
              (listEntForm.length > 0 || listMainForm.length > 0 || listDessertForm.length > 0) && (
              <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { this.toggle('6'); }}>
                Formules
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
                    <FormGroup>
                      <ChooseOnMenus text="Entrées du jour" meals={listDayEnt} />
                    </FormGroup>
                    <FormGroup>
                      <ChooseOnMenus text="Plats du jour" meals={listDayMain} />
                    </FormGroup>
                    <FormGroup>
                      <ChooseOnMenus text="Desserts du jour" meals={listDayDessert} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
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
            <TabPane tabId="3">
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
            <TabPane tabId="4">
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
            <TabPane tabId="5">
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
            <TabPane tabId="6">
              <Row>
                <Col>
                  <Card body>
                    <FormGroup>
                      <ChooseOnMenus text="Entrées" meals={listEntForm} />
                    </FormGroup>
                    <FormGroup>
                      <ChooseOnMenus text="Plats" meals={listMainForm} />
                    </FormGroup>
                    <FormGroup>
                      <ChooseOnMenus text="Desserts" meals={listDessertForm} />
                    </FormGroup>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <MyMeal />
          <FormGroup>
            <p>Instructions spéciales</p>
            <Input type="textarea" name="text" />
          </FormGroup>
          <Row>
            <Col sm={2}>
              Total :
            </Col>
            <Col sm={4}>
              {`${total} €`}
            </Col>
            <Col sm={6}>
              <Button type="submit">Payer</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

function mstp(state) {
  console.log(state);
  return {
    menuResto: state.menuResto,
    menus: state.cardResto.menus,
    cartes: state.cardResto.cartes,
    error: state.cardResto.error,
    loading: state.cardResto.loading,
    chooseMeals: state.chooseMeals,

  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    cardResto,
  },
  dispatch);
}


export default connect(mstp, mdtp)(OrderMenu);
