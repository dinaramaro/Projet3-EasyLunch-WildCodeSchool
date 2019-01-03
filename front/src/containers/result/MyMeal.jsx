import React from 'react';
import { connect } from 'react-redux';


const MyMeal = (props) => {
  const { chooseMeals: { tabs } } = props;
  return (
    <div className="MyMeal">
      <p>Mon repas</p>
      {tabs.map(item => 
        <p>{item.name} {' '} {item.price} €</p>
      )}
    </div>
  );

}

function mstp(state) {
  return {
    chooseMeals: state.chooseMeals,
  };
}

export default connect(mstp)(MyMeal);
