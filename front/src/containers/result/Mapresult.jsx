import React, { Component } from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
} from 'reactstrap';
import classnames from 'classnames';
import RestoPin from '../../components/result/resto-pin';
import RestoInfo from '../../components/result/resto-info';
import UserPin from '../../components/result/user-pin';
import UserInfo from '../../components/result/user-info';

const TOKEN = 'pk.eyJ1IjoiY3RyaSIsImEiOiJjanAyaXV1OGcwNzJpM3dwaDhwejJvZjJnIn0.bVruUQb_cXzaHLyWmk1zSg';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

const restos = [
  { titre: 'Cromagnon', lat: 44.84328199999999, lon: -0.5813342000000148 },
  { titre: 'Le monologue', lat: 44.84287820000001, lon: -0.5816670000000386 },

];


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
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState(
        {
          viewport: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            zoom: 13,
            bearing: 0,
            pitch: 0,
          },
          latitudeuser: pos.coords.latitude,
          longitudeuser: pos.coords.longitude,
        },
      );
    });
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

  renderRestoMarker = (resto, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={resto.lon}
      latitude={resto.lat}
    >
      <RestoPin size={45} onClick={() => this.setState({ popupInfo: resto })} />
    </Marker>
  )

  renderUserMarker = (index) => {
    const { longitudeuser, latitudeuser } = this.state;

    return (
      <Marker
        key={`marker-${index}`}
        longitude={longitudeuser}
        latitude={latitudeuser}
      >
        <UserPin size={45} onClick={() => this.setState({ popupUser: 'Vous êtes ici' })} />
      </Marker>
    );
  }

  renderPopup() {
    const { popupInfo } = this.state;

    return popupInfo && (
      <Popup
        tipSize={10}
        anchor="top"
        longitude={popupInfo.lon}
        latitude={popupInfo.lat}
        onClose={() => this.setState({ popupInfo: null })}
      >
        <RestoInfo info={popupInfo} />
      </Popup>
    );
  }

  renderPopupUser() {
    const { latitudeuser, longitudeuser, popupUser } = this.state;

    return popupUser && (
      <Popup
        tipSize={10}
        anchor="top"
        longitude={longitudeuser}
        latitude={latitudeuser}
        onClose={() => this.setState({ popupUser: null })}
      >
        <UserInfo info={popupUser} />
      </Popup>
    );
  }

  render() {
    const {
      viewport,
      activeTab,
    } = this.state;

    return (
      <div>
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

                  {restos.map(this.renderRestoMarker)}
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
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>Text</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Mapresult;
