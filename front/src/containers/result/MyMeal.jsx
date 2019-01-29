import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './MyMeal.scss';


const MyMeal = ({ chooseByUser: { tabs }, sendOrder: { tableCommand } }) => {
  let subtitle = '';
  if (!_.isEmpty(tabs[0])) {
    switch (tabs[0].nbmeals) {
      case 2:
        subtitle = ': Entrée | Plat ou Plat | Dessert';
        break;
      case 3:
        subtitle = ': Entrée | Plat | Dessert';
        break;
      default:
        subtitle = '';
    }
  }
  let specialMeal = '';
  if (!_.isEmpty(tableCommand)) {
    const { special } = tableCommand;
    specialMeal = special;
  }
  return (
    <div className="MyMeal">
      {
        tabs.length > 0 && (
          <h3 className="title-meal">Mon repas</h3>
        )
      }
      {(!_.isEmpty(tabs[0])) && (!_.isEmpty(tabs[0].menuname)) && (
        <div>
          <p className="underline">{`${tabs[0].menuname} ${subtitle}`}</p>
        </div>
      )}
      {tabs.map(item => <p key={item[item.text]}>{`${item.text} : ${item[item.text]}`}</p>)}
      {
        !_.isEmpty(specialMeal) && (
          <p>{`Instructions spéciales : ${specialMeal}`}</p>
        )
      }
    </div>
  );
};

function mstp(state) {
  return {
    chooseByUser: state.chooseByUser,
    sendOrder: state.sendOrder.sendOrder,
  };
}

export default connect(mstp)(MyMeal);
