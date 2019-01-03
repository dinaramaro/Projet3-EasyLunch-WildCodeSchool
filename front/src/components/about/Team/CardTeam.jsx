import React from 'react';

const CardTeam = ({
  img, name, fonction, description,
}) => (
  <div className="CardTeam">
    <img
      src={img}
      alt="Easy-lunch-Arthur"
    />
    <h1>{name}</h1>
    <p>{fonction}</p>
    <p className="text">
      {description}
    </p>
  </div>
);

export default CardTeam;
