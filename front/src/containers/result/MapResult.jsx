import React, { Component } from 'react';
import _ from 'lodash';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardText,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './MapResult.scss';
import classnames from 'classnames';
import RestoPin from '../../components/result/RestoPin';
import RestoInfoPin from '../../components/result/RestoInfoPin';
import UserPin from '../../components/result/UserPin';
import UserInfo from '../../components/result/UserInfo';
import DisplayMeals from '../../components/result/DisplayMeals';
import DisplayTitleMenu from '../../components/result/DisplayTitleMenu';
import RestoInfos from './RestoInfos';


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
          <RestoInfoPin info={popupInfo} />
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
      menuResto: { resto },
    } = this.props;
    let listEnt = [];
    let listMain = [];
    let listDessert = [];

    if (!_.isEmpty(resto)) {
      const { menus } = resto;
      listEnt = menus.filter(item => item.plat === 0);
      listMain = menus.filter(item => item.plat === 1);
      listDessert = menus.filter(item => item.plat === 2);
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
                  <RestoInfos />
                  <DisplayTitleMenu ent={listEnt} main={listMain} dessert={listDessert} />
                  <DisplayMeals text="Entrée" meals={listEnt} />
                  <DisplayMeals text="Plat" meals={listMain} />
                  <DisplayMeals text="Dessert" meals={listDessert} />

                  <CardText>Choisir ce restaurant pour plus de détails...</CardText>
                  <br />
                  <Link to="/commande-page1"><Button className="all-btn" color="warning" type="button">Choisir ce restaurant</Button></Link>
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
