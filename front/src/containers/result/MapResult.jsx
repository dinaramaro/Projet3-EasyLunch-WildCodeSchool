import React, { Component } from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, CardText, Row, Col, Button,
} from 'reactstrap';
import './MapResult.scss';
import classnames from 'classnames';
import RestoPin from '../../components/result/RestoPin';
import RestoInfo from '../../components/result/RestoInfo';
import UserPin from '../../components/result/UserPin';
import UserInfo from '../../components/result/UserInfo';

const TOKEN = 'pk.eyJ1IjoiY3RyaSIsImEiOiJjanAyaXV1OGcwNzJpM3dwaDhwejJvZjJnIn0.bVruUQb_cXzaHLyWmk1zSg';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

class Mapresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {},
      popupInfo: null,
      activeTab: '1',
      activessTab: '10',
      latitudeuser: 0,
      longitudeuser: 0,
      popupUser: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState(
        {
          viewport: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            zoom: 11,
            bearing: 0,
            pitch: 0,
          },
          latitudeuser: pos.coords.latitude,
          longitudeuser: pos.coords.longitude,
        },
      );
    });
  }

  onClickMarker(key, value) {
    this.setState({ [key]: value });
  }

  updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  togglessTab(tab) {
    const { activessTab } = this.state;
    if (activessTab !== tab) {
      this.setState({
        activessTab: tab,
      });
    }
  }

  renderRestoMarker = (resto, index) => {
    const lonNumber = parseFloat(resto.lon);
    const latNumber = parseFloat(resto.lat);
    return (
      <Marker
        key={`marker-${index}`}
        longitude={lonNumber}
        latitude={latNumber}
        anchor="top"
        offsetLeft={-25}
        offsetTop={10}
      >
        <RestoPin size={40} onClick={() => this.onClickMarker('popupInfo', resto)} />
      </Marker>
    );
  }

  renderUserMarker = (index) => {
    const { longitudeuser, latitudeuser } = this.state;

    return (
      <Marker
        key={`marker-${index}`}
        longitude={longitudeuser}
        latitude={latitudeuser}
        anchor="bottom-right"
        offsetLeft={0}
        offsetTop={0}
      >
        <UserPin onClick={() => this.onClickMarker()} />
      </Marker>
    );
  }

  renderPopup() {
    const { popupInfo } = this.state;
    if (popupInfo !== null) {
      return (
        <Popup
          tipSize={10}
          anchor="top"
          longitude={popupInfo.lon}
          latitude={popupInfo.lat}
          onClose={() => this.onClickMarker('popupInfo', null)}
        >
          <RestoInfo info={popupInfo} />
        </Popup>
      );
    }
    return popupInfo;
  }

  renderPopupUser() {
    const { latitudeuser, longitudeuser, popupUser } = this.state;
    if (popupUser !== null) {
      return (
        <Popup
          tipSize={10}
          anchor="top"
          longitude={longitudeuser}
          latitude={latitudeuser}
          onClose={() => this.onClickMarker('popupUser', null)}
        >
          <UserInfo info={popupUser} />
        </Popup>
      );
    }
    return popupUser;
  }

  render() {
    const {
      viewport,
      activeTab,
    } = this.state;
    const {
      searchResults: { results },
      menuResto: { cartes: { restoInfos, menus } },
    } = this.props;
    let days = [];
    let restoName = '';
    let restoAddress = '';
    let restoCity = '';
    let restoMenus = [];
    let tempId = 0;
    let tempMeal = 9;
    let typeMeal = '';
    let tempTypeMeal = '';

    if (restoInfos !== undefined) {
      if ((restoInfos.schedule !== undefined) && (restoInfos.schedule !== null)) {
        days = restoInfos.schedule.substring(1, restoInfos.schedule.length - 1).split(',');
      }
      restoName = restoInfos.name;
      restoAddress = restoInfos.address;
      restoCity = restoInfos.city;
    }
    if (menus !== undefined) {
      restoMenus = menus;
    }

    return (
      <div className="MapResult">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Carte
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Menu
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <MapGL
                  className="Mapresult"
                  {...viewport}
                  width="100%"
                  height="650px"
                  mapStyle="mapbox://styles/mapbox/light-v9"
                  onViewportChange={this.updateViewport}
                  mapboxApiAccessToken={TOKEN}
                >

                  {results.map(this.renderRestoMarker)}
                  {this.renderUserMarker()}
                  {this.renderPopup()}
                  {this.renderPopupUser()}

                  <div className="nav" style={navStyle}>
                    <NavigationControl onViewportChange={this.updateViewport} />
                  </div>

                </MapGL>

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                  <h3>
                    { restoName }
                  </h3>
                  <CardText>
                    { restoAddress }
                  </CardText>
                  <CardText>
                    { restoCity }
                  </CardText>
                  <CardText>
                    {days.map((day, index) => {
                      let concatDays = '';
                      if (index === 0) {
                        concatDays = `${concatDays}Ouverture : `;
                      }
                      switch (day) {
                        case '0':
                          return `${concatDays} Lundi `;
                        case '1':
                          return `${concatDays} Mardi `;
                        case '2':
                          return `${concatDays} Mercredi `;
                        case '3':
                          return `${concatDays} Jeudi `;
                        case '4':
                          return `${concatDays} Vendredi `;
                        case '5':
                          return `${concatDays} Samedi `;
                        case '6':
                          return `${concatDays} Dimanche `;
                        default:
                          return concatDays;
                      }
                    })}
                  </CardText>
                  <br />
                  <CardText>
                    {restoMenus.map((item) => {
                      tempMeal = item.plat;
                      switch (tempMeal) {
                        case 0:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Entrée')) {
                            tempTypeMeal = 'Entrée';
                            typeMeal = 'Entrée';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        case 1:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Plat')) {
                            tempTypeMeal = 'Plat';
                            typeMeal = 'Plat';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        case 2:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Dessert')) {
                            tempTypeMeal = 'Dessert';
                            typeMeal = 'Dessert';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        case 3:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Boisson')) {
                            tempTypeMeal = 'Boisson';
                            typeMeal = 'Boisson';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        case 4:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Entrée du jour')) {
                            tempTypeMeal = 'Entrée du jour';
                            typeMeal = 'Entrée du jour';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        case 5:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Plat du jour')) {
                            tempTypeMeal = 'Plat du jour';
                            typeMeal = 'Plat du jour';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        case 6:
                          if ((tempTypeMeal === '') || (tempTypeMeal !== 'Dessert du jour')) {
                            tempTypeMeal = 'Dessert du jour';
                            typeMeal = 'Dessert du jour';
                          } else {
                            typeMeal = '';
                          }
                          break;
                        default:
                          typeMeal = '';
                      }
                      if (tempId !== item.id) {
                        tempId = item.id;
                        let tempNbMeals = '';
                        switch (item.nbmeals) {
                          case 1:
                            tempNbMeals = '';
                            break;
                          case 2:
                            tempNbMeals = 'Entrée | Plat ou Plat | Dessert';
                            break;
                          case 3:
                            tempNbMeals = 'Entrée | Plat | Dessert';
                            break;
                          default:
                            tempNbMeals = '';
                        }
                        return (
                          <div key={`${item.id}${item.id_plat}`}>
                            <h5>
                              {item.menu_name}
                              {' '}
                              {item.menu_price}
                              €
                              {' '}
                            </h5>
                            <p className="number-meals">{tempNbMeals}</p>
                            <br />
                            <p className="type-meal">{typeMeal}</p>
                            <p>{item.meals_name}</p>
                          </div>
                        );
                      }
                      return (
                        <div>
                          <p className="type-meal">{typeMeal}</p>
                          <p>{item.meals_name}</p>
                        </div>
                      );
                    })}
                  </CardText>
                  <p>Choisir ce restaurant pour plus de détails...</p>
                  <br />
                  <Button className="all-btn" color="warning" type="button">Choisir ce restaurant</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

function mstp(state) {
  return {
    searchResults: state.searchResults,
    menuResto: state.menuResto,
  };
}

export default connect(mstp)(Mapresult);
