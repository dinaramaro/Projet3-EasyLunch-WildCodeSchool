import React from 'react';
import { connect } from 'react-redux';


const MyMeal = ({ chooseByUser: { tabs } }) => {
  let subtitle = '';
  if (tabs[0] !== undefined) {
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
  return (
    <div className="MyMeal">
      <p>Mon repas</p>
      {(tabs[0] !== undefined) && (tabs[0].menuname !== '') && (tabs[0].menuname !== undefined) && (
        <div>
          <p className="underline">{`${tabs[0].menuname} ${subtitle}`}</p>
        </div>
      )}
      {tabs.map(item => <p key={item[item.text]}>{`${item.text} : ${item[item.text]}`}</p>)}
    </div>
  );
};

function mstp(state) {
  return {
    chooseByUser: state.chooseByUser,
  };
}

export default connect(mstp)(MyMeal);
