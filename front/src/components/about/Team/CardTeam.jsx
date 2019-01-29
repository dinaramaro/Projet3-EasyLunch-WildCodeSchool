import React from 'react';

const CardTeam = ({
  mate: {
    picture, name, fonction, description,
  },
}) => (
  <div className="CardTeam">
    <img
      src={picture}
      alt="Easy-lunch-Arthur"
    />
    <h2>{name}</h2>
    <p>{fonction}</p>
    <p className="text">
      {description}
    </p>
  </div>
);

export default CardTeam;
