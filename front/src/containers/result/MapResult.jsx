import React, { Component } from 'react';
import _ from 'lodash';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
import {
  Row,
  Col,
} from 'reactstrap';
import './MapResult.scss';
import RestoPin from '../../components/result/RestoPin';
import RestoInfoPin from '../../components/result/RestoInfoPin';
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
      latitudeuser: 0,
      longitudeuser: 0,
      popupUser: null,
    };
    this.closePopupInfo = this.closePopupInfo.bind(this);
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

  closePopupInfo() {
    this.onClickMarker('popupInfo', null);
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
        >
          <RestoInfoPin
            info={popupInfo}
            onClickCard={this.closePopupInfo}
          />
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
          onClose={this.closePopupInfo}
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
    } = this.state;
    const {
      searchResults: { results },
    } = this.props;

    return (
      <div className="MapResult">
        <Row>
          <Col sm="12">
            <MapGL
              className="Mapresult"
              {...viewport}
              width="38vw"
              height="35vw"
              mapStyle="mapbox://styles/mapbox/light-v9"
              onViewportChange={this.updateViewport}
              mapboxApiAccessToken={TOKEN}
              onClick={this.closePopupInfo}
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
