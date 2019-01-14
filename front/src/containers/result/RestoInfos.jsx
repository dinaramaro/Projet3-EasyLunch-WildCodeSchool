import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  CardText,
} from 'reactstrap';


class RestoInfos extends Component {
  render() {
    const {
      menuResto: { resto: { restoInfos } },
    } = this.props;

    let days = [];
    let restoName = '';
    let restoAddress = '';
    let restoCity = '';


    if (!_.isEmpty(restoInfos)) {
      if ((restoInfos.schedule !== undefined) && (restoInfos.schedule !== null)) {
        days = restoInfos.schedule.substring(1, restoInfos.schedule.length - 1).split(',');
      }
      restoName = restoInfos.name;
      restoAddress = restoInfos.address;
      restoCity = restoInfos.city;
    }
    return (
      <div className="RestoInfos">
        <h3>{restoName}</h3>
        <CardText>{restoAddress}</CardText>
        <CardText>{restoCity}</CardText>
        <CardText>
          {days.map((day, index) => {
            let concatDays = '';
            if (index === 0) {
              concatDays = 'Ouverture : ';
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
      </div>
    );
  }
}

function mstp(state) {
  return {
    menuResto: state.menuResto,
  };
}

export default connect(mstp)(RestoInfos);
