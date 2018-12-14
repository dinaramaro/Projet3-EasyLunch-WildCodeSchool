import React, { Component } from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col,
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
      console.log(restoMenus);
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
                  <CardText>
                    { restoName }
                  </CardText>
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
                </Card>
              </Col>
            </Row>
            {restoMenus.map(menu => (
              <Nav key={menu.id_plat} tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    {menu.name}
                  </NavLink>
                </NavItem>
              </Nav>
            ))}
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
