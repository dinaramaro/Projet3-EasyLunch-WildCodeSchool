import React from 'react';
import { connect } from 'react-redux';


const InfoGe = (props) => {
  const { formulaire: { date, hour, nb } } = props;

  return (
    <div className="InfoGe">
      <p>Informations générales</p>
      <p>Date : {date}</p>
      <p>Heure : {hour}</p>
      <p>Nombre de personnes : {nb} </p>
    </div>
  );
};

function mstp(state) {
  return {
    formulaire: state.formOrder.formulaire,
  };
}

export default connect(mstp)(InfoGe);
