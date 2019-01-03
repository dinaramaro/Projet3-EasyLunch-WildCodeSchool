import React from 'react';


const DisplayMeals = ({ text, meals }) => (
  <div>
    {
      meals.length > 0
        ? <p>{text}</p>
        : ''
    }
    {
      meals.map(item => (
        <div key={item.meals_name}>
          <p>{item.meals_name}</p>
        </div>
      ))
    }
  </div>
);

export default DisplayMeals;
